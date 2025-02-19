import { useState, useEffect } from 'react'
// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';
// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from './axios/axios'


function App() {
  const[events, setEvents] = useState([]);//gerencia o estado atual no caso do users

  async function getEvents(){
    //Chamada da API
    await api.getEvents().then(
      (response)=> {
        console.log(response.data.events)
        setEvents(response.data.events)
      },(error)=>{
        console.log("Erro:", error)
      }
    )
  }

  const listEvents = events.map((event)=> {
    return(
      <TableRow key={event.id_evento}>
        <TableCell align='center'>{event.nome}</TableCell>
        <TableCell align='center'>{event.descricao}</TableCell>
        <TableCell align='center'>{event.data_hora}</TableCell>
        <TableCell align='center'>{event.local}</TableCell>
      </TableRow>
    )
  })

  useEffect(() =>{
    //Aqui devemos criar ou chamar uma função
    getEvents();
  },[]);

  return (
    <div>
      <h4 style={{textAlign:"center"}}>Lista De Eventos</h4>
      <TableContainer component={Paper} style={{margin: "2px"}}>
        <Table size='small'>
          <TableHead style={{background: "#E90066"}}>
            <TableRow >
            <TableCell align='center' style={{color:"white"}}>
                Nome
              </TableCell>
              <TableCell align='center' style={{color:"white"}}>
                Descrição
              </TableCell>
              <TableCell align='center' style={{color:"white"}}>
                Data/Hora
              </TableCell>
              <TableCell align='center' style={{color:"white"}}>
                Local
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEvents}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default App
