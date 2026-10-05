import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-24 bg-white border-b border-[#E8E6E1]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B81828]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#14171E] tracking-tight font-heading">
            See the Finish in{' '}
            <span className="font-serif italic font-normal text-[#B81828]">Action.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555B66]">
            Drag the slider horizontally to reveal the complete surface transformation—from weathered Florida
            stucco to a precision-sealed weather shield finish.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative max-w-4xl mx-auto h-[380px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white select-none cursor-ew-resize"
        >
          {/* After Image (Full width background) */}
          <img
            src="/images/hero-exterior-waterfront.jpg"
            alt="After: Renewall Exterior Paint Transformation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* After Badge */}
          <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-[#0E1116]/85 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-md">
            AFTER: Renewall Sealed Weather-Shield
          </div>

          {/* Before Image (Clipped by slider position) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="/images/exterior-pool-patio.jpg"
              alt="Before Transformation Detail"
              className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: '100%',
              }}
            />

            {/* Before Badge */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#B81828]/90 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-md">
              INITIAL: Surface Weathering &amp; Prep
            </div>
          </div>

          {/* Vertical Slider Handle Line */}
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Circular Grabber */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#B81828] text-white flex items-center justify-center shadow-xl border-2 border-white">
              <MoveHorizontal className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
