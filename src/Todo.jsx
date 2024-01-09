import './Todo.css'
import borrar from '../public/borrar.png'


export const Todo = ({todos, completeTodo, spliceTodo}) => {
    return(
        todos.map((element, index) => (
            <div key={index} className='Todo'>
                <div onClick={() => {
                    completeTodo(index)
                }} id={element.completed ? "checked" : ""} className='TodoCheck'>✓</div>
                <div id={element.completed ? "textChecked" : ""} className='TodoText'>{element.text}</div>
                <div onClick={() => {
                    spliceTodo(index)
                }} className='TodoDelete'>
                    <img src={borrar} alt="" />
                </div>
            </div>
        ))
    )
}