import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// All your image imports
import photo1 from '/images/img (1).jpg';
import photo2 from '/images/img (2).jpg';
import photo3 from '/images/img (3).jpg';
import photo4 from '/images/img (4).jpg';
import photo5 from '/images/img (5).jpg';
import photo6 from '/images/img (6).jpg';
import photo7 from '/images/img (7).jpg';
import photo8 from '/images/img (8).jpg';
import photo9 from '/images/img (9).jpg';
import photo10 from '/images/img (10).jpg';
import photo11 from '/images/img (11).jpg';
import photo12 from '/images/img (12).jpg';
import photo13 from '/images/img (13).jpg';
import photo14 from '/images/img (14).jpg';
import photo15 from '/images/img (15).jpg';
import photo16 from '/images/img (16).jpg';
import photo17 from '/images/img (17).jpg';
import photo18 from '/images/img (18).jpg';
import photo19 from '/images/img (19).jpg';


// An array to hold all the imported images, making them easy to loop through
const galleryImages = [
  photo1, photo2, photo3, photo4, photo5, photo6,
  photo7, photo8, photo9, photo10, photo11, photo12,
  photo13, photo14, photo15, photo16, photo17, photo18,photo19
];

export default function MemoryGallery() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
        >
          Our Beautiful Memories
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true} // Added loop for a continuous gallery experience
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px]"
        >
          {galleryImages.map((imageSrc, index) => (
            <SwiperSlide key={index} className="!w-[280px] sm:!w-[350px] md:!w-[450px]">
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={imageSrc}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}