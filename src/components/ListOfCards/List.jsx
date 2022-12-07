import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
  'rgba(0, 190,0, 0.7)',
  'rgba(0,10,100,0.7)',
  'rgba(0,0,0,0.7)',
  'rgba(95, 3, 95, 0.7)',
        'rgba(0,40,125,0.7)',
     'rgba(60,0,140, 0.7)', 
  'rgba(180,180,0,0.7)', 

    'rgba(30,0,60, 0.7)',
  
  'rgba(10,70,210,0.5)', 
     'rgba(80,100,140,0.5)',  
     'rgba(20,40,100,0.5)',
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
