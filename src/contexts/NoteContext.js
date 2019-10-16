import React, {createContext, useReducer, useEffect} from 'react';
import { NoteReducer } from '../reducers/NoteReducer';

export const NoteContext = createContext();

    const initialState = {
        notes: [],
        searchFilter: '',
        activeNote: null,
        checkNote: false,
        darkMode: true
    }
    
    const NoteContextProvider = (props) => {

    const [state, dispatch] = useReducer( NoteReducer, initialState, () => {

        const localNotes = localStorage.getItem('notes');

        if(localNotes) {
            initialState.notes = JSON.parse(localNotes)
            return initialState
        } else {
            return initialState
        } 
    });
    
    useEffect (() => {
        localStorage.setItem('notes', JSON.stringify(state.notes));
    },[state.notes]);

    return (
        <NoteContext.Provider value={{state, dispatch}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteContextProvider;