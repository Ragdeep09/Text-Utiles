import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import { Link } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
const showAlert = (message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
},1500);

}
  const toggleMode = ()=>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='grey';
    showAlert("dark mode has been enable","success");
    document.title = 'Textutils-dark mode';
    setInterval(()=>{
      document.title = 'Textutils now';
    },2000);
    setInterval(()=>{
      document.title = 'Textutils show';
    },1500);
    
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enable","success");
    document.title = 'Textutils-light mode';


  }

  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText=" about us" mode={mode} toggleMode={toggleMode}/>

      {/* <switch> */}
<Alert alert={alert}/>
<div className="container my-3">
  {/* <Routes> */}
  {/* <Route exect path="/about" element={<About />} />
</Routes> */}
{/* <Routes>
<Route exect path="/TextForms"> */}
{/* <About/> */}
        <TextForms showAlert={showAlert} heading="enter the text" mode={mode}/>
        {/* </Route>
</Routes> */}

</div>
{/* </switch>
</Router> */}

</>
  );

}

export default App;
