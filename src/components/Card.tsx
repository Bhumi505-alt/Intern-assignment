import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className, hover = false, onClick }: CardProps) => {
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={onClick}
        className={cn(
          "rounded-xl border bg-card text-card-foreground shadow-sm p-6 cursor-pointer hover:shadow-lg transition-shadow",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm p-6",
        className
      )}
    >
      {children}
    </div>
  );
};