import React, {useContext, useState, useEffect} from 'react';
import { NoteContext } from '../contexts/NoteContext';
import MyIcon from './MyIcon';

const Navbar = () => {
 
    const [search, setSearch] = useState('');
    const [darkMode, setDarkMode] = useState(true);

    const { dispatch, state } = useContext(NoteContext);

     useEffect(() => {
        dispatch({type: 'ACTIVE_NOTE', id: state.notes[0].id});
     }, [state.notes])

     useEffect(() => {
        dispatch({type:'FILTER_NOTES', search: search});
     }, [search]);

     useEffect(() => {
        dispatch({type:'SET_MODE', darkMode: darkMode});
     }, [darkMode]);

    return (
        
        <div className={state.darkMode ? "navbar dark-nav" : "navbar light-nav"}>
            <div className="logo-wrapper">
            {state.darkMode ? <img src={require("../assets/brandark2.png")} alt="brand-logo"/> : <img src={require("../assets/brand.png")} alt="brand-logo"/>}
            </div>
            <div className="search-wrapper">
                <MyIcon icon="fa fa-search"/>
                <input className="input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."></input>
                <div className="switch-container">
                <p className={state.darkMode ? "title dark-p" : "title light-p"}>{state.darkMode ? 'Dark' : 'Light'}</p>
                <label class="switch">
                    <input onClick={() => setDarkMode(!state.darkMode)} type="checkbox"/>
                    <span class="slider round"></span>
                </label>
             </div>
            </div>
        </div>
    );
};

export default Navbar;