import React, { useContext } from 'react'
import QuestionsContext from '../../context/QuestionsContext'
import Question from './Question/Question'

import styles from './Questions.module.css'

const Questions = () => {

  const {questionsState,setQuestionsState} = useContext(QuestionsContext)

  return (
    <div className={styles.questions_container}>
        {
        questionsState ? 
        questionsState.map((question)=> <Question question={question} key={question.id}/>) 
        : <p>Loading</p>
        }
    </div>
  )
}

export default Questions