import React, {useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import  ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
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
      borderColor: '#B9E6F4'
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
  
    const test = <Profile/>
    
    return (
      <>
        <Drawer
          variant = 'permanent'
          anchor='left'
          sx = {{ "& .MuiDrawer-paper": drawerSx.paper }}
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
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
        <Routes>
          <Route path = '/' element = {test}/>
          <Route path = '/teaching' element = {<Teaching/>}/>
          <Route path = '/research' element = {<Research/>}/>
          <Route path = '/certifications' element = {<Certification/>}/>
        </Routes>
      </>
    )
}

export default UserPages