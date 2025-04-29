import * as React from "react";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex items-end justify-center gap-[2px] sm:gap-[1px] md:gap-2 rounded-3xl py-1 sm:py-1 max-sm:py-0.5 shadow-sm border-none backdrop-blur-xl bg-black/80 overflow-hidden",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const multiplier = isMobile ? 0.5 : 1;

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useTransform(distance, [-150, 0, 150], [70, 130, 90].map(v => v * multiplier));
  const iconSize = useTransform(distance, [-150, 0, 150], [36, 60, 36].map(v => v * multiplier));

  const animatedSize = useSpring(size, {
    mass: 0.1,
    stiffness: 100,
    damping: 12,
  });
  const animatedIconSize = useSpring(iconSize, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <motion.div
        ref={ref}
        style={{ width: animatedSize, height: animatedSize }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-full shadow-xl border-none"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 whitespace-nowrap rounded-md border border-gray-700 bg-black/90 px-3 py-1 text-sm max-sm:text-xs max-sm:-top-8 text-white shadow-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: animatedIconSize, height: animatedIconSize }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default FloatingDock;
