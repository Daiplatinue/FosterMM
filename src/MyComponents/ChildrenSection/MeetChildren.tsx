import React from 'react';
import { motion } from 'framer-motion';

const MeetChildren: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden mb-[-5rem] mt-[5rem]" id="features">
      <div className="absolute inset-0 opacity-5 "></div>
      <div className="absolute inset-0 bg-zinc-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-neutral-200 mb-6"
          >
            Meet Our Lovely Childrens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Discover what makes our center unique in providing the best care and support for children
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MeetChildren;