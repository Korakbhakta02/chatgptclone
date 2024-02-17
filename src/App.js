import logo from './logo.svg';
import './App.css';
import gptlogo from "./assets/chatgpt.svg"
import addbtn from "./assets/add-30.png"
import msgicon from "./assets/message.svg"
import   home from "./assets/home.svg"
import saved from "./assets/bookmark.svg"
import rocket from "./assets/rocket.svg"
import sendbtn from "./assets/send.svg"
import usericon from "./assets/user-icon.png"
import gptimglogo from "./assets/chatgptLogo.svg"
import { sendmsgtoopenai } from './openai';
import { useState } from 'react';

function App() {

  const [input,setInput]=useState("");
const [messages,setMessages]=useState([
  {
  text:"Hi, I am CHat-GPT",
  isBot: true

}
])

const handlesend=async ()=>{

  const text=input;
  setInput('');
  setMessages([
    ...messages,
    {text, isBot: false}
  ])
const res=await sendmsgtoopenai(text)
setMessages([...messages,
{ text,isBot: false },
{text: res, isBot: true}
])
}




  return (
    <div className="App">
     <div className="sideBar">
      <div className="upperSide">
<div className="upperSidedTop">
  <img src={gptlogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span>
  <button className="midBtn"><img src={addbtn} alt="newChat" className="addBtn" />New Chat</button>
</div>
<div className="upperSideButtom">
  <button className="query"><img src={msgicon} alt="query" />What is Programming?</button>
  <button className="query"><img src={msgicon} alt="query" />How to use api?</button>
</div>
      </div>
      <div className="lowerSide">
<div className="listItems"><img src={home} alt="Home" className="listitemsimg" />Home</div>
<div className="listItems"><img src={saved} alt="Saved" className="listitemsimg" />Saved</div>
<div className="listItems"><img src={rocket} alt="Upgrade" className="listitemsimg" />Upgrade</div>
      </div>
     </div>
     <div className="main">
<div className="chats">
  {/* <div className="chat">
    <img className='chatimg' src={usericon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic ex, quia distinctio maxime sequi repudiandae culpa voluptas illo a tenetur in, facilis assumenda blanditiis corrupti quo non debitis unde.</p>
  </div> */}
  {/* <div className="chat bot">
    <img className="chatimg" src={gptimglogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus consequuntur quis sit non maiores possimus, repellendus aspernatur dolorem consectetur delectus similique numquam esse ipsam amet atque a optio cupiditate omnis error debitis fuga molestiae! Sequi, id inventore perspiciatis placeat nesciunt exercitationem! Nam consectetur animi officiis nisi non amet optio quia atque sunt eos, nihil tenetur, minus veniam, mollitia inventore aperiam corporis doloribus dolorum facere commodi. Nesciunt nulla tenetur assumenda nam, reiciendis et ea maxime fuga eos asperiores pariatur nostrum accusamus! Quos, natus nesciunt amet excepturi odio soluta eaque, quidem eum obcaecati repellendus sint facere labore, ipsum aliquid voluptatem dolor.</p>
  </div> */}
  {messages.map((message, i)=>
     <div key={i} className={message.isBot?"chat bot":"chat"}>
     <img className="chatimg" src={message.isBot?gptimglogo:usericon} alt="" /><p className="txt">{message.text}</p>
   </div>
  )}
</div>

      <div className="chatFooter">
      <div className="inp">
        <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className="send"><img src={sendbtn} alt="send" onClick={handlesend} /></button>
      </div>
      <p>Chatgpt may produce incorrect result about places,person or facts. ChatGPT V20.</p>
      </div>


     </div>
    </div>
  );
}

export default App;
