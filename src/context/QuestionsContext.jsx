import { createContext, useState, useRef } from 'react';

const QuestionsContext = createContext();

const questions = [
  {
    id: 1,
    value: '¿Cual es tu ROL en el mundo IT?',
    name: 'Pregunta1'
  },
  {
    id: 2,
    value: '¿Como llegaste al mundo IT?',
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

const introductionData = [
  {
    id: 0,
    value: 'Hola Bienvenid@ a Recruiting!',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663219688/welcome_uty4aq.png',
    name: 'Introduction0'
  },
  {
    id:1,
    value: 'Dejame explicarte brevemente como funciona la APP',
    img:'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663224636/coffe_fr0ziz.png',
    name: 'Introduction1'
  },
  {
    id: 2,
    value: 'Recruiting facilita el reclutamiento conectandote directamente con los reclutadores',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663219699/recruiting_yk0fct.png',
    name: 'Introduction2'
  },
  {
    id: 3,
    value: 'Lo unico que tenes que hacer es grabarte respondiendo las preguntas que se te asignen',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663219810/rec_yckxpr.png',
    name: 'Introduction3'
  },
  {
    id: 4,
    value: 'Al enviar las respuestas un reclutador las vera y evaluara si estas capacitado para algun puesto',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663219889/evaluando2_pfmka8.png',
    name: 'Introduction4'
  },
  {
    id: 5,
    value: 'Esperamos que disfrutes la APP',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663220124/disfruta_syj5jd.png',
    name: 'Introduction5'
  }
]

const finishMessageData = [
  {
    id: 0,
    value: 'Felicitaciones respondiste todas las preguntas!',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663226083/congratulations_cw7pgk.png',
    name: 'Pregunta0'
  },
  {
    id: 1,
    value: 'Tus preguntas ya fueron enviadas para que las vea un reclutador',
    img: 'https://res.cloudinary.com/dx0bwa7xp/image/upload/v1663226219/Okey_roewry.png',
    name: 'Pregunta1'
  }
]

const QuestionsProvider = ({ children }) => {

  const [questionsState, setQuestionsState] = useState(questions);

  const [modalStatus, setModalStatus] = useState(false);

  const [actualQuestion, setActualQuestion] = useState('');

  const [resultQuestions, setResultQuestions] = useState([]);

  const [show, setShow] = useState(false);

  const [lottieCick, setLottieClick] = useState(true);

  const [navbarShow, setNavbarShow] = useState(false);

  const [secondLottie, setSecondLottie] = useState(false);

  const intervalRef = useRef();

  const [repliedLastQuestion, setRepliedLastQuestion] = useState(false)

 const [introductionState,setIntroductionState] = useState(introductionData)

  const [finishIntroduction, setFinishIntroduction] = useState(true)

  const [finishMessageState, setFinishMessageState] = useState(finishMessageData)

  const [finishMessage, setFinishMessage] = useState(false)


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
        setRepliedLastQuestion,
        introductionState,
        setIntroductionState,
        finishIntroduction,
        setFinishIntroduction,
        finishMessageState,
        setFinishMessageState,
        finishMessage,
        setFinishMessage
        // finish,
        // setFinish
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsProvider };

export default QuestionsContext;
