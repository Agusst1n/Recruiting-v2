import React, { useRef } from 'react'

import styles from './VideoResult.module.css'

// import { FaTrash } from "react-icons/fa";
// import { useContext } from 'react';
// import QuestionsContext from '../../context/QuestionsContext';

const VideoResult = (videoQuestion) => {

    // const {resultQuestions,setResultQuestions,questionsState,setQuestionsState} = useContext(QuestionsContext)
    // console.log(videoQuestion, 'le video')
    const videoR = useRef()

    const {question,video} = videoQuestion.videoQuestion

    const play = () =>{
      // console.log(videoR.current, 'R');
      videoR.current.play();
    }

    // const removeVideo = () =>{
    //   console.log(question.id);
    //   let id = question.id
    //   console.log(id,'idee');
    //   // let videoRemove = resultQuestions.filter((video) => video.question.id !== id)
    //   let videoRemoveObject = resultQuestions.filter((video) => video.question.id == id)
    //   // setResultQuestions(videoRemove)
    //   let videoRemove = videoRemoveObject[0].question
    //   let videoRemoveResults = resultQuestions.filter((video) => video.question.id !== videoRemove.id)
    //   // setQuestionsState([...questionsState, videoRemove])
    //   setQuestionsState([...questionsState,videoRemove])
    //   setResultQuestions(videoRemoveResults)
    //   console.log(questionsState, 'statee');
    //   console.log(videoRemove, 'remove video')
    // }

  return (
    <div className={styles.VideoResult} data-id={question?.id}>
      {/* <div className={styles.remove_video} onClick={removeVideo}>
        <FaTrash/>
      </div> */}
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