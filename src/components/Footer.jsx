import styles from "../style"
import { logo } from '../assets'

const Footer = () => (

  <section className={`${styles.flexCenter} py-[60px] bg-[#0693e3] flex-col`}>
    <div className={`${styles.flexCenter}  flex-col w-full`}>
      <a href='/#'>
        <img
          src={logo}
          alt='Steven Kebila'
          className='w-[60px] h-[60px] mb-5 object-contain'
        />
      </a>

      <div className={`${styles.flexCenter}`}>
          <div className={`${styles.flexCenter} flex-col`}>
            <p className={`${styles.paragraph} text-center mt-4 max-w-[290px]`}>
              Equator Challenge #2
            </p>
            <p className={`${styles.paragraph} text-[1em]`}>Handcrafted by yours truly ©{new Date().getFullYear()}</p>
            <p className={`${styles.paragraph} text-[0.75em]`}>Developed with <a href='https://reactjs.org/' target='_blank' className='text-[1.1em] hover:text-white font-bold'>React JS</a> & <a href='https://tailwindcss.com' target='_blank' className='hover:text-white text-[1.1em] font-bold'>TailwindCSS</a></p>
          </div>
      </div>
      
    </div>
  </section>
  
)

export default Footer