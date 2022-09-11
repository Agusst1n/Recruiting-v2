import { createContext, useState, useRef } from 'react';

const QuestionsContext = createContext();

const questions = [
  {
    id: 1,
    value: '¿Cual es tu video juego favorito?',
    name: 'Pregunta1'
  },
  {
    id: 2,
    value: '¿Cual es tu serie favorita?',
    name: 'Pregunta2'
  },
  {
    id: 3,
    value: '¿Tenes algun sueño que quieras cumplir?',
    name: 'Pregunta3'
  },
  {
    id: 4,
    value: '¿Como te ves de aca a 3 años?',
    name: 'Pregunta4'
  }
];

const QuestionsProvider = ({ children }) => {

  const [questionsState, setQuestionsState] = useState(questions);

  let userData = JSON.parse(localStorage.getItem('user'))
  
  let Token = userData?.idToken

  // const questionsFunc = async () =>{
  //   try {
      
  //     const res = await fetch(`https://video-rec-2b0fb-default-rtdb.firebaseio.com/questions.json?auth=${Token}`)

  //     const data = await res.json()

  //     setQuestionsState(data)

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  const [modalStatus, setModalStatus] = useState(false);

  const [actualQuestion, setActualQuestion] = useState('');

  const [resultQuestions, setResultQuestions] = useState([]);

  const [show, setShow] = useState(false);

  const [lottieCick, setLottieClick] = useState(true);

  const [navbarShow, setNavbarShow] = useState(false);

  const [secondLottie, setSecondLottie] = useState(false);

  const intervalRef = useRef();


  const [repliedLastQuestion, setRepliedLastQuestion] = useState(false)



  const toggle_navbar = () =>{
    setNavbarShow(!navbarShow)
  }

  const pauseConfetti = () => {
    let count = 0;
    if (show) {
      setSecondLottie(true);
      const reactConfetti = setInterval(() => {
        if (count >= 2) {
          setShow(false);
          clearInterval(intervalRef.current);
        } else {
          count++;
        }
      }, 1000);

      intervalRef.current = reactConfetti;
    } else {
      console.log('es false');
    }
  };

  return (
    <QuestionsContext.Provider
      value={{
        questionsState,
        setQuestionsState,
        modalStatus,
        setModalStatus,
        actualQuestion,
        setActualQuestion,
        resultQuestions,
        setResultQuestions,
        show,
        setShow,
        lottieCick,
        setLottieClick,
        navbarShow,
        setNavbarShow,
        toggle_navbar,
        pauseConfetti,
        secondLottie,
        setSecondLottie,
        // questionsFunc,
        repliedLastQuestion,
        setRepliedLastQuestion
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsProvider };

export default QuestionsContext;
