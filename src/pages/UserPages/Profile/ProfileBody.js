import React, { useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useContext } from 'react';
import { color } from '@mui/system';

function ProfileBody() {

  let {user} = useContext(AuthContext)
  let {authTokens} = useContext(AuthContext)
  const [data, setData] = useState([])
  
  const style = {
    container: {
      padding: '1rem 5rem',
    },
    dataContent:{
      display: 'flex',
      justifyContent: 'space-between',
    }
  }

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`http://127.0.0.1:8000/users/${user.username}/`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access_token}`
      }})
      if(response.status === 200){  
        const data = await response.json()
        setData(data)
      }
      else
        console.log('Error ' + response.status)
    }
    fetchData()
  }, [user.username, authTokens.access_token])

  return (
    <div style = {style.container}>
      <div style={style.dataContent}><h3 style = {{marginTop:38, padding:'0.25rem 0'}}>Name</h3><h3 style = {{marginTop: 38, padding: '0.25rem 0', color:'#0000FF'}}>{data.username}</h3> </div>
      <div style={style.dataContent}><h3 style = {{marginTop:38, padding:'0.25rem 0'}}>Email</h3><h3 style = {{marginTop: 38, padding: '0.25rem 0', color:'#0000FF'}}>{data.email}</h3></div>
      <div style={style.dataContent}><h3 style = {{marginTop:38, padding:'0.25rem 0'}}>Department</h3><h3 style = {{marginTop: 38, padding:'0.25rem 0', color:'#0000FF'}}>{data.department}</h3></div>
      <div style={style.dataContent}><h3 style = {{marginTop:38, padding:'0.25rem 0'}}>Joined Date</h3><h3 style={{marginTop: 38, padding:'0.25rem 0', color:'#0000FF'}}>{data.joineddate}</h3></div>
      <div style={style.dataContent}><h3 style = {{marginTop:38, padding:'0.25rem 0'}}>Qualification</h3><h3 style={{marginTop: 38, padding:'0.25rem 0', color:'#0000FF'}}>{data.qualification}</h3></div>
      <div style={style.dataContent}><h3 style = {{marginTop:38, padding:'0.25rem 0'}}>Employee Number</h3><h3 style={{marginTop:  38, padding:'0.25rem 0', color:'#0000FF'}}>{data.emplyoeenumber}</h3></div>

    </div>
  )
}

export default ProfileBody