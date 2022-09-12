import React, { useContext } from 'react';
import AuthenticationContext from '../../context/AuthenticationContext';
import QuestionsContext from '../../context/QuestionsContext';
import Modal from '../Modal/Modal';
import Questions from '../Questions/Questions';
import VideoResult from '../VideoResult/VideoResult';

import Confetti from 'react-confetti';

import { FaAlignRight } from 'react-icons/fa';

import * as LottiePlayer from '@lottiefiles/lottie-player';

import happy from '../../assets/happy.png';
import thinking from '../../assets/thinking.png';

import styles from './Container.module.css';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Container = () => {

  let navigate = useNavigate()

  const {
    resultQuestions,
    questionsState,
    show,
    toggle_navbar,
    pauseConfetti,
    secondLottie,
    repliedLastQuestion,
    setQuestionsState
  } = useContext(QuestionsContext);

  const {
    username, 
    getResponses, 
    doneStatus, 
    setDoneStatus } = useContext(AuthenticationContext);

  const [pushToFirebase, setPushToFirebase] = useState(true);

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const pushDataFirebase = async () => {
    try {
      let user = JSON.parse(localStorage.getItem('user'))
      const res = await fetch(
        `https://video-record-19df8-default-rtdb.firebaseio.com/users/${user.localId}.json?auth=${user.idToken}`,
        {
          method: 'POST',
          body: JSON.stringify({
            username,
            resultQuestions,
            done: true
          })
        }
      );
      const data = await res.json();

      console.log('PUSHHIING');
    } catch (error) {
      console.log(error);
    }
  }; //!Pusheo todas las respuestas a firebase

  useEffect(() => {

    // if(JSON.parse(localStorage.getItem('user'))){
      console.log('recargando');

      if(questionsState?.length >0){
        console.log('hay preguntas')
        setDoneStatus(false)
      }
  
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
  
      pauseConfetti();
  
      getResponses();
  
      if (questionsState.length === 0) {
        if (repliedLastQuestion) {
          console.log('terminaste');
          console.log(resultQuestions);
          if (pushToFirebase) {
            pushDataFirebase();
            setPushToFirebase(false);
            setDoneStatus(true)
          }
          return;
        } else {
          console.log('entreee');
        }
      }else{
        console.log('paso a false');
      }
      
    // }else{
    //   navigate('/')
    // }

  }, [questionsState, show]);

  return (
    <div className={styles.container}>
      <Confetti
        recycle={show}
        numberOfPieces={90}
        width={width}
        height={height}
      />
      <Modal />
      <div className={styles.your_questions}>
        <div className={styles.question_svg}>
          {doneStatus ? (
            <img src={happy} alt="" height={250}/>
          ) : (
            <img src={thinking} height={250}/>
          )}
        </div>
        {doneStatus ? <h2>Hola no hay preguntas</h2> : <Questions />}
      </div>

      <div className={styles.response}>
        <div className={styles.toggle_navbar} onClick={toggle_navbar}>
          <FaAlignRight size={25} />
        </div>
        <Navbar />
        <div className={styles.response_title}>
          <h3>Tus respuestas</h3>
        </div>
        <div className={styles.video_response}>
          {resultQuestions?.map((video, index) => (
            <VideoResult videoQuestion={video} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
