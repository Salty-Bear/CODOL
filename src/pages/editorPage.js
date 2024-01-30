import React, { useState , useRef, useEffect} from 'react'
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Client } from '../components/Client';
import { Editor } from '../components/Editor';
import { initSocket } from '../socket';
import { useLocation } from 'react-router-dom';
import { ACTIONS} from '../actions';


export const EditorPage = () => {

  
  const socketRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const init = async() => {
      socketRef.current = await initSocket();
      // socketRef.current.emit(ACTIONS.JOIN, {
      //   roomId: location.state.roomId,
      //   username: location.state.username,
      // })
    }
    init();
  });

  const [clients, setClients] = useState([ 
    { socketId: 1, username: 'SaltyBear'},
    { socketId: 2, username: 'Abhinav'},
    { socketId: 2, username: 'pijon'},
    { socketId: 2, username: 'Jaiswal'},
  ]);


  return (
    <Grid container spacing={0}>
  <Grid item xs={2.5} >
    <div class = "sidebar">
        <div class="logodiv">
        <img class="brandlogoeditor" src = 'https://i.imgur.com/vDg2iig.png' alt='logo'/> 
        </div>

        <div class="filemanager">
          <p className = "">FILES</p>
        </div>


        <div>
          <p className = "connectedheading">Connected peers</p>
          <div className='clientList'>
            {clients.map((client) => (
              <Client
              key = {client.socketId}
              username = {client.username}
              />
            ))}
          </div>
        </div>



     <div className='sidebarbuttons' >

     <Stack direction="column" spacing={1} sx={{width:280}}>

     <Button variant="contained" color="success" size='large'>
      COPY Code
    </Button>

    <Button variant="contained" color="error" size='large'>
      Leave Room
    </Button>


      </Stack>


      </div>

    </div>
  </Grid>
  <Grid item xs={9.5}>
      <Editor/>
  </Grid>
</Grid>
  )
}
