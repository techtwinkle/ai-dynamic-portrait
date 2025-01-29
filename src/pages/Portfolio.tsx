import { motion } from "framer-motion";
import GlassyLayout from "@/components/GlassyLayout";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background text-foreground py-24">
      <div className="container mx-auto px-4">
        <GlassyLayout>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link to="/" className="text-primary/80 hover:text-primary mb-8 inline-block">
              ← Back to Home
            </Link>
            <span className="text-sm uppercase tracking-wider text-muted-foreground mb-4 inline-block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
              Selected Work
            </h2>
            {/* Add your portfolio items here */}
          </motion.div>
        </GlassyLayout>
      </div>
    </main>
  );
};

export default Portfolio;