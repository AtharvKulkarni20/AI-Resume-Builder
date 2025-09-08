import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Star, Quote } from "lucide-react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Marketing Manager",
    company: "TechCorp",
    avatar: "/testimonial-avatars/sarah-johnson.jpg",
    rating: 5,
    feedback:
      "AI Resume helped me land my dream job in just 2 weeks! The templates are professional and the AI suggestions were spot-on.",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Software Engineer",
    company: "StartupXYZ",
    avatar: "/testimonial-avatars/sarah-johnson.jpg",
    rating: 5,
    feedback:
      "The ATS-friendly templates made all the difference. I got more interview calls than ever before. Highly recommend!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    designation: "Product Designer",
    company: "DesignStudio",
    avatar: "/testimonial-avatars/sarah-johnson.jpg",
    rating: 5,
    feedback:
      "Creating my resume was so quick and easy. The AI-powered suggestions helped me highlight my best achievements perfectly.",
  },
  {
    id: 4,
    name: "David Thompson",
    designation: "Sales Director",
    company: "GlobalSales Inc",
    avatar: "/testimonial-avatars/sarah-johnson.jpg",
    rating: 5,
    feedback:
      "Professional templates and expert content curation. This platform transformed my career prospects completely.",
  },
  {
    id: 5,
    name: "Lisa Wang",
    designation: "Data Scientist",
    company: "Analytics Pro",
    avatar: "/testimonial-avatars/sarah-johnson.jpg",
    rating: 5,
    feedback:
      "The templates are modern and clean. I received multiple job offers within a month of updating my resume here.",
  },
  {
    id: 6,
    name: "James Miller",
    designation: "Project Manager",
    company: "Enterprise Solutions",
    avatar: "/testimonial-avatars/sarah-johnson.jpg",
    rating: 5,
    feedback:
      "Outstanding platform! The AI assistance and professional templates helped me stand out from hundreds of applicants.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl p-6  hover:shadow-lg transition-all duration-300 h-full shadow-[0_0_15px_#00FFFF] backdrop:blur-md"
    >
      <div className="flex flex-col h-full ">
        <div className="flex items-center mb-4">
          <Quote className="w-8 h-8 text-primary/30 mb-2" />
        </div>

        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          "{testimonial.feedback}"
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ">
              <image
                src={"@/public/person.webp"}
                alt={`${testimonial.name} avatar`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                {testimonial.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.designation} at {testimonial.company}
              </p>
            </div>
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what professionals are saying
            about AI Resume
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} index={0} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: -50px !important;
        }

        .testimonials-swiper {
          padding-bottom: 60px;
        }
      `}</style>
    </section>
  )
}
