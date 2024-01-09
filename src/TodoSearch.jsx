import './TodoSearch.css'

export const TodoSearch = ({search, setSearch}) => {
    return(
         
            <input className='TodoSearch' onChange={(i) => {
                setSearch(i.target.value)
            }} type="text" placeholder='Buscar Tareas'/> 
        
    )
}