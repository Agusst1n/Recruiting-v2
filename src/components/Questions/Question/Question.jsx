import React, { useContext } from 'react'
import QuestionsContext from '../../../context/QuestionsContext'

import styles from './Question.module.css'


const Question = (question) => {

  const {setModalStatus,setActualQuestion} = useContext(QuestionsContext)

  const {name,id,value} = question.question

  const modal = () =>{
    console.log('click', id)
    setModalStatus(true)
    setActualQuestion(id)
  }

  return (
    <div className={styles.question} onClick={modal} id={id}> 
        <label htmlFor={name}>{value}</label>
        <input type="checkbox" name={name} disabled />
    </div>
  )
}

export default Question