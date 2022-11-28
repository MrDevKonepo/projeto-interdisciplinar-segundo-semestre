import React from "react";
import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import { useState } from "react";
import "./Ranking.css"
import Axios from "axios";


function Ranking(){

    const [quizState, dispatch] = useContext(QuizContext)
    const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    Axios.get(`http://localhost:4000/consult`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div id="ranking">
        <h1>Ranking</h1>
        {post.map((pos) => (
            (<p>Nome: {pos.nome}<br/>Pontos: {pos.pontos}</p>)
        ))}
        <button className="btn--reiniciar--ranking" onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );    
}

export default Ranking
