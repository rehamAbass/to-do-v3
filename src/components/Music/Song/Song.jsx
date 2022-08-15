import './Song.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { MdPlayArrow, MdStop } from 'react-icons/md'
//----------------------------------------------------------------------------------------
const Song = ({ key, flag, song, stopOthers, updateFlag }) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (value) => {
        setIsActive(current => value);
    };
    //----------------------------------------------------------------------------------------
    useEffect(() => {
        handleClick(flag);
    }, [flag]);
    //----------------------------------------------------------------------------------------
    return (
        <div className='oneSong'>
            {(isActive === false) &&
                <MdPlayArrow
                    className='oneSongIcon'
                    style={{
                        color:'rgba(255,255,255,1)',
                        // 'rgba(120,60,0,1)',
                        // 'rgba(0,190,100,1)', 
                        //rgba(, 0.3
                        // 'rgba(52, 255, 247, 1)',
                    }}
                    onClick={() => {
                        song.audio.loop = true;
                        song.audio.play();
                        song.audio.currentTime = 0;
                        updateFlag(song.id, true);
                        stopOthers(song.id);
                    }} >
                </MdPlayArrow>
            }
            {(isActive === true) &&
                <MdStop
                    className='oneSongIcon'
                    style={{
                        color:'rgba(100,50,0,1)', 
                        // 'rgba(180, 0,90 ,1)',
                    }}
                    onClick={() => {
                        updateFlag(song.id, false);
                        song.audio.pause();
                        song.audio.currentTime = 0;
                        song.audio.loop = false;
                    }}>
                </MdStop>
            }
            {song.name}
        </div>
    );
}


export default Song;