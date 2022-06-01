import './App.css';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { useState } from 'react';
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";







function App() {
  const[Mode, setMode] = useState('light');
  const[Code,setCode] =useState("Enable DarkMode") ;
  const[alert,setAlert]= useState(null);


  const showAlert = (message,type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
}
  


 

  
  

  const toggleMode=()=>{
    if (Mode==="light") 
    {setMode("dark")
    setCode("Enable LightMode") 
    showAlert("Dark mode is enabled","success")
   
   
    document.body.style.backgroundColor ="rgba(6, 105, 118, 0.523)";
    
       }
else{
  setMode("light")
  setCode("Enable DarkMode")
  document.body.style.backgroundColor = "white"
  showAlert("Light mode is enabled","success")


}


  }
  


  return (
    <>
<Router>
  
<Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} code={Code}></Navbar>
 <Alert alert={alert}></Alert>
<div className='container my-5'>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            
            <Textform heading="Enter text here" showAlert={showAlert}  mode={Mode}></Textform> 
            </Route>
            
        </Switch>
        </div>

       

  
  
    
 

  </Router>
 </>
);
}

export default App;
