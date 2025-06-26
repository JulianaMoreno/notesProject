import TextInput from "./components/TextInput";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Welcome to my notes app</h1>
      <TextInput />
    </div>
  )
}

export default App
