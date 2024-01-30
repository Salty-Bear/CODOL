import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {v4 as uuidv4} from 'uuid';
import Stack from '@mui/material/Stack';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



export const Home = () => {
  const navigate = useNavigate();
  const [ roomId, setRoomId] = useState('');
  const [ username, setUserName] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    console.log(id);

    setRoomId(id);

    toast.success('New Room Created!');
  }


  const joinRoom = (e) => {
    if(!roomId || !username){
      toast.error('Please enter all the details!');
      return;
    }

    navigate(`/editor/${roomId}` , {
      state : {
        username,
        roomId,
      }
    })
  }

  const handleInputEnter = (e) => {
    if(e.key === 'Enter'){
      joinRoom();
    }
  }

  return (

    <div class = "homePageWrapper">
        <div class = "headerTab">
          <a href= 'https://saltybear.live/' target="_blank" rel='noreferrer'><img class='branding' src = 'https://i.imgur.com/EoUVoPb.png' alt = 'branding'></img></a>
          <Button className='logInButton' color="secondary" variant="contained" >Log in</Button>
        </div>
        

        <Grid container spacing={1} >
          <Grid item xs={5} sx={{mt:7, ml:8}} >
            <p class="head" >Write, Edit, Collaborate</p>
            <p class="para"> Unlock the power of shared intellect. Code together, create together.</p>
            <img class="illustration" src="https://i.imgur.com/Pzcb0pq.png" alt="logo"  />
          </Grid>

          <Grid item xs={3} sx={{ml:18 , mt:10}}>
          <Card sx={{textAlign:'center',width:550}}>
            <CardContent>
            <div style={{padding:20}}>
              <div class='logocontainer'>
              <img class="brandlogo" src = 'https://i.imgur.com/vDg2iig.png' alt='logo'/> 
              </div>
              
              <p class="label">Invitation Room ID</p>
              <TextField value={roomId} onChange={(e) => setRoomId(e.target.value)} onKeyUpCapture={handleInputEnter} style={{width:400}} id="outlined-basic" label="Room ID" variant="outlined" />

              <p class="label">USERNAME</p>
              <TextField onChange={(e) => setUserName(e.target.value)} onKeyUpCapture={handleInputEnter}  style={{width:400}} id="outlined-basic" label="UserName" variant="outlined" />

            <Stack direction="row" spacing={5} sx={{justifyContent:'center',mt:3}}>
              <Button onClick={joinRoom} sx={{mt:3,width:150}} variant="outlined" color="success">
                Join
              </Button>
              <Button onClick={createNewRoom} sx={{mt:3,width:150}} variant="outlined" color="primary">
                Create
              </Button>
              </Stack>
            </div>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
    </div>
  )
}
