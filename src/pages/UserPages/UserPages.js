import React, {useContext,useState} from 'react'
import AuthContext from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import  ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile/Profile'
import Teaching from './Teaching'
import Research from './Research'
import Certification from './Certification'

function UserPages() {
  
  let {user} = useContext(AuthContext)
  let {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const drawerWidth = 240
  const style = {
    drawer: {
      paper: {
        width: drawerWidth,
        backgroundColor: '#B9E6F4',
        borderColor: '#B9E6F4',
      },
      text:{
        color: '#686258',
        fontWeight: '100',
      }
    },
    rightQuadrant:{
      position: 'absolute',
      top: 0,
      right: 0,
      width: '15em',
      height: '10em',
      backgroundColor: '#B9E6F4',
      borderRadius: '0 0 0 100%',
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
      <>
        <Box sx = {{display: 'flex'}}>
          <Drawer
            variant = 'permanent'
            anchor='left'
            sx = {{
              width: drawerWidth,
              flexShrink: 0,
              boxSizing: 'border-box',
              "& .MuiDrawer-paper": style.drawer.paper }}
          >
            <List>
              {menuItems.map(item => (
                <ListItem
                  key = {item.text}
                  button
                  onClick = {() => navigate(item.path)}
                ><ListItemText primary = {item.text} sx = {style.drawer.text}/></ListItem>
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
        <div style = {style.rightQuadrant}></div>
      </>
    )
}

export default UserPages