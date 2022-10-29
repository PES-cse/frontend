import { createContext,useState, useEffect } from "react"
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    
    const navigate = useNavigate()

    let login = async (e) => {
        
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })

        
        let data = await response.json()

        if(response.status === 200){
            const decode = jwt_decode(data.access)
            setAuthTokens(data)
            setUser(decode)
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate(`/u/${decode.username}`)
            //history.push('/')
        }else{
            alert('Something went wrong!')
            return
        }
        
    }
    
    let logout = () => {
        setAuthTokens(null)
        setUser(null)
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        login:login,
        // logoutUser:logoutUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

