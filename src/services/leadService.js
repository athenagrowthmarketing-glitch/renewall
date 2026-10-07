/**
 * LeadConnector / GoHighLevel Webhook & reCAPTCHA v3 Integration
 */

export const RECAPTCHA_SITE_KEY = '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-';
export const RECAPTCHA_SECRET_KEY = '6LfOpRctAAAAAFsfHCAki_z8RXXZtiJjaTdyOzAX';
export const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/URiDtMues3unIoWCPYJa/webhook-trigger/3934d04a-4ec5-4882-aaa4-d25d347fa2ef';

/**
 * Execute reCAPTCHA v3 with a strict 600ms timeout so it NEVER holds back webhook delivery
 */
export async function getRecaptchaToken(action = 'estimate_submission') {
  if (typeof window === 'undefined') return null;

  return new Promise((resolve) => {
    // 600ms fail-safe timeout
    const timer = setTimeout(() => {
      resolve(null);
    }, 600);

    try {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
            clearTimeout(timer);
            resolve(token);
          } catch (err) {
            clearTimeout(timer);
            resolve(null);
          }
        });
      } else {
        clearTimeout(timer);
        resolve(null);
      }
    } catch (e) {
      clearTimeout(timer);
      resolve(null);
    }
  });
}

/**
 * Send full lead data to GoHighLevel / LeadConnector webhook
 */
export async function submitLeadToWebhook(formData, formType = 'Detailed Scoping Form') {
  // 1. Fetch reCAPTCHA v3 token (failsafe within 600ms)
  let token = null;
  try {
    token = await getRecaptchaToken(formType.toLowerCase().replace(/[^a-z0-9]/g, '_'));
  } catch (err) {
    console.warn('[Renewall] reCAPTCHA skipped:', err);
  }

  // 2. Parse First and Last Name for CRM contact mapping
  const rawName = (formData.name || '').trim();
  const nameParts = rawName.split(/\s+/);
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  // 3. Assemble complete payload mapped to standard and custom CRM fields
  const payload = {
    // Contact Identification (Matches: "Full Name *" / "Your Full Name *")
    name: rawName,
    full_name: rawName,
    fullName: rawName,
    first_name: firstName,
    firstName: firstName,
    last_name: lastName,
    lastName: lastName,

    // Phone (Matches: "Phone Number *")
    phone: formData.phone || '',
    phone_number: formData.phone || '',
    phoneNumber: formData.phone || '',

    // Email (Matches: "Email *" / "Email Address *")
    email: formData.email || '',
    email_address: formData.email || '',
    emailAddress: formData.email || '',

    // Geographic Details (Matches: "City or ZIP Code *" / "City or ZIP Code in SWFL *")
    zip: formData.zip || '',
    postal_code: formData.zip || '',
    postalCode: formData.zip || '',
    city: formData.zip || '',
    city_or_zip: formData.zip || '',
    cityOrZip: formData.zip || '',
    address: formData.zip || '',

    // Project Notes (Matches: "Project Notes (Optional)" / "Project Notes or Specific Needs (Optional)")
    notes: formData.notes || '',
    project_notes: formData.notes || '',
    projectNotes: formData.notes || '',
    message: formData.notes || '',
    description: formData.notes || '',

    // Service & Scope Details (Matches: "Service Type" / Step 1)
    service: formData.service || '',
    service_type: formData.service || '',
    serviceType: formData.service || '',
    selected_service: formData.service || '',
    project_size: formData.size || '',
    home_size: formData.size || '',
    size: formData.size || '',
    timing: formData.timing || '',
    timeframe: formData.timing || '',
    timeline: formData.timing || '',

    // Context & Attribution
    form_type: formType,
    formType: formType,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof document !== 'undefined' ? document.title : '',
    source: 'Renewall Remodeling Website',
    submitted_at: new Date().toISOString(),

    // Security & reCAPTCHA v3
    recaptcha_token: token || '',
    recaptcha_secret: RECAPTCHA_SECRET_KEY,
  };

  console.log('[Renewall Webhook] Sending lead payload to GoHighLevel:', payload);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('[Renewall Webhook] Response status:', response.status);

    return {
      success: true,
      data: payload,
    };
  } catch (error) {
    console.warn('[Renewall Webhook] Primary JSON fetch error, attempting fallback:', error);
    
    // Fallback: If ad-blocker or CORS blocked the standard fetch, send via Beacon or urlencoded no-cors
    try {
      const urlEncoded = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => urlEncoded.append(k, String(v)));
      
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncoded.toString(),
      });
      console.log('[Renewall Webhook] Dispatched via fallback no-cors');
    } catch (fallbackError) {
      console.error('[Renewall Webhook] Fallback failed:', fallbackError);
    }

    return {
      success: true,
      error: error.message,
      data: payload,
    };
  }
}
