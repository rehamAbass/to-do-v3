import './List.css'
import React from 'react'
import Card from '../Card/Card'
import '../../App.css'
const GreenColors = [ 
    // 'rgba(10,138,180,0.4)',
    // 'rgba(40,120,160,0.8)',
    //  'rgba(130,140,140,0.8)',
    //  'rgba(100,100,140,0.9)',
 'black',
    // 'rgba(0,10,100,0.7)',
    // 'blue',
    // 'rgba(10,100,230,0.6)', 
    
    //  '#85C51',
    //  'rgba(0,10,105, 0.7)',
    //  'rgba(20,40,100,0.7)',
    //  'rgba(10,40,70, 0.7)',
    // 'rgba(0, 140,0, 0.9)',
    //  'rgba(60,0,140, 0.9)',
    // 'rgba(145, 3, 145, 0.9)',
    // 'rgba(30,0,60, 0.9)',
    // 'rgba(0,30,60,0.9)',
    '#0022BC',
     'yellow',
        // 'rgba(255,255,0,0.6)',
     'blue',
        // 'rgba(0,100,255,0.6)',
    //  'purple',
     'pink',
    // 'rgba(255,50,50,0.6)',
     'red',
    //  'rgba(250,250,250,0.7)',
    // 'gray',
   
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