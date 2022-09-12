import React, { useRef } from 'react'

import styles from './VideoResult.module.css'


const VideoResult = (videoQuestion) => {

    const videoR = useRef()

    const {question,video} = videoQuestion.videoQuestion

    const play = () =>{
      videoR.current.play();
    }

  return (
    <div className={styles.VideoResult} data-id={question?.id}>
        <button className={styles.button_play} onClick={play}>
          <ion-icon name="play"></ion-icon>
        </button>
        <video src={video} playsInline ref={videoR}></video>
        <div className={styles.Question}>
          <p>{question?.value}</p>
        </div>
    </div>
  )
}

export default VideoResult