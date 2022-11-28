import React from "react";
import { useContext } from "react"
import Axios from "axios"
import { QuizContext } from "../context/quiz"
import WellDone from "../img/WellDone.svg"
import "./GameOver.css"
import { useState } from "react";

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext)

  const [values, setValues] = useState()
  const [listValues, setListValues] = useState()

  const changeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const nameInput = () => {

      setListValues()
      setValues()
    
      Axios.post("http://localhost:4000/create", {
        nome: values.name,
        pontos: quizState.score
      })    
  }

  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas</p>
        <img src={WellDone} alt="Fim do Quiz" />
        <input type='text' id="name" name='name' placeholder='Nome' className='nome--input' onChange={changeValues}/>
        <button className="btn--salvar"    onClick={() => nameInput()}>Salvar</button>
        <button className="btn--reiniciar" onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        <button className="btn--ranking"   onClick={() => dispatch({type: "CHECK-RANKING"})}>Ranking</button>
    </div>
  )
}

export default GameOver
