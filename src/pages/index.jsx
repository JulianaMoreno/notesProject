import { useState } from 'react';
import TextInput from '../components/TextInput';
import NoteItem from '../components/NoteItem';

import styles from './index.module.css';

const MAXLENGHT = 250;

export default function Home() {
    const [note, setNote] = useState('');
    const [noteList, setNoteList] = useState([]);

    const noteObject = {
      user: {
          name: 'Juliana',
          username: 'julianamoreno',
          avatar: 'https://github.com/julianamoreno.png'
      },
      date: new Date(),
      note: note,
    };

    const handleOnChange = (event) => {
        const { value } = event.target;
        if (value.length <= MAXLENGHT) {
            setNote(value);
        }
    };

    const handleOnClick = () => {
      console.log('noteObject', noteObject)
        if(note.length > 0) {
            const newList = [...noteList, noteObject];
            setNoteList(newList);
            setNote('');
        }
    }

    const handleOnDelete = (index) => {
        console.log('deleting note at index:', index);
        const newList = noteList.filter((_, i) => i !== index);
        setNoteList(newList);
    }

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