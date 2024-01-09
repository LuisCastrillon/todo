import './TodoCounter.css'

export const TodoCounter = ({total, completed}) => {
    return(
        <div className='TodoCounter'>
            <h2>Has completado {completed} de {total} Tareas</h2>
        </div>
    )
}