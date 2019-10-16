import React, {useContext, useState, useEffect} from 'react';
import { NoteContext } from '../contexts/NoteContext';

const ExpandedNote = ({note}) => {
    const { dispatch } = useContext(NoteContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const save = () => {
        dispatch({type: 'UPDATE_NOTE',title: title, text: text, id: note.id});
    }

    useEffect (() => {
        setText(note.text);
        setTitle(note.title);
    },[note]);


    return (
        <div className="expanded-note">
            <div className="note-wrapper">
                <div className="note-title">
                    <input onKeyUp={save} maxLength="50" autoComplete="off" className="input title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> 
                </div>

                <textarea onKeyUp={save} autoComplete="off" className="input textarea" name="text" rows="15" type="text" value={text} onChange={(e) => setText(e.target.value)}/> 
            </div>
        </div>
    );
};

export default ExpandedNote;