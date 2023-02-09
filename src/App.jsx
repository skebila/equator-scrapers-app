import DisplayList from "./components/DisplayList"
import styles from './style'


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <DisplayList />
      </div>
    </div>  </div>
)

export default App