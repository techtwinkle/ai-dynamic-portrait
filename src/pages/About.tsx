import { motion } from "framer-motion";
import GlassyLayout from "@/components/GlassyLayout";
import { Link } from "react-router-dom";

const About = () => {
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
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
              Passionate about creating meaningful digital experiences
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With a keen eye for detail and a deep understanding of user experience,
              I craft digital solutions that not only look beautiful but also solve
              real problems.
            </p>
          </motion.div>
        </GlassyLayout>
      </div>
    </main>
  );
};

export default About;