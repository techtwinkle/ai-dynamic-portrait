import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A beautiful and functional web application",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Project Two",
    description: "An innovative mobile application",
    image: "/placeholder.svg",
    link: "#",
  },
  {
    title: "Project Three",
    description: "A responsive website design",
    image: "/placeholder.svg",
    link: "#",
  },
];

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
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Selected Work
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-secondary/50 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;