import { motion } from "framer-motion";

const companies = [
  { name: "Accenture", logo: "/accenture-logo.png" },
  { name: "Booking.com", logo: "/booking-logo.png" },
  { name: "DHL", logo: "/generic-delivery-logo.png" },
  { name: "Adobe", logo: "/adobe-logo.png" },
  { name: "Amazon", logo: "/amazon-logo.png" },
  { name: "Apple", logo: "/apple-logo-minimalist.png" },
  { name: "Google", logo: "/google-logo.png" },
];

export default function CompanyLogos() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">
            You can land a job at companies like
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-48 h-32 shadow-[0_0_15px_#00FFFF] backdrop-blur-md hover:-translate-y-3 transition-transform duration-300 p-4 rounded-xl bg-white/5"
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
