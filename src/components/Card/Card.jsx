import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { useState } from 'react'
import './Card.css'

import Tasks from '../Tasks/Tasks.jsx'
const Card = ({ key, card, deleteCard, deleteTaskServer,
    addTaskServer, background, toggleTaskServer }) => {

    const [text, setText] = useState('');
    //-------------------------------------------------
    const deleteTask = (id) => {
        deleteTaskServer(card.id, id);
    }
    //-------------------------------------------------
    const completedTask = (id) => {
        // toggleTaskServer(card.id, id);
    }
    //---------------------------------------------------
    const saveTask = (text) => {
        addTaskServer(card.id, text)
    }
    //---------------------------------------------
    async function onSubmit(e) {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        let sendText = text;
        saveTask(sendText);
        setText('');
    }
    //----------------------------------------------
    return (
        <div className='list'
            style={{
                backgroundColor:background,
                // backgroundColor: 'rgba(240,250,250,0.65)',
                 //backgroundColor: 'rgba(240,240,255,0.9)',
            }}
        >
        <div>
            <p className='title'>{card.title}
            <FaTimes
                style={{
                    color:'rgba(250,250,250,0.6)'
                    // 'rgba(130,140,130,0.87)' 
                    // 'rgba(10,20,80, 0.6)'
                    , cursor: 'pointer', marginLeft: "2px",
                    // fontWeight:'50',
                    marginInlineEnd: "0%", paddingRight: "1px", float: 'right'
                }}
                onClick={() => { deleteCard(card.id) }}
            /></p>
            
            </div>
            <form onSubmit={onSubmit}>
                            <input

                        type='text'
                        placeholder='..'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type='submit' className='addbtnnote' style={{ fontSize: 'larger', position:'inline' }}> + </button>
                          
            </form>
            <Tasks tasks={card.tasks} deleteTask={deleteTask} toggleTask={completedTask} />
        </div>
    )
}


export default Card;