import { motion } from "framer-motion";

const Work = () => {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-muted-foreground mb-4 inline-block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
            Selected Work
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;