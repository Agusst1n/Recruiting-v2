import React, { useContext, useState } from 'react';
// import AuthenticationContext from '../../context/AuthenticationContext';
import QuestionsContext from '../../context/QuestionsContext';
import Question from './Question/Question';

import styles from './Questions.module.css';

const Questions = () => {
  const { questionsState,lottieCick } = useContext(QuestionsContext);
  // const {doneStatus} = useContext(AuthenticationContext)


  let questions = questionsState.length;


  return (
    <div className={styles.questions_container}>
      <div className={styles.outstanding_questions}>
        {lottieCick && (
          <div className={styles.lottie_click}>
            <Lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_utozmgjr.json"
              background="transparent"
              speed="1"
              style={{ width: '120px' }}
              loop
              autoplay
            ></Lottie-player>
          </div>
        )}
        <div className={styles.total_questions}>
          <h3>
            {questionsState.length > 0
              ? `Responde estas ${questions} preguntas por favor`
              : ''}
          </h3>
        </div>
      </div>

      {/* Si done esta en true no renderizar las preguntas */}
      {questionsState ? (
        questionsState.map((question) => (
          <Question question={question} key={question.id} />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Questions;
