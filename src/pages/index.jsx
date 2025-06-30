import { useIndex } from '../hooks/useIndex';
import TextInput from '../components/TextInput';
import NoteItem from '../components/NoteItem';

import styles from './index.module.css';

const MAXLENGHT = 250;

export default function Home() {
    
  const {
    note,
    noteList,
    handleOnChange,
    handleOnClick,
    handleOnDelete
  } = useIndex(MAXLENGHT);

  return (
    <div>
      <h1>Welcome to my notes app</h1>
      <TextInput 
        note={note} 
        maxLenght={MAXLENGHT} 
        handleOnChange={handleOnChange}
        />
      <button 
        className={styles.button}
        onClick={handleOnClick}
        disabled={note.length === 0}
        >
          Adicionar Nota
      </button>
      <ul className={styles.list}>
        {noteList.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <NoteItem  
              note={item} 
              onDelete={() => handleOnDelete(index)} 
            />  
          </li>
        ))}
      </ul>
    </div>
  )
}