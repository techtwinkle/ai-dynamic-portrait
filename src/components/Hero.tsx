import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "> Hello, I'm a Creative Developer_";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="terminal-text text-xl md:text-2xl text-primary/80 mb-6">
            {text}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
            Crafting Digital
            <br /> Experiences
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Building innovative web experiences with modern technologies and creative design.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <Link
              to="/about"
              className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide transition-colors duration-200 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
            >
              About Me
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide transition-colors duration-200 rounded-md border border-primary/20 hover:bg-primary/10"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide transition-colors duration-200 rounded-md border border-primary/20 hover:bg-primary/10"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;