"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    image: "/resume-templates/modern-template.png",
    category: "Professional",
  },
  {
    id: 2,
    name: "Creative Designer",
    image: "/creative-resume-template-with-colorful-design-elem.jpg",
    category: "Creative",
  },
  {
    id: 3,
    name: "Executive Classic",
    image: "/classic-executive-resume-template-with-traditional.jpg",
    category: "Executive",
  },
  {
    id: 4,
    name: "Tech Specialist",
    image: "/tech-resume-template-with-modern-grid-layout.jpg",
    category: "Technology",
  },
  {
    id: 5,
    name: "Minimalist Clean",
    image: "/minimalist-resume-template-with-lots-of-white-spac.jpg",
    category: "Minimalist",
  },
  {
    id: 6,
    name: "Academic Scholar",
    image: "/academic-resume-template-with-formal-structure.jpg",
    category: "Academic",
  },
]

export default function TemplatesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Choose from Professional Templates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Select from our collection of expertly designed resume templates
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="templates-swiper"
          >
            {templates.map((template) => (
              <SwiperSlide key={template.id}>
                <div className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-[0_0_10px_#00FFFF] backdrop:blur-md   ">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={`${template.name} resume template`}
                      width={400}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                      Use Template
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
            <ChevronLeft className="w-5 h-5 " />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        .templates-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: hsl(var(--muted-foreground));
          opacity: 0.3;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: hsl(var(--primary));
          opacity: 1;
          transform: scale(1.2);
        }
        
        .templates-swiper {
          padding-bottom: 60px;
        }
      `}</style>
    </section>
  )
}
