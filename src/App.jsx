import { useState } from 'react'
import './App.css'
import { TodoCounter } from './todoCounter'
import { TodoSearch } from './todoSearch'
import { Todo } from './todo'
import { Modal } from './modal'


function App() {
  const getTodos = () => {
    const parsed = JSON.parse(localStorage.getItem('TODOS_V1'))
    return parsed;
  }
  const sendTodos = (element) => {
    const parsed = JSON.stringify(element)
    localStorage.setItem('TODOS_V1', parsed)
  }

  const saveTodos = (newTodos) => {
    sendTodos(newTodos);
    setTodos(newTodos);
  }

  const onChange = (event) => {
    setNewTodo(event.target.value)
  }

  const addTodo = () => {
    event.preventDefault();
    if(newTodo.length >= 1){
      const newTodoObject = {text:newTodo, completed:false};
      const newTodos = [...todos, newTodoObject]
      saveTodos(newTodos) 
      setModal(false)
      setNewTodo('')
    }

  }
  const cancelAddTodo = () => {
    setModal(false)
  }


  let parsedTodos;

  const localStorageTodos = localStorage.getItem('TODOS_V1')

  if(!localStorageTodos){
    // sendTodos([]);
    localStorage.setItem('TODOS_V1', JSON.stringify([{text: "Tarea 1", completed: false}]))
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [newTodo, setNewTodo] = useState('');
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState(parsedTodos)
  const completedTodos = todos.filter(todo => todo.completed).length;
  const allTodos = todos.length;
  const [search, setSearch] = useState("")
  let searchedTodos = [];

  if(!search.length >= 1)  {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase(); //convirtiendo el texto del todo en minuscula
      const searchText = search.toLowerCase(); //convirtiendo texto de buscador en minuscula
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]; 
    newTodos[index].completed = !newTodos[index].completed; //crear nuevo array
    saveTodos(newTodos) //enviar el nuevo array por el estado
  }
  const spliceTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos) 
  }

  return (
    <div className='cnt' id={modal? 'overFlow_hidden' : ''}>
      <div className='todoCnt'>
        <TodoCounter
          total={allTodos}
          completed={completedTodos}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
        <Todo
          todos={searchedTodos}
          completeTodo={completeTodo}
          spliceTodo={spliceTodo}
        />
        <button onClick={() => {
          setModal(!modal)
        }} className='AddTodo'>+</button>
      </div>
      {modal ? <Modal
      // newTodo={newTodo}
      // setNewTodo={setNewTodo()}
      onChange={onChange}
      addTodo={addTodo}
      cancelAddTodo={cancelAddTodo}
      modal={modal}
      >
      </Modal>: false}
    </div>
  )
}

export default App
