import React, { useEffect,useContext,useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import no_profile_photo from '../../../assets/images/no_profile_photo.png'
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Buffer} from 'buffer'

function ProfilePhoto() {
	let {user} = useContext(AuthContext)
	let {authTokens} = useContext(AuthContext)
	
	const style = {
		container: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom: '1em',
		},
		image: {
			borderRadius: '50%',
			height: '150px',
			width: '150px',
			boxShadow: 'rgba(0, 0, 0, 0.5) 3px 5px 15px',
		},
		imgDiv: {
			position: 'relative',
		},
		addBtnDiv: {
			position: 'absolute',
			bottom: '0',
			right: '0',
		},
		addBtn: {
			color: '#B9E6F4',
			fontSize: '3rem',
		}
	}

	const [image, setImage] = useState(null)

	useEffect(() => {
		const fetchImage = async () => {
			const response = await fetch((`http://127.0.0.1:8000/users/${user.username}/profile_photo`),{
				method: 'GET',
				headers:{
					'Content-Type': 'application/json',
          			'Authorization': `Bearer ${authTokens.access_token}`
				}
			})
			if(response.status === 200){
				const imageBlob = await response.blob()
				const imageObjectURL = URL.createObjectURL(imageBlob)
    			setImage(imageObjectURL)
			}
			else
				console.log('Error' + response.status)
			
		}
		fetchImage()
	}, [user.username,authTokens.access_token])

	const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

	let handleAddPhoto = async (e) => {
		e.preventDefault()
		const file = e.target.files[0]
    	const base64 = await convertToBase64(file)
		let formData = new FormData()
		formData.append('username', user.username)
		formData.append('file', file)
		for (const value of formData.values()) {
			console.log(value)
		}
		let response = await fetch(`http://127.0.0.1:8000/users/${user.username}/profile_photo`,{
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': `Bearer ${authTokens.access_token}`
			},
			body: formData,
			
	})
	}
	return (
		<div style ={style.container}>
			<div style = {style.imgDiv}>
				<img src={image ? image : no_profile_photo} alt = "Profile" style={style.image}/>
				<div style = {style.addBtnDiv}>
					<IconButton aria-label="upload picture" component="label">
						<input hidden accept="image/*" type="file" onChange={(e) => handleAddPhoto(e)}/>
						<AddCircleIcon style={style.addBtn}/>
					</IconButton>
				</div>	
			</div>
		</div>
  )
}

export default ProfilePhoto