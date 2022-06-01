import {useState} from "react"

export default function Textform(props) {
  const handleupclick=()=>{
    console.log("i am ")
    let newtext = text.toUpperCase();
    props.showAlert("converted into UpperCase", "success")
    
   setText(newtext)
  }
  const handleloclick=()=>{
    console.log("i am ")
    let newtext = text.toLowerCase();
    props.showAlert("converted into lowerCase", "success")
    
   setText(newtext)
  }
  const handlehiclick=()=>{
    console.log("i am ")
    let newtext ="";
    
   setText(newtext)
   props.showAlert("All written text cleared", "success")
  }
 
 
  const handleonchange=(event)=>{
    console.log("on change ")
    setText( event.target.value)
    
    
  }

  
   
    
    
  
  const [text,setText]= useState("enter text here")
  return (
    <>
  <div  className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-4">{props.heading} </h1>
     
<div className=" my-3">
  <textarea className="form-control"  value={text}onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1"  rows="12"></textarea>
</div>
<button type="button" onClick={handleupclick} className="btn btn-primary mx-1">Convert to Uppercase</button>
<button type="button" onClick={handleloclick} className="btn btn-primary mx-1">Convert to Lowercase</button>
<button type="button" onClick={handlehiclick} className="btn btn-primary mx-1">Clear text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>TEXT SUMMERY</h1>
      <p>{text.split(" ").length} word and {text.length} chracter</p>
      <h2>PREVIEW SECTION</h2>
      <p>{text}</p>
      
      </div></>
  )
}