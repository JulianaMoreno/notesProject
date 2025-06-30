import styles from './TextInput.module.css';

export default function TextInput({note, maxLenght, handleOnChange}) {
    
    return (
        <div>
            <textarea 
                className={styles.input}
                onChange={handleOnChange}
                placeholder='Type your note here...'
                value={note}
                maxLength={maxLenght}
                />
            <div className={styles.counter}>{note.length} / {maxLenght}</div>
        </div>
    )
}