import React, {useContext, useState, useEffect} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import MyIcon from './MyIcon';

const ExpandedNote = ({note}) => {
    const { dispatch } = useContext(NoteContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [saved, setSaved] = useState(false);

    const save = () => {
        setSaved(true);
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
                    <input maxlength="50" autoComplete="off" className="input title" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> 
                </div>
                <textarea autoComplete="off" className="input textarea" name="text" rows="15" type="text" value={text} onChange={(e) => setText(e.target.value)}/> 
                <button className="save" onClick={() => save()}><MyIcon icon="fa fa-save"/></button>
            </div>
        </div>
    );
};

export default ExpandedNote;