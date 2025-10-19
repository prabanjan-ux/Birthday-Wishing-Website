import { motion } from 'framer-motion';
import { Heart, MapPin, Camera, Star, Cake, Sparkles } from 'lucide-react';

// A placeholder array to serve as a default for the template
const placeholderEvents = [
  {
    icon: Sparkles,
    title: 'Event Title 1',
    date: 'Date of Event',
    description: 'A short description of the memory or event goes here. Keep it brief and meaningful.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Camera,
    title: 'Event Title 2',
    date: 'Date of Event',
    description: 'Describe another key moment. The timeline will automatically alternate sides.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Star,
    title: 'Event Title 3',
    date: 'Date of Event',
    description: 'You can add as many events as you like by expanding this array.',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Timeline({ 
  events = placeholderEvents, 
  title = "Our Journey" 
}) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
        >
          {title}
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300" />
          <div className="md:hidden absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-rose-300" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 sm:mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="flex md:block items-start gap-6 md:gap-0">
                <div className="flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:max-w-md">
                  <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-pink-500 font-semibold mb-3">
                      {event.date}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}