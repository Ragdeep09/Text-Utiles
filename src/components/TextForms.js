import React ,{useState}from 'react'
export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('convert upprse case','success');
        // setText("you are clicked on handle")
    }
    const handleLoClick = ()=>{
      console.log("lowercase  was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('convert lower case','success');

      // setText("you are clicked on handle")
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    // setText("you are clicked on handle")
}
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const[text,setText] = useState('Enter text here2');
    // setText('new text');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"/>
  </div>
  <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to lowercase</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>remove text</button>
  <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Extra Spaces</button>


  <button className="btn btn-primary mx-2" onClick={handleCopy}>copy code</button>
    </div>
    <div className ="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}character</p>
      <p>{0.008*text.split(" ").length}minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter some text in preview"}</p>

    </div>

    </>
  )
}
