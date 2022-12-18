import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
  
  '#3dc7ff', // light blue
  '#ffc759', //yellow
     '#5265ff',  // blue 
  '#222428', // black
     '#8dd36f', // green
 
  '#eb445f', // red
  
  ' #92949c', // afor
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
