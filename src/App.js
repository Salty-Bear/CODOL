import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import { Home } from './pages/home';
import { EditorPage }  from './pages/editorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <div>
      <Toaster
        position = 'bottom-center'
        toastOptions = {{
          sucess: {
            theme : {
              primary: 'green',
            },
          },
          }}
      ></Toaster>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/editor/:roomId" element={<EditorPage/>} />

      {/* In case you want to add login and signup pages: */}

      {/* <Route path="/login" element={<loginPage/>} />
      <Route path="/signup" element={<signupPage/>} /> */}
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
