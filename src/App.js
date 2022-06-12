import './App.css'
import {useState} from "react";
import Trivia from './Components/Trivia';
function App() {
  const [questionNumber,setQuestionNumber]=useState(1);
  //it will set question number 
  // const[timeOut,setTimeOut]=useState(false);
  const[stop,setStop]=useState(false);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid=[
    {id:1, amount:"Rs 100"},
    {id:2, amount:"Rs 200"},
    {id:3, amount:"Rs 300"},
    {id:4, amount:"Rs 400"},
    {id:5, amount:"Rs 500"},
    {id:6, amount:"Rs 600"},
    {id:7, amount:"Rs 700"},
    {id:8, amount:"Rs 800"},
    {id:9, amount:"Rs 900"},
    {id:10, amount:"Rs 1000"},
    {id:11, amount:"Rs 1100"},
    {id:12, amount:"Rs 1200"},
    {id:13, amount:"Rs 1300"},
    {id:14, amount:"Rs 1400"}
  ].reverse();
  return (
    <div className="app">
      
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom"><Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/></div>
      </div>

      <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m)=>(
           <li className={questionNumber==m.id ?"moneyList-Item active":"moneyList-Item"}>
           <span className="monenyList-ItemNumber">{m.id}</span>
           <span className="moneyList-ItemAmount">{m.amount}</span>
         </li>
        ))}
      {/* it will match question number with id and if it match then it will add the class active otherwise not */}
      </ul>
      </div>
    </div>
  );
}
export default App;
