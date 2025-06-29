import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return <div id="contact" className="py-16 pt-12">
    <div className='container'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
        <div className='absolute inset-0 opacity-5 -z-10' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div>
    <h2 className="font-serif text-2xl md:text-3xl">Contact Me</h2>
    <p className='text-sm md:text-base mt-2'>
      Let&apos;s connect!
    </p>
    </div>
    <div>
    <a href="mailto:chaeyp@outlook.com" className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max hover:bg-gray-800 transition-colors'>
      <span className='font-semibold'>chaeyp@outlook.com</span>
      <ArrowUpRightIcon className="size-4"/>
      </a>
      </div>
  </div>
  </div>
  </div>
  </div>
};
