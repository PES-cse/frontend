import ProfilePhoto from './ProfilePhoto';
import ProfileBody from './ProfileBody';
import Divider from '@mui/material/Divider';

function Profile() {

  const style = {
    container: {
      width: '100%',
      padding: '1em',
    },
    divider: {
      backgroundColor: '#C5DBE2',
    }
  }
  
  return (
    <div style = {style.container}>
      <ProfilePhoto/>
      <Divider variant="fullWidth" sx = {style.divider}/>
      <ProfileBody/>
    </div>
  )
}

export default Profile