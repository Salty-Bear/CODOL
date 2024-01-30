
import React, {useEffect} from "react";
import Codemirror from 'codemirror'

import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
//languages
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/clike/clike'

//themes
import 'codemirror/theme/dracula.css'

export const Editor = () => {

  useEffect(() => {
    async function init(){
      Codemirror.fromTextArea(document.getElementById('editorarea'), { 
        mode: { name: 'clike' ,json: true},
        theme: 'dracula',
        autoCloseBrackets: true,
        lineNumbers: true,
        autocorrect: true,
              
    });
  }
  init();
  },[]);

  return (
    <textarea id='editorarea' > </textarea>
  )
}
