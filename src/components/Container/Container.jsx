import React, { useContext, useEffect } from 'react';
import QuestionsContext from '../../context/QuestionsContext';
import Modal from '../Modal/Modal';
import Questions from '../Questions/Questions';
import VideoResult from '../VideoResult/VideoResult';

import styles from './Container.module.css';

import * as LottiePlayer from '@lottiefiles/lottie-player';

import happy from '../../assets/happy.png';
import thinking from '../../assets/thinking.png';

import Introduction from '../Introduction/Introduction';
import FinishMessage from '../FinishMessage/FinishMessage';

const Container = () => {
  const {
    resultQuestions,
    questionsState,
    show,
    repliedLastQuestion,
    finishIntroduction,
    finishMessage
  } = useContext(QuestionsContext);

  useEffect(() => {
    if (questionsState.length === 0) {
      if (repliedLastQuestion) {
        console.log('terminaste');
        console.log(resultQuestions);
        return;
      } else {
        console.log('entreee');
      }
    } else {
      console.log('paso a false');
    }
  }, [questionsState, show]);

  return (
    <div className={styles.container}>
      {finishIntroduction && <Introduction />}
      <Modal />
      <div className={styles.your_questions}>
        <div className={styles.question_svg}>
          {repliedLastQuestion ? (
            <img src={happy} alt="" height={250} />
          ) : (
            <img src={thinking} height={250} />
          )}
        </div>
        {repliedLastQuestion ? (
          <h3>Gracias por responder todas las preguntas</h3>
        ) : (
          <Questions />
        )}
      </div>

      <div className={styles.response}>
        <div className={styles.response_title}>
          <h3>Tus respuestas</h3>
        </div>
        <div className={styles.video_response}>
          {resultQuestions?.map((video, index) => (
            <VideoResult videoQuestion={video} key={index} />
          ))}
        </div>
      </div>
      {finishMessage && <FinishMessage />}
    </div>
  );
};

export default Container;
