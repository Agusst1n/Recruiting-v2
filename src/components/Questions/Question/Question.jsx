import React, { useContext } from 'react';
import QuestionsContext from '../../../context/QuestionsContext';

import styles from './Question.module.css';

const Question = (question) => {
  const { setModalStatus, setActualQuestion, setLottieClick } =
    useContext(QuestionsContext);

  const { name, id, value } = question.question;

  const modal = () => {
    setModalStatus(true);
    setActualQuestion(id);
  };

  const closeLottieClick = () => {
    setLottieClick(false);
  };

  return (
    <div className={styles.question} onClick={modal} id={id}>
      <p onMouseEnter={closeLottieClick}>{value}</p>
    </div>
  );
};

export default Question;
