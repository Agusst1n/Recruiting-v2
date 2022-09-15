import React, { useState, useContext, useEffect } from 'react';
import QuestionsContext from '../../context/QuestionsContext';

import styles from './FinishMessage.module.css';

import Confetti from 'react-confetti';

const FinishMessage = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const [message, setMessage] = useState();

  const [buttonStatus, setButtonStatus] = useState(true);

  const {
    finishMessageState,
    setFinishMessageState,
    setFinishMessage,
    show,
    pauseConfetti
  } = useContext(QuestionsContext);

  const getNeWIntroduction = () => {
    let firstMessage = finishMessageState[0];

    setMessage(firstMessage);

    filterIntroduction();

    if (finishMessageState.length == 1) {
      setButtonStatus(false);
    }
  };

  const filterIntroduction = () => {
    let newMessage = finishMessageState.filter((item, index) => index !== 0);

    setFinishMessageState(newMessage);

    if (finishMessageState.length == 0) {
      console.log('ultima');
      setFinishMessage(false);
    }
  };

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    pauseConfetti();

    if (finishMessageState.length >= 1) {
      getNeWIntroduction();
    }
  }, [show]);

  return (
    <div className={styles.finishMessage_container}>
      <Confetti
        recycle={show}
        numberOfPieces={90}
        width={width}
        height={height}
      />
      <div className={styles.finishMessage_modal}>
        <div className={styles.finishMessage_image}>
          <img src={message?.img} alt="" height={300} />
        </div>

        <div className={styles.finishMessage_text}>
          <p>{message?.value}</p>
        </div>

        <div className={styles.finishMessage_button}>
          <button onClick={getNeWIntroduction}>
            {buttonStatus ? 'Siguente' : 'Terminar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishMessage;
