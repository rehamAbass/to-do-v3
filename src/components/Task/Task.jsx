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
                {index}. {task.text}
                </button>
                <FaTimes
                    style={{
                        color: 'rgba(0,40,90,0.25)', cursor: 'pointer', marginLeft: "5px",
                        marginInlineEnd: "0%", paddingRight: "0px", float: 'right',fontSize:"x-small",
                    }}
                    onClick={() => { deleteTask(task.id) }}
                />
            </p>
        </div>
    )

}



export default Task;

