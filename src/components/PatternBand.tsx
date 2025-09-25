import { ReactNode } from "react";

interface PatternBandProps {
  children?: ReactNode;
  className?: string;
}

const PatternBand = ({ children, className = "" }: PatternBandProps) => {
  return (
    <section className={`marble-pattern py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default PatternBand;