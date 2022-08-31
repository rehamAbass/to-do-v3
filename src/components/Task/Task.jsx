import './Task.css'
import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Task = ({ key, index, task, deleteTask, toggleTask }) => {

    return (
        <div className={task.completed ? 'task strike' : 'task'}>
            <p key={key}>
                <button
                    style={{
                        fontFamily: 'Milonga',
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(0,0,0,0)"
                    }}
                    onDoubleClick={toggleTask(task.id)}>
                {index}.{' '} 
                {(task.text).startsWith('http') &&
                        <a href={task.text} target='_blank'>🔗 <br/>{task.text}</a>}

                {!((task.text).startsWith('http')) &&
                task.text
                }
              
                </button>
                <FaTimes
                    style={{
                        color: 'rgba(0,0,0,1)', cursor: 'pointer', marginLeft: "5px",
                        marginInlineEnd: "0%", paddingRight: "0px", float: 'right',fontSize:"x-small",
                    }}
                    onClick={() => { deleteTask(task.id) }}
                />
            </p>
        </div>
    )

}



export default Task;

