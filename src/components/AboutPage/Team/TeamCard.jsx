import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { AccordionButton } from './AccordionButton';

const TeamCard = ({ name, position, info, image, isOpen, onClick }) => {
  return (
    <div
      style={{
        overflow: 'hidden',
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0% 3vw, 3vw 0%)',
      }}
      className={` w-[49vw] h-full bg-white-3 overflow-hidden p-[1px] rounded-[16px] flex items-center relative justify-center after:absolute after:bg-white-3 after:top-[1.5vw] after:left-[-0.75vw] after:-rotate-45 after:h-[1.5px] after:w-[4.5vw]`}
      onClick={onClick}
    >
      <div className={`bg-white-2 relative p-[1.2vw] rounded-[15px] w-[calc(100%-1px)] h-[calc(100%-1px)] space-y-[3.5vw] flex justify-end text-black-1 transition-all duration-300 ${isOpen ? 'text-white' : 'text-black-1'}`}>
        <div
          className={`bg-[#FE6E00] absolute rounded-[15px]  top-0 left-0 w-full h-full right-0 bottom-0 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0' }`} />
        <div className="absolute z-10 left-[1.2vw] top-0 pt-[3vw] pb-[1.5vw] flex flex-col h-full justify-between items-start w-[40%]">
          <div className="">
            <h4 className="text-content-30 font-display mb-1">{name}</h4>
            <p className="text-content-20 mb-[2vw]">{position}</p>
            <AccordionButton isOpen={isOpen} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-3 text-content-20"
              >
                {info.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? '25vw' : '10vw', width: isOpen ? '25vw' : '10vw' }}
          transition={{ duration: 0.5 }}
          className="size-[10vw] relative z-10 aspect-square overflow-hidden rounded-[4%]">
          <Image
            className="object-cover"
            src={image}
            alt={`${name} image`}
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TeamCard;
