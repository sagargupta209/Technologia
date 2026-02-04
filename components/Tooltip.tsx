import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      let left = 0;
      let top = 0;
      
      switch (position) {
        case 'top':
          left = rect.left + rect.width / 2;
          top = rect.top;
          break;
        case 'bottom':
          left = rect.left + rect.width / 2;
          top = rect.bottom;
          break;
        case 'left':
          left = rect.left;
          top = rect.top + rect.height / 2;
          break;
        case 'right':
          left = rect.right;
          top = rect.top + rect.height / 2;
          break;
      }

      setCoords({ left, top });
    }
  };

  const handleMouseEnter = () => {
    updatePosition();
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  // Determine styles based on position
  let tooltipStyle: React.CSSProperties = {};
  let arrowClass = '';
  
  const offset = 8; // Distance from element

  switch (position) {
    case 'top':
      tooltipStyle = {
        top: coords.top - offset,
        left: coords.left,
        transform: 'translate(-50%, -100%)'
      };
      arrowClass = 'absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-white/20 transform rotate-45';
      break;
    case 'bottom':
      tooltipStyle = {
        top: coords.top + offset,
        left: coords.left,
        transform: 'translate(-50%, 0)'
      };
      arrowClass = 'absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-t border-l border-white/20 transform rotate-45';
      break;
    case 'left':
      tooltipStyle = {
        top: coords.top,
        left: coords.left - offset,
        transform: 'translate(-100%, -50%)'
      };
      arrowClass = 'absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 border-t border-r border-white/20 transform rotate-45';
      break;
    case 'right':
      tooltipStyle = {
        top: coords.top,
        left: coords.left + offset,
        transform: 'translate(0, -50%)'
      };
      arrowClass = 'absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 border-b border-l border-white/20 transform rotate-45';
      break;
  }

  return (
    <>
      <div 
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVisible(false)}
        style={{ display: 'contents' }}
      >
        {children}
      </div>
      {isVisible && createPortal(
        <div 
          className="fixed z-[9999] px-3 py-1.5 text-xs font-medium text-white bg-slate-900 border border-white/20 rounded-lg shadow-xl pointer-events-none transition-all duration-200 animate-in fade-in zoom-in-95"
          style={tooltipStyle}
        >
          {content}
          <div className={arrowClass} />
        </div>,
        document.body
      )}
    </>
  );
};

export default Tooltip;