import { useState } from 'react';

export function useIndex(MAXLENGHT) {
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

    return {
        note,
        noteList,
        handleOnChange,
        handleOnClick,
        handleOnDelete,
    }
}