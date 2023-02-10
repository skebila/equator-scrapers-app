import styles from "../style"
import { logo } from '../assets'

const Footer = () => (

  <section className={`${styles.flexCenter} py-[60px] bg-[#0693e3] flex-col`}>
    <div className={`${styles.flexCenter}  flex-col w-full`}>
      <a href='/'>
        <img
          src={logo}
          alt='Steven Kebila'
          className='w-[40px] h-[40px] object-contain'
        />
      </a>

      <div className={`${styles.flexCenter}`}>
          <div className={`${styles.flexCenter} flex-col`}>
            <p className={`${styles.paragraph} text-center mt-4 max-w-[290px]`}>
              Equator Challenge #2
            </p>
            <p className={`${styles.paragraph} text-[1em]`}>Handcrafted by yours truly ©{new Date().getFullYear()}</p>
          </div>
      </div>
      
    </div>
  </section>
  
)

export default Footer