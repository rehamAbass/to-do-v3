import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
  //'#7EC8E3',
  //'#0000FF','#000C66','#050A30',
  'rgba(0,0,200,0.6)','rgba(0,0,50,0.6)','rgba(0,0,255,0.6)','rgba(0,0,120,0.6)',
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
