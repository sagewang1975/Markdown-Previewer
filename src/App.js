import {useState} from "react";
import './App.css';
import {marked} from "marked";
function App() {
  const [text,setText]=useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 25,
  }
  \`\`\`
  - first item
  - second item
  
  > blockquote
  ![alt text](img.jpg)
  **bold text**
  `);
  marked.setOptions({
    breaks : true
  })
  return (
    <div className="App">
     <textarea id="editor"
               onChange={(event)=>{setText(event.target.value)}}
               value={text}
               
     ></textarea>
     <div id="preview"
     dangerouslySetInnerHTML={{__html: marked(text),}}></div>
    </div>
  );
}

export default App;
