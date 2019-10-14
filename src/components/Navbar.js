import React, {useContext, useState, useEffect} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import MyIcon from './MyIcon';

const Navbar = () => {
 
    const [search, setSearch] = useState('');
    const { dispatch, state } = useContext(NoteContext);

     useEffect(() => {
        dispatch({type: 'ACTIVE_NOTE', id: state.notes[0].id});
     }, [state.notes])

     useEffect(() => {
        dispatch({type:'FILTER_NOTES', search: search});
     }, [search]);


    return (
        <div className="navbar">
            <div className="logo-wrapper">
                <img src={require("../assets/brandark2.png")} alt="brand-logo"/>
            </div>
            <div className="search-wrapper">
                <MyIcon icon="fa fa-search"/>
                <input className="input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search notes"></input>
            </div>
        </div>
    );
};

export default Navbar;