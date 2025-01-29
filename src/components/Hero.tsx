import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-90" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-wider text-muted-foreground mb-4 inline-block">
            Welcome
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            Creating Digital
            <br /> Experiences
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafting beautiful, intuitive interfaces with meticulous attention to
            detail and a focus on user experience.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-primary hover:bg-primary/90"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;