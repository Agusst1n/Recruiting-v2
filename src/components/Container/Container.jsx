import React, { useContext } from 'react'
import QuestionsContext from '../../context/QuestionsContext'
import Modal from '../Modal/Modal'
import Questions from '../Questions/Questions'
import VideoResult from '../VideoResult/VideoResult'

import styles from './Container.module.css'

const Container = () => {

  const {resultQuestions} = useContext(QuestionsContext)

  return (
    <div className={styles.container}>
        <Modal/>
        <Questions/>

        {
          resultQuestions.map((video,index)=> <VideoResult videoQuestion={video} key={index}/>)
        }

    </div>
  )
}

export default Container