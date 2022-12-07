import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
  //  'rgba(10,138,180,0.4)',
    'rgba(40,120,160,0.5)', 
//     'rgba(0,30,60,0.5)',
    'rgba(220,220,0,0.5)',
        'rgba(0,100,225,0.5)',
    'rgba(200,10,10,0.5)',
     //'rgba(200,200,200,0.6)',
     'rgba(80,100,140,0.5)',
     'rgba(130,140,140,0.5)', 
    'rgba(10,100,230,0.5)', 
     'rgba(20,40,100,0.5)',
     'rgba(10,40,70, 0.5)',
    'rgba(0, 140,0, 0.5)',
     'rgba(60,0,140, 0.5)',
    'rgba(145, 3, 145, 0.5)',
    'rgba(30,0,60, 0.5)',
  
      'rgba(10,10,10,0.5)',
    'rgba(0,10,100,0.5)',

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
