import React, { useEffect } from "react";
import { createContext, useReducer, addDoc } from "react";
import questions from "../data/questions"
import nameInput from "../components/GameOver";
import Axios from "axios"

// ***************************************** CONFIGURAÇÃO FIREBASE *****************************************

import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { useState } from "react";

const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyB0LTz_P3XnPzx9pe-5Rq7Irdp0bX-Wolg",
    authDomain: "quiz-19cb3.firebaseapp.com",
    projectId: "quiz-19cb3",
//    storageBucket: "quiz-19cb3.appspot.com",
//    messagingSenderId: "561437606722",
//    appId: "1:561437606722:web:fb3921ebd102ad1c49bedb"
  });

const db = getFirestore(firebaseConfig)
const userCollectionRef = collection(db, "Users")

// ********************************************************************************************************

const STAGES = ["Start", "Playing", "End", "Ranking"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false
}

const quizReducer = (state, action) => {

    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            }
        
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })

            return{
                ...state,
                questions: reorderedQuestions,
            }
        
        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            if (!questions[nextQuestion]) {
                endGame = true
            }

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2]: state.gameStage, answerSelected: false
            }
        
        case "NEW_GAME":
            return initialState
        
        case "CHECK-RANKING":
            return{
                ...state,
                gameStage: STAGES[3]
            }

        case "CHECK_ANSWER":
            if (state.answerSelected) return state
            
            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option
            }

        default:
            return state
    }

}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
