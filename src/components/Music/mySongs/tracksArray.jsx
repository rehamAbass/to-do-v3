import React from 'react'
import alof from './alof.mp3'
import indila from './indila.mp3'
import loai from './משוגעים.mp3'
import mat5afesh from './mat5afesh.mp3'
import nrkis from './nrkis.mp3'
import narkis2 from './blylot.mp3'
import newYork from './newYork.mp3'
import nwantiti from './nwantiti.mp3'
import mama from './mama.mp3'
import yldem from './הילדיםשלי.mp3'
import Wenk from './wenk.mp3'
import z3etr from './z3etr.mp3'

let tracksArray = [
    { audio: new Audio(loai), name: 'משוגעים', id: 1 },
    { audio: new Audio(newYork), name: 'NewYork', id: 7 },
    { audio: new Audio(nwantiti), name: 'Nwantiti', id: 8 },
    { audio: new Audio(indila), name: 'Indela', id: 3 },
    { audio: new Audio(alof), name: 'אלוף העולם💪', id: 2 },
    { audio: new Audio(nrkis), name: 'הולכת איתך', id: 5 },
    { audio: new Audio(narkis2), name: 'בלילות', id: 6 },
    { audio: new Audio(mama), name: 'mama', id: 9 },
    { audio: new Audio(yldem), name: '♥הילדים שלי', id: 10 },
    { audio: new Audio(mat5afesh), name: '🌹متخفيش يما', id: 4 },
    { audio: new Audio(Wenk), name: 'سيلاوي', id: 11 },
    { audio: new Audio(z3etr), name: 'تتصور', id: 12 },
];

export default tracksArray;
