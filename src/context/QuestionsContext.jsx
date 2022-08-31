import { createContext, useState } from "react"

const QuestionsContext = createContext()

const questions = [
    {
        id: 1,
        value: "¿Cual es tu video juego favorito?",
        name: "Pregunta1"
    },
    {
        id: 2,
        value: "¿Cual es tu serie favorita?",
        name: "Pregunta2"
    },
    {
        id: 3,
        value: "¿Tenes algun sueño que quieras cumplir?",
        name: "Pregunta3"
    },
    {
        id: 4,
        value: "¿Como te ves de aca a 3 años?",
        name: "Pregunta4"
    }
]

const QuestionsProvider = ({ children }) => {

  const [questionsState, setQuestionsState] = useState(questions)
  const [modalStatus, setModalStatus] = useState(false)

  const [actualQuestion, setActualQuestion] = useState("")

  const [resultQuestions, setResultQuestions] = useState([])

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
        setResultQuestions
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

export { QuestionsProvider }

export default QuestionsContext