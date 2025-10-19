import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const placeholderImages = [
  'https://placehold.co/400x600/E194B5/FFFFFF/?text=Image+1',
  'https://placehold.co/400x600/95A8D3/FFFFFF/?text=Image+2',
  'https://placehold.co/400x600/B6A4D0/FFFFFF/?text=Image+3',
  'https://placehold.co/400x600/F1B3B3/FFFFFF/?text=Image+4',
  'https://placehold.co/400x600/D0E1F0/FFFFFF/?text=Image+5',
];

export default function MemoryGallery({ 
  images = placeholderImages, 
  title = "Memory Gallery" 
}) {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
        >
          {title}
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
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
          {images.map((imageSrc, index) => (
            <SwiperSlide key={index} className="!w-[280px] sm:!w-[350px] md:!w-[450px]">
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={imageSrc}
                  alt={`Gallery image ${index + 1}`}
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