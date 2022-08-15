import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
     'rgba(180,180,180,0.5)',
    //  '#757FA3',
     'rgba(170,160,175, 0.5)',
    //  'rgba(170,120,100,0.6)',
     'rgba(170,130, 135, 0.5)',
    'rgba(156, 119,150, 0.5)',
     'rgba(155, 180,150, 0.5)',
    'rgba(145, 135, 145, 0.5)',
    'rgba(102, 90, 110, 0.5)',
    'rgba(140,110,145,0.5)',
    // '#927FAD',
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