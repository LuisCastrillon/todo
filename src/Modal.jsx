import React from 'react'
import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import './Modal.css'

export const Modal = ({onChange, addTodo, cancelAddTodo, modal}) => {
    return createPortal(
        <div className='modalCnt' id={modal? 'overFlow_hidden' : ''}>
            <form 
            onSubmit={() => {
                addTodo()
            }} 
            className='form' action="">
                <label className='label' >Añadir nueva tarea</label>
                <textarea 
                onChange={(element) => {
                    onChange(element)
                }} 
                className='input' placeholder='Nueva tarea' name="" id=""  rows="3"></textarea>
                <div className='buttons'>
                    <button onClick={() => {
                        cancelAddTodo()
                    }}>Cancelar</button>
                    <button type='submit'>Añadir</button>
                </div>
            </form>
        </div>,
        document.getElementById('modal')
    )
}