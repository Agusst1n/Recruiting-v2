import React from 'react';

import styles from './Introduction.module.css';

//Images
import welcome from '../../assets/welcome.png';
import { useContext } from 'react';
import QuestionsContext from '../../context/QuestionsContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Introduction = () => {
  const { introductionState, setIntroductionState, setFinishIntroduction } =
    useContext(QuestionsContext);

  const [introduction, setIntroduction] = useState();
  const [buttonStatus, setButtonStatus] = useState(true)

  const getNeWIntroduction = () => {
    let firstIntroduction = introductionState[0];
    console.log(firstIntroduction);

    setIntroduction(firstIntroduction);

    filterIntroduction();
    if(introductionState.length == 1){
      setButtonStatus(false)
    }

  };

  const filterIntroduction = () => {
    let newIntroduction = introductionState.filter(
      (item, index) => index !== 0
    );

    setIntroductionState(newIntroduction);

    console.log(newIntroduction);
    if (introductionState.length == 0) {
      console.log('ultima');
      setFinishIntroduction(false);
    }
  };

  useEffect(() => {
    if (introductionState.length >= 1) {
      getNeWIntroduction();
    }
  }, []);

  return (
    <div className={styles.introduction_container}>
      <div className={styles.introduction_modal}>
        <div className={styles.introduction_image}>
          <img src={introduction?.img} alt="" height={300}/>
        </div>

        <div className={styles.introduction_text}>
          <p>{introduction?.value}</p>
        </div>

        <div className={styles.introduction_button}>
          <button onClick={getNeWIntroduction}>{buttonStatus? 'Siguente' : 'Terminar'}</button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
