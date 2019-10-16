import React, {useContext}  from 'react';
import { NoteContext } from '../contexts/NoteContext';
import NoteDetails from './NoteDetails';
import MyIcon from './MyIcon';


const NoteList = () => {
    const { dispatch, state } = useContext(NoteContext);

    const filteredNotes = state.notes.filter(note => note.title.toLowerCase().includes(state.searchFilter.toLowerCase()));
    const addNote = () => {
        if(state.notes[0].title.length > 1 && state.notes[0].title.length > 1) {
            dispatch({type: 'ADD_NOTE', title: '', text: ''});
        }
    }

    return state.notes.length ? (
        <div className="note-list">
            <div className="note-list-header">
                 <h2>Notes:</h2>
                 <button className="button" onClick={() => addNote()}><MyIcon icon="fa fa-edit"/></button> 
            </div>
            <ul>
              { filteredNotes.map(note => {
                 return <NoteDetails note={note} key={note.id} />
              })}
            </ul>
            <div className="note-list-fade"></div>
        </div>
    ) : (
        <div className="empty">Empty notes</div>
    )
};

export default NoteList;