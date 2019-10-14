import React, {useContext}  from 'react';
import { NoteContext } from '../contexts/NoteContext';
import ExpandedNote from './ExpandedNote';
import NoteList from './NoteList';


const Workspace = () => {

    const { state } = useContext(NoteContext);
    
    return (
        <div className="work-space">
            <NoteList/>
            {state.activeNote ?  <ExpandedNote note={state.activeNote}/> : null}
           
        </div>
    )

};

export default Workspace;