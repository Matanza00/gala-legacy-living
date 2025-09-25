import { ReactNode } from "react";
import PatternLayer from "./PatternLayer";

interface PatternBandProps {
  children?: ReactNode;
  className?: string;
  useFixedPattern?: boolean;
  patternOpacity?: number;
}

const PatternBand = ({ 
  children, 
  className = "",
  useFixedPattern = false,
  patternOpacity = 1
}: PatternBandProps) => {
  if (useFixedPattern) {
    return (
      <PatternLayer 
        fixed={true} 
        opacity={patternOpacity}
        className={`py-16 ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="pattern-card rounded-2xl p-8">
            {children}
          </div>
        </div>
      </PatternLayer>
    );
  }

  return (
    <section className={`marble-pattern py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default PatternBand;