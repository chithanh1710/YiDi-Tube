import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;

    const observer = new ResizeObserver((entries) => {
      const container = entries[0].target;

      if (container == null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  const TRANSLATE_AMOUNT = 200;

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: ` translateX(-${translate}px) ` }}
      >
        {categories.map((name) => (
          <Button
            variant={selectedCategory === name ? "dark" : "default"}
            key={name}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
            onClick={() => onSelect(name)}
          >
            {name}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            size="icon"
            variant="ghost"
            className="h-full aspect-square w-auto p-1.5 "
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                else return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full">
          <Button
            size="icon"
            variant="ghost"
            className="h-full aspect-square w-auto p-1.5 float-right"
            onClick={() => {
              setTranslate((translate) => {
                if (containerRef.current == null) return translate;
                const newTranslate = translate + TRANSLATE_AMOUNT;

                const edeg = containerRef.current?.scrollWidth;
                const width = containerRef.current?.clientWidth;

                if (newTranslate + width >= edeg) return edeg - width;

                return newTranslate;
              });
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
