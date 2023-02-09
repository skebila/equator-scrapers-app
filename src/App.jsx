import { Header, ScraperList, Footer } from './components'
import styles from './style'


const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ScraperList />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`w-full`}>
        <Footer />
      </div>
    </div>
    
  </div>
)

export default App