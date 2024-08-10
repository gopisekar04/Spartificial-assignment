
import './login.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login(){
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        username:"",
        password: ""    
    })
    const handleLogin = () => {
        if(userDetails.username !== "" && userDetails.password !== ""){
         navigate('/')
        }
    }

    return <div className='login-bg-container'>
        <div className='left-container'>
            <img src="https://media.licdn.com/dms/image/v2/C560BAQEbkG7zRstixA/company-logo_200_200/company-logo_200_200/0/1643530921733/spartificial_logo?e=2147483647&v=beta&t=PkCH8gJV2dPZ-rOsshzCjcN9j3en0fP2bOL9_MyRyZ4" alt="logo" className='logo' />            
            <img src='https://spartificial.com/assets/LogoText.png' alt="login-logo" className='login-img' />
        </div>        
        <div className='right-container'>            
            
            <form>
                <h1>Admin   Login</h1>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate 
                autoComplete="off"
                >
                    <TextField onChange={(e)=> setUserDetails({
                        ...userDetails,
                        username: e.target.value
                    })} id="outlined-basic" label="Username" variant="outlined" />
                    <TextField
                    onChange={(e)=> setUserDetails({
                        ...userDetails,
                        password: e.target.value
                    })} 
                        id="outlined-password-input"
                        label="Password"
                        type="password"            
                    />            
                </Box>
                <Button sx={{width: 218}} variant="outlined" onClick={handleLogin}>Login</Button>
            </form>
        </div>
    </div>
}
