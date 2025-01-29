import { motion } from "framer-motion";
import GlassyLayout from "@/components/GlassyLayout";
import { Link } from "react-router-dom";

const Contact = () => {
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
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 animate-gradient">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we
              can work together to create something great.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center h-11 px-8 font-medium tracking-wide text-primary-foreground transition-colors duration-200 rounded-md bg-primary hover:bg-primary/90"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </GlassyLayout>
      </div>
    </main>
  );
};

export default Contact;