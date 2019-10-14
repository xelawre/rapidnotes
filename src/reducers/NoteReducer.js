import uuid from 'uuid/v1';

export const NoteReducer = (state, action) => {
    switch(action.type) {
        
        case 'ADD_NOTE':
            return {
            ...state,
            notes: [{
                title: action.title,
                text: action.text,
                id: uuid()
            }, ...state.notes]
        }

        case 'REMOVE_NOTE': 
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.id)
            }
        
        case 'UPDATE_NOTE':
                return {
                    ...state,
                    notes: state.notes.map(note => note.id === action.id ? {title: action.title, text: action.text, id: action.id} : note)
                }

        case 'ACTIVE_NOTE': 
                return {
                    ...state,
                    activeNote: state.notes.filter(note => note.id === action.id)[0]
                }
                
        case 'FILTER_NOTES':
            return {
                ...state,
                searchFilter: action.search,
            }
        default:
            return state
    }
}