import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import  ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Teaching from './Teaching'
import Research from './Research'
import Certification from './Certification'

function UserPages() {
  
  let {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const drawerSx = {
    paper: {
      width: 240,
      backgroundColor: '#B9E6F4',
      borderColor: '#B9E6F4',
    }
  }  
  
  const menuItems = [
    {
      text: 'My Profile',
      path: `/u/${user.username}/`
    },
    {
      text: 'Teaching',
      path: `/u/${user.username}/teaching`
    },
    {
      text: 'Projects',
      path: `/u/${user.username}/projects`
    },
    {
      text: 'Research',
      path: `/u/${user.username}/research`
    },
    {
      text: 'Certifications',
      path: `/u/${user.username}/certifications`
    },
    {
      text: 'Leave',
      path: `/u/${user.username}/leave`
    }
  ]
  
    return (
      <Box sx = {{display: 'flex'}}>
        <Drawer
          variant = 'permanent'
          anchor='left'
          sx = {{width: drawerSx.paper,flexShrink: 0,boxSizing: 'border-box', "& .MuiDrawer-paper": drawerSx.paper }}
        >
          <List>
            {menuItems.map(item => (
              <ListItem 
                key = {item.text}
                button
                onClick = {() => navigate(item.path)}
              ><ListItemText primary = {item.text}/></ListItem>
            ))}
          </List>
        </Drawer>
          <Routes>
            <Route path = '/' element = {<Profile/>}/>
            <Route path = '/teaching' element = {<Teaching/>}/>
            <Route path = '/research' element = {<Research/>}/>
            <Route path = '/certifications' element = {<Certification/>}/>
          </Routes>
      </Box>
    )
}

export default UserPages