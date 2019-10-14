import React, {useContext} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import MyIcon from './MyIcon';

const NoteDetails = ({note}) => {
    const { dispatch } = useContext(NoteContext);

    const trimTitle = (str) => {
        let newTitle = str.slice(0 , 25);
        return newTitle.trimRight().concat("...");
    }

    return (
        <li>
            <div onClick={() => dispatch({type: 'ACTIVE_NOTE', id: note.id})} className="note-title">           
                <p className="input title">{note.title.length > 25 ? trimTitle(note.title) : note.title }</p>
                <button className="button" onClick={() => dispatch({type: 'REMOVE_NOTE', id: note.id})}><MyIcon icon="fa fa-times"/></button>
            </div>
        </li>
    );
};

export default NoteDetails;