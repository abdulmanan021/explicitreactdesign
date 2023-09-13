import React from 'react'


export default function AudioPlayer() {
    return (
        <>
            <audio autoplay="autoplay" controls="controls" className='audio_player'>
                <source src="http://www.issilissinew.com/zindorg/1/mp3/2014/Mukunda/128/02%20-%20Daredumdadum%20%5bwww.AtoZmp3.in%5d.mp3.ogg" />
                <source src="http://www.issilissinew.com/zindorg/1/mp3/2014/Mukunda/128/02%20-%20Daredumdadum%20%5bwww.AtoZmp3.in%5d.mp3" />
            </audio>
        </>
    )
}
