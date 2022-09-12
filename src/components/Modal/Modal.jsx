import React, { useContext, useEffect, useState } from 'react'
import QuestionsContext from '../../context/QuestionsContext'
import VideoContext from '../../context/VideoContext'
import Video from '../VIdeo/Video'

import styles from './Modal.module.css'

const Modal = () => {


  const {
    downloadLink,
    setDownloadLink,
    setStop, 
    getUserMedia,
    newQuestion,
    setNewQuestion,
    recordVideo,
    setRecordVideo} = useContext(VideoContext)
    
  const {
    modalStatus,
    setModalStatus,
    questionsState,
    setQuestionsState,
    resultQuestions,
    setResultQuestions,
    setShow,
    setRepliedLastQuestion
  } = useContext(QuestionsContext)

  const closeModal = () =>{
    setModalStatus(false)
  }

  const [questionStateLength, setQuestionStateLength] = useState(false)
  const [initialQuestionLength, setInitialQuestionLength] = useState(true)

  useEffect(()=>{

    getNewQuestion() //*Se va a ejecutar cuando cargue la app
    // checkLength()


  },[questionsState,recordVideo]) //!Cuando se actualiza

  const getNewQuestion = () =>{

    let newQuestion = questionsState[0]

    setNewQuestion(newQuestion)
  }

  //!Cuando de al boton siguiente tengo que hacer que se filtren nuevamente 
  //!Las questions y que se quede con una para que aparezca en el video


  //*Si grabo video poner un true y que ahi se active el boton de siguiente y si borra el video 
  //*poner ese estado de nuevo en false

  
  let modalQuestion = questionsState.filter((question,index) => index == 0)
  
  let Question = modalQuestion[0]

  const return_button = () =>{
    setModalStatus(false)
  }

  
  const pushQuestion = () => {
    console.log(newQuestion, 'newQuestion??????????????')
    console.log(resultQuestions, '8888888')

    console.log(Question, 'question', newQuestion, 'newQuestion', downloadLink, 'video')

    setResultQuestions([...resultQuestions,{
      question: Question? Question : newQuestion,
      video:downloadLink
    }])

    let questionsStateActualizado = questionsState.filter((question, index) => index !== 0)
    setQuestionsState(questionsStateActualizado)

    if(questionsStateActualizado.length === 1){
      setQuestionStateLength(true)
    }

    setDownloadLink("") //vacio el video
    setStop(false)
    getUserMedia()

    setRecordVideo(false)

    checkLength()

    if(questionStateLength){
      setShow(true)
      setModalStatus(false)

      console.log('Aca hay que pushear la data')

      setRepliedLastQuestion(true)
    }

  }
  
  const recoverQuestion = () =>{

    let anterior = resultQuestions.slice(-1)
    let resultQuestionsFilter = resultQuestions.pop()

    let info = anterior[0].question

    setQuestionsState([info,...questionsState])
  }


  const checkLength = () =>{
    console.log('chekeeandooo');
    if(resultQuestions.length === 0){
      setInitialQuestionLength(true)
    }else{
      setInitialQuestionLength(false)
    }
  }

  return (
    <>
        <div className={modalStatus? styles.modal_containerON : styles.modal_containerOFF} onClick={closeModal}></div>
        <div className={modalStatus? styles.modalON : styles.modalOFF}>
          <div className={styles.button_volver}>
            <button onClick={return_button}>
              <ion-icon name="arrow-back-outline"></ion-icon> Volver
            </button>
          </div>

          <div className={styles.question_value}>
            <p>{Question?.value}</p>
          </div>

            <Video/>
            <div className={initialQuestionLength ? styles.button_atrasOFF : styles.button_atrasON}>
              <button onClick={recoverQuestion}>Atras</button>
            </div>
            <div className={recordVideo ? styles.button_siguienteON : styles.button_siguienteOFF}>
              <button onClick={pushQuestion} >{questionStateLength? 'Enviar' : 'Siguiente'}</button>
            </div>
        </div>
    </>
  )
}

export default Modal