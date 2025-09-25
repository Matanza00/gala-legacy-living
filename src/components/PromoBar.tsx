import { X } from "lucide-react";
import { useState } from "react";

const PromoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <p className="text-sm font-semibold tracking-wider uppercase">
              🎉 Grand Opening Special: First Month Free + No Application Fee
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-accent-foreground/10 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;