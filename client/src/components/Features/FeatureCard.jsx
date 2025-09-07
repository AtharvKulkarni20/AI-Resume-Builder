import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}) {
  return (
    <div className="rounded-xl shadow-[0_0_15px_#00FFFF] backdrop:blur-md  hover:-translate-y-3 transition-transform duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-center text-transparent font-semibold border-2 border-solid-white  rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex flex-col space-y-4 items-center justify-center ">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300   ">
            <Icon className="h-6 w-6 text-white align-middle " />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
