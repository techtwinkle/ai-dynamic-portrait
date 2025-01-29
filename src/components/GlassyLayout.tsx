import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassyLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const GlassyLayout = ({ children, className }: GlassyLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "backdrop-blur-md bg-secondary/5 border border-primary/10",
        "shadow-[0_0_1000px_0_rgba(0,0,0,0.3)] rounded-xl p-8",
        "hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassyLayout;