import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
  '#C5DAE8','#A3D5FF', '#8D96C0', '#3A4044',
  
  //'#7EC8E3',
 // '#0000FF','#000C66',
//  'rgba(0,100,60,0.7)','rgba(0,70,155,0.7)','#050A30',
  //'#3dc7ff', // light blue
 // '#ffc759', //yellow
 // '#5265ff',  // blue 
 //  '#8dd36f', // green
]

let colors = GreenColors;
// colors = ['rgba(0,0,0,0.57)'];
const Lists = ({ cards, deleteCard, deleteTaskServer, addTaskServer, toggleTaskServer }) => {
    let rand = Math.floor(Math.random(100));
    // rand = 0;
    return (
        <div className='lists'>
            {cards &&
                cards.map((card, i) => {
                return (
                    <Card
                        key={i}
                        card={card}
                        deleteCard={deleteCard}
                        deleteTaskServer={deleteTaskServer}
                        toggleTaskServer={toggleTaskServer}
                        addTaskServer={addTaskServer}
                        background={colors[(rand + i) % colors.length]}
                    />
                )
            })
            }
        </div >
    )
}

export default Lists;
