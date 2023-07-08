import HText from '@/shared/HText'
import { SelectedPage, BenefitType } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/20/solid'

import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import {motion} from "framer-motion"
import Benefit from './benefit'
import ActionsButton from '@/shared/ActionsButton'

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: "State of the art Facilities",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus provident, quo similique eaque nobis eius"
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sequi, vero praesentium id quibusdam illum maiores?"
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste tenetur cum est eveniet minima, sit nostrum!"
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
      id='benefits'
      className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div
        onViewportEnter={() =>setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
          className='md:my-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}  
        >
         <HText>MORE THAN JUST A GYM.</HText>
         <p className='my-5 text-sm text-justify'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
         </p>
        </motion.div>

        <motion.div 
          className='md:flex items-center justify-between gap-8 mt:5'
          initial='hidden'
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          variants={container}  
        >
          {benefits.map((benefit:BenefitType) =>(
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          <img src={BenefitsPageGraphic} alt="Benefits-page-graphic" className='mx-auto' />
          <div>
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </motion.div>
              </div> 
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore quibusdam nulla dolores fuga velit ea, necessitatibus sint distinctio itaque a eveniet suscipit aliquam veniam maiores voluptates tempora perferendis sequi voluptatem odit provident enim optio totam. Quisquam laboriosam vitae odio sed tempora.</p>
              <p className='my-5 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur iste maiores delectus voluptatibus! Voluptatibus, accusamus? In aspernatur impedit harum repudiandae. Alias dolore accusantium iste reprehenderit necessitatibus quasi rem quis?</p>
            </motion.div>

            <div className='relative mt-16'>
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionsButton setSelectedPage={setSelectedPage} >
                  Join Now
                </ActionsButton>
              </div>

            </div>

          </div>
        </div>

      </motion.div>

    </section>
  )
}

export default Benefits