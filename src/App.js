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
// import a from './components/b.jpg';
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
      try{
      let cardsFromServer = await fetchCards(); console.log("cards from server = ", cardsFromServer);
      }catch(e){
     setCards(
 [
    {
      "id": 270630,
      "title": "React",
      "tasks": [
        {
          "id": 458,
          "completed": false,
          "text": "fireBase 🔥 "
        },
        {
          "id": 8028,
          "completed": false,
          "text": "logIn app - make an application just for logIn logOut & register"
        },
        {
          "id": 15663,
          "completed": false,
          "text": "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31794410#content"
        }
      ]
    },
    {
      "id": 446059,
      "title": "25/08/2022",
      "tasks": [
        {
          "id": 18274,
          "completed": false,
          "text": "לסיים ולסכם קורס ה kubernates מתוך ה linkedin"
        },
        {
          "id": 15017,
          "completed": false,
          "text": "לפתור 2 שאלות ב leetcode "
        },
        {
          "id": 2760,
          "completed": false,
          "text": "yes 💴 "
        },
        {
          "id": 7319,
          "completed": false,
          "text": "reham"
        },
        {
          "id": 7764,
          "completed": false,
          "text": "reham abass"
        },
        {
          "id": 16364,
          "completed": false,
          "text": "yes yes yes yes yes"
        }
      ]
    },
    {
      "id": 95263,
      "title": "CSS",
      "tasks": [
        {
          "id": 18615,
          "completed": false,
          "text": "css - overflow"
        },
        {
          "id": 9690,
          "completed": false,
          "text": "css layout - {float , clear}"
        },
        {
          "id": 7967,
          "completed": false,
          "text": "css forms"
        }
      ]
    },
    {
      "id": 160363,
      "title": "אפלחקצחות של :",
      "tasks": [
        {
          "id": 19720,
          "completed": false,
          "text": "log In"
        },
        {
          "id": 626,
          "completed": false,
          "text": "change theme"
        },
        {
          "id": 19526,
          "completed": false,
          "text": "upload pictures"
        },
        {
          "id": 2858,
          "completed": false,
          "text": "save 🔗  links"
        },
        {
          "id": 7152,
          "completed": false,
          "text": "media player ▶ "
        },
        {
          "id": 16889,
          "completed": false,
          "text": "change color of card !"
        }
      ]
    },
    {
      "id": 538563,
      "title": "Design Patterns",
      "tasks": [
        {
          "id": 19760,
          "completed": false,
          "text": "Observer"
        },
        {
          "id": 12926,
          "completed": false,
          "text": "Factory"
        },
        {
          "id": 4832,
          "completed": false,
          "text": "Decorator"
        },
        {
          "id": 16592,
          "completed": false,
          "text": "Adapter"
        },
        {
          "id": 13514,
          "completed": false,
          "text": "proxy"
        },
        {
          "id": 13751,
          "completed": false,
          "text": "command"
        },
        {
          "id": 3552,
          "completed": false,
          "text": "template"
        },
        {
          "id": 10432,
          "completed": false,
          "text": "state"
        },
        {
          "id": 14981,
          "completed": false,
          "text": "bridge"
        },
        {
          "id": 3014,
          "completed": false,
          "text": "prototype"
        },
        {
          "id": 2351,
          "completed": false,
          "text": "facade"
        }
      ]
    },
    {
      "id": 84630,
      "title": "Kubernates :",
      "tasks": [
        {
          "id": 3249,
          "completed": false,
          "text": "https://kubernetes.io/docs/tutorials/"
        },
        {
          "id": 8260,
          "completed": false,
          "text": "https://cloud.google.com/kubernetes-engine"
        },
        {
          "id": 7628,
          "completed": false,
          "text": "https://www.linkedin.com/learning/kubernetes-your-first-project/your-first-project-on-kubernetes?autoplay=true"
        },
      ]
    },
  ]);
  console.log('hehehehhe success to catch the error ^*^ , error =',e);

      }
      finally{
        console.log('I am in finally');
      }
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
      console.log("success to fetch data from server")
      return data
    }
    else {
      console.log(" failed to load data from server");
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
    else{
      console.log("failed to remove card from server, gonna remove it locally :")
      let newCards = cards.filter( c => c.id !== id );
      setCards(newCards);
      console.log('after deleteing : cards = ', cards );
    }
  }
  //---------------------------------------------------------------------------------------------------
  //fetch card
  // const getCard = async (id) => {
  //   let tempc = cards.filter(c => c.id === id);
  //   tempc = tempc[0];
  //   return tempc;
  //   const res = await fetch(`http://localhost:5000/cards/${id}`);
  //   if (res.status < 300 && res.status >= 200) {
  //     console.log(' success to fetch again from server');
  //   }
  //   const data = await res.json()
  //   return data
  // }
  //-------------------------------------------------------------------------------
  //Fetch Task
  // const getTask = async (id_card, id_task) => {
  //   const res = await fetch(`http://localhost:5000/cards/${id_card}/tasks/${id_task}`)
  //   const data = await res.json()
  //   return data
  // }
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

      let ourCards = cards.map(c => c.id ===id? updatedCard:c)

    if (res.status < 300 && res.status >= 200) {
      // setCards(ourCards);
      // await fetchCards();
    }
    else{
      console.log('failed to save to Backend , saved locally')
      // setCards(ourCards);
    }
    setCards(ourCards);
  }
  //-----------------------------------------------------------------------------------------------
  const addNewCard = async (title) => {
    let newId = Math.floor(Math.random() * 17890) * 31;
    let newCard = { id: newId, title: title, tasks: [] }
    // cards.push(newCard);
    let newCards = [...cards];
    newCards.push(newCard);
    const res = await fetch('http://localhost:5000/cards', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
    const data = await res.json()
    if (res.status < 300 && res.status >= 200) {
      // await fetchCards();
      // setCards(newCards);
    }
    else { alert('Error Adding new card'); }
    setCards(newCards);
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
      // await fetchCards();
      console.log("Success to delete the task from server!! ");
     
    }
    else { alert('Error Deleting This Task from server'); }

    // let newCards = [...cards];
    let newCards = cards.map(c => c.id === id ? updatedCard:c  )
    console.log('after updating the card in delete task, the new arr :',newCards);
    setCards(newCards);

  }
  //-------------------------------------------------------------------------------------------------------
  return (
    <div className="App">
   {/*  <img
        src={a}
        // src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wqI5?ver=bfb7'
        // 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wpph?ver=ccbe'
        style={{
          zIndex: "-1",
          position: 'fixed',
          // transform: 'scale(1.216)',
          marginRight: '0%',
          // left: '0%',
          // right: '0%',
          paddingRight: '0%',
          top: '0%',
          buttom: '0%',
          opacity:'50%',
        }}
      />
      */} 
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
      <h1 style ={{align:'center',marginLeft:'42%', 
           fontSize: 'xx-large',
        marginTop:'180px',
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
