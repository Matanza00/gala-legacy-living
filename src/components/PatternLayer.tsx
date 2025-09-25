import { ReactNode } from "react";

interface PatternLayerProps {
  imageUrl?: string;
  fixed?: boolean;
  opacity?: number;
  tintColor?: string;
  mobileFallback?: 'parallax' | 'static';
  children?: ReactNode;
  className?: string;
}

const PatternLayer = ({ 
  imageUrl = "/assets/marble-pattern.svg",
  fixed = true,
  opacity = 1,
  tintColor = "rgba(75,16,56,0.05)",
  mobileFallback = 'static',
  children,
  className = ""
}: PatternLayerProps) => {
  const patternStyle = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    opacity: opacity,
  };

  const overlayStyle = {
    backgroundColor: tintColor,
  };

  return (
    <>
      {/* Fixed Pattern Layer */}
      <div 
        className={`site-pattern-layer ${fixed ? 'fixed' : 'absolute'} inset-0 z-0 pointer-events-none ${
          mobileFallback === 'static' ? 'lg:fixed' : ''
        }`}
        style={patternStyle}
        aria-hidden="true"
      />
      
      {/* Tint Overlay */}
      {tintColor && (
        <div 
          className={`pattern-tint ${fixed ? 'fixed' : 'absolute'} inset-0 z-0 pointer-events-none ${
            mobileFallback === 'static' ? 'lg:fixed' : ''
          }`}
          style={overlayStyle}
          aria-hidden="true"
        />
      )}
      
      {/* Content Over Pattern */}
      <div className={`content-over-pattern relative z-10 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default PatternLayer;