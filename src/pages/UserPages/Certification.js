import React, {useState, useEffect, useContext} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import AuthContext from '../../context/AuthContext';

function Certification() {
  let {user} = useContext(AuthContext)
  let {authTokens} = useContext(AuthContext)
  const [data, setData] = useState([])
  console.log(user.access_token)
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/certifications/${user.username}/`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authTokens.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }}
    )
    .then(res => res.json())
    .then(res => console.log(res))
    .then(res => setData(res))
  },[user.username])
  const updateData = () => {

  }

  const button = {
    outer: {
      position: 'absolute',
      bottom: '2rem',
      right: '2rem',
    },
    inner: {
      color: '#686258',
      fontSize: '3rem',
    }
  }

  const table = {
    main: {
      padding: '1rem 0.5rem',
      width: '100%',
    }
  }

  return (
    // <div style = {table.main}>
    //   <TableContainer component = {Paper}>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Title</TableCell>
    //           <TableCell>Date</TableCell>
    //           <TableCell>Agency/Institution Name</TableCell>
    //           <TableCell>Place</TableCell>
    //           <TableCell>File</TableCell>
    //           <TableCell>Action</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {
    //           data.map((row) => (
    //             <TableRow key = {row.title}>
    //               <TableCell>{row.title}</TableCell>
    //               <TableCell>{row.date}</TableCell>
    //               <TableCell>{row.agency_name}</TableCell>
    //               <TableCell>{row.place}</TableCell>
    //             </TableRow>
    //           ))
    //         }
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   <IconButton sx = {button.outer}>
    //     <AddCircleIcon sx = {button.inner}/>
    //   </IconButton>
    // </div>
    <>
      <h1>Certification</h1>
      
    </>
  )
}

export default Certification