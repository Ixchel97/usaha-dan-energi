import React, {useState, useContext, useEffect} from "react";
import { db } from "../../firebase";
import { addDoc, collection, Timestamp, query, where, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Kuis1Soal } from './Kuis1Soal';
import { useTimer } from "react-timer-hook";
import "./Kuis1.css";

const Kuis1 = () => {

    const time = new Date();
	  time.setSeconds(time.getSeconds()+1800);
	  const {seconds, minutes, hours} = useTimer({expiryTimestamp: time,onExpire:()=>setShowResult(true) });

    const {currentUser} = useContext(AuthContext);

    const [loginSiswa, setLoginSiswa] = useState([]);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      const email = currentUser.email;
      const q = query(collection(db, 'siswa'),where("email","==",email))
      onSnapshot(q, (querySnapshot) => {
        setLoginSiswa(querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })))
      })
    },[])
    
  
    let namaSiswa = loginSiswa.map(siswa =>{
      return(siswa.nama)
    }
      );
  
    let nisnSiswa = loginSiswa.map(siswa =>{
      return(siswa.nisn)
    }
      );
  
    let kelasSiswa = loginSiswa.map(siswa =>{
      return(siswa.kelas)
    }
      );
  
    
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  
    const { questions } = Kuis1Soal
    const { question, choices, correctAnswer } = questions[activeQuestion]
  
    const onClickNext = () => {
      setSelectedAnswerIndex(null)
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 10,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1)
      } else {
        setActiveQuestion(0)
        setShowResult(true)
      }
    }

    const onClickSoal1 = () => {
      setActiveQuestion(0)
    }

    const onClickSoal2 = () => {
      setActiveQuestion(1)
    }

    const onClickSoal3 = () => {
      setActiveQuestion(2)
    }

    const onClickSoal4 = () => {
      setActiveQuestion(3)
    }

    const onClickSoal5 = () => {
      setActiveQuestion(4)
    }

    const onClickSoal6 = () => {
      setActiveQuestion(5)
    }

    const onClickSoal7 = () => {
      setActiveQuestion(6)
    }

    const onClickSoal8 = () => {
      setActiveQuestion(7)
    }

    const onClickSoal9 = () => {
      setActiveQuestion(8)
    }

    const onClickSoal10 = () => {
      setActiveQuestion(9)
    }
  
    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index)
      if (answer === correctAnswer) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }
  
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  
    const handleEvaluasi = async() => {
          await addDoc(collection(db, "Kuis1"), {
            nama : namaSiswa,
            nisn : nisnSiswa,
            kelas : kelasSiswa,
            nilai : result.score,
            created: Timestamp.now()
          });
          navigate("/usaha-dan-hubungannya-dengan-perubahan-energi");
    }

    
    
  
    return (
      <div className="quiz1-body" >
        {!showResult ? (
          <div className="quiz-body">
          <div className="quiz-body-left">
          <div className="quiz-container">
            <div className="kuis1">
              <h1>Kuis 1</h1>
            </div>
            <div className="quiz-header">
              <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
              <span className="total-question">/{addLeadingZero(questions.length)}</span>
              <span className="countdownSoal">{hours} : {minutes} : {seconds}</span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                  {answer}
                </li>
                
              ))
              }
            
            </ul>
            <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
              
            </div>
          </div>
          </div>

          <div className="quiz-body-right">
                <div className="quiz-nomor-soal">
                  <div className="kuis1">
                    <h1>Nomor Soal</h1>
                  </div>
                  <div className="nomor-soal">
                    <button className="nomor-button" onClick={onClickSoal1}>
                      1
                    </button>
                    <button className="nomor-button" onClick={onClickSoal2}>
                      2
                    </button>
                    <button className="nomor-button" onClick={onClickSoal3}>
                      3
                    </button>
                    <button className="nomor-button" onClick={onClickSoal4}>
                      4
                    </button>
                    <button className="nomor-button" onClick={onClickSoal5}>
                      5
                    </button>
                    <button className="nomor-button" onClick={onClickSoal6}>
                      6
                    </button>
                    <button className="nomor-button" onClick={onClickSoal7}>
                      7
                    </button>
                    <button className="nomor-button" onClick={onClickSoal8}>
                      8
                    </button>
                    <button className="nomor-button" onClick={onClickSoal9}>
                      9
                    </button>
                    <button className="nomor-button" onClick={onClickSoal10}>
                      10
                    </button>
                    <div className="kumpulkan-quiz">
                    <button className="button-kumpulkan">
                      Kumpulkan
                    </button>
                    </div>
                  </div>
                </div>
          </div>
          </div>
        ) : (
          <div className="result-kuis1">
            
            <p>
              Selamat anda telah menyelesaikan kuis 1. Apakah anda ingin mengumpulkan ?
            </p>
            <div className="center-button">
              <button onClick={handleEvaluasi}>Kumpulkan</button>
            </div>
            
          </div>
        )}
      
      </div>
    )
}

export default Kuis1