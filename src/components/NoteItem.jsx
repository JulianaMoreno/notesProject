import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './NoteItem.module.css';


export default function NoteItem({ note, onDelete }) {
    const publishedDate = formatDistanceToNow(
        new Date(note.date), 
        { locale: ptBR, addSuffix: true });

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={note.user.avatar}/>
            <div className={styles.userInfo}>
                <span className={styles.name}>{note.user.name}</span>
                <span className={styles.username}>{note.user.username}</span>
                <span className={styles.date}>- {publishedDate}</span>
                <button className={styles.actions} onClick={onDelete} aria-label="delete note">🗑️</button>
            </div>
            <div className={styles.note}>
                {note.note}
            </div>
        </div>
    )
}