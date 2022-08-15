import Header from './components/Header/Header.jsx'
import './App.css';
import List from './components/ListOfCards/List.jsx'
// import SignInButton from './components/SignInButton/signin.jsx'
import AddCardButton from './components/Buttons/AddCardButton/AddCard'
import React from 'react'
import { useState, useEffect } from 'react'
import Head from './components/Head/Head.jsx';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import pic from './pictures/124.jpg';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
function App() {
  const [cards, setCards] = useState([])
  //---------------------------------------------------------------------------------------------------
  useEffect(() => {
    //******************************************************* */
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyAgS_Z2rAg9jopDcDGscJjUYGrgdmSw_Lw",
      authDomain: "mynotes-reham.firebaseapp.com",
      projectId: "mynotes-reham",
      storageBucket: "mynotes-reham.appspot.com",
      messagingSenderId: "4536929935",
      //******************************************************* */
      appId: "1:4536929935:web:ccfc31776b6d3675ec2afa",
      measurementId: "G-RGFB78X0CX"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
   /*********************************************************************** */
    localStorage.setItem("myCards", cards);
    const getCards = async () => {
      let cardsFromServer = await fetchCards();
      console.log("cards from server = ", cardsFromServer);
    }
    getCards()

  }, [])
  //------------------------------------------------------------------------------------------------------
  // Fetch Tasks
  const fetchCards = async () => {
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json();
    if (res.status < 300 && res.status >= 200) {
      setCards(data);
      return data
    }
    else {
      alert("can not fetch data! ");
    }
  }
  //---------------------------------------------------------------------
  const deleteCard = async (id) => {
    let temp = cards.filter(c => c.id !== id);
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    });
    let data = await res.json();
    if (res.status < 300 && res.status >= 200) {

      await fetchCards();
    }
  }
  //---------------------------------------------------------------------------------------------------
  //fetch card
  const getCard = async (id) => {
    let tempc = cards.filter(c => c.id === id);
    tempc = tempc[0];
    return tempc;
    const res = await fetch(`http://localhost:5000/cards/${id}`);
    const data = await res.json()
    return data
  }
  //-------------------------------------------------------------------------------
  //Fetch Task
  const getTask = async (id_card, id_task) => {
    const res = await fetch(`http://localhost:5000/cards/${id_card}/tasks/${id_task}`)
    const data = await res.json()
    return data
  }
  //-------------------------------------------------------------------------------------------------
  const addTask = async (id, text) => {
    let card = cards.filter(c => c.id === id);
    card = card[0];
    let updatedTasks = card.tasks;
    let newTask = {
      id: Math.floor(Math.random() * 20000) + 1,
      completed: false,
      text: text
    }
    updatedTasks = [...updatedTasks, newTask];
    const updatedCard = { id: id, title: card.title, tasks: updatedTasks }
    // let ourCards = cards.map(c => c.id === id ? updatedCard : c);
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      // setCards(ourCards);
      await fetchCards();
    }
  }
  //-----------------------------------------------------------------------------------------------
  const addNewCard = async (title) => {
    let newId = Math.floor(Math.random() * 17890) * 31;
    let newCard = { id: newId, title: title, tasks: [] }
    cards.push(newCard);
    const res = await fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      await fetchCards();
    }
    else { alert('Error Adding new card'); }
  }
  //-------------------------------------------------------------------------------------------------
  const toggleTask = async (id, id_task) => {
    // let card = cards.filter(c => c.id === id);
    // card = card[0];
    // console.log("in toggle , card name = ", card.title);
    // let task = card.tasks.filter(t => t.id === id_task);
    // task = task[0];
    // console.log("in toggle , task id = ", task.id, " - completed = ", task.completed);
    // task.completed = !task.completed;

    // let updatedTasks = card.tasks.map(t => t.id === id_task ? task : t);

    // let updatedCard = {
    //   id: id,
    //   title: card.title,
    //   tasks: updatedTasks
    // }

    // console.log("task.id = ", task.id, " , changed to completed =", task.completed);

    // const res = await fetch(`http://localhost:5000/cards/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updatedCard),
    // })
    // const data = await res.json()
    // if (res.status < 300 && res.status >= 200) {
    //   await fetchCards();
    // }
    // else { alert('Error change completed for task :', task.id); }
  }
  //========================================================================
  //---------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------
  // Delete Task
  const deleteTask = async (id, id_task) => {
    // console.log("Reham - u R in delete task !!!!!!!!!!");
    let card = cards.filter(c => c.id === id);
    card = card[0];
    let updatedTasks = card.tasks.filter(t => t.id !== id_task);

    let updatedCard = {
      id: id,
      title: card.title,
      tasks: updatedTasks
    }

    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
    const data = await res.json()
  
    if (res.status < 300 && res.status >= 200) {
      await fetchCards();
      console.log("Success to delete the task!! ");
    }
    else { alert('Error Deleting This Task'); }
  }
  //-------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
      {/* <img
        src={pic}
        // src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqI5?ver=bfb7'
        // 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wpph?ver=ccbe'
        style={{
          zIndex: "-1",
          position: 'fixed',
          transform: 'scale(1.216)',
          marginRight: '0%',
          left: '0%',
          right: '0%',
          paddingRight: '0%',
          top: '0%',
          buttom: '0%',
          // opacity:'95%',
        }}
      /> */}
      {/* <video autoplay={true} controls loop play
        // src={hh}
        src='https://rod-streaming-video-msn-com.akamaized.net/e908e91f-370f-49ad-b4ce-775b7e7a05b4/a6287f74-46f0-42f9-b5d9-997f00585696.mp4'
        style={{
          zIndex: "-1",
          position: 'fixed',
          right: '0%',
          left:'0%',
          top:'0%',
          buttom:'0%',
                }} /> */}
      {/* <SignInButton /> */}
    
      <Head />
      <Header /> 
     

      <AddCardButton addNewCard={addNewCard} />

      {cards.length <= 0 ? 
      <h1 style ={{align:'center',marginLeft:'44%', 
           fontSize: 'large',
        marginTop:'80px',
        width:'350px',
       }}> add some cards</h1> :
        <List
          cards={cards}
          deleteCard={deleteCard}
          deleteTaskServer={deleteTask}
          toggleTaskServer={toggleTask}
          addTaskServer={addTask} />}
    </div>
  );
}

export default App;
