import { useState } from 'react'
import axios from 'axios'
import TextForm from '../../components/InputForm/TextForm'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'



function Auth() {
    const navigate = new useNavigate()
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState({
        email : '',
        password : ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = user.email
        const password = user.password

        const json = JSON.stringify({
            email: email,
            password: password
          })
        try{
            const response = await axios.post("http://localhost:7777/api/v1/auth/login", json,
            {headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }})
            if(response.status !== 200){
                setIsError(true)
            } else{
                navigate('/')
            }
        } catch(err){
            setIsError(true)
        }
        
        
        
    }

    const handleInput = (event) =>{
        setUser({...user,[event.target.name] : event.target.value})
    }

    const renderErrorMessage = () => {
        if (isError === true) return  (<p className=' text-giants-orange text-sm font-medium'>Wrong Username/Password!</p>)
    }
    
    var signInUrl ="/signup"

    return(
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center'>
            <form className="flex flex-col justify-center items-center gap-6 lg:pl-20 lg:pr-20 lg:min-h-screen" onSubmit={handleSubmit}>
                <Link className='text-center lm:text-4xl text-2xl font-bold' to='/'>CariAnabul</Link>   
                <div className="flex flex-col gap-2.5">
                    <TextForm type='text' name='email' placeholder='Email' value={user.email} onChange={handleInput}></TextForm>
                    <TextForm type='password' name='password' placeholder='Password' value={user.password} onChange={handleInput}></TextForm>
                </div>
                <Button buttonText='Sign In'></Button>
                {renderErrorMessage()}
                <p className='text-dark-charcoal font-light'>Don't have an account? <a href={signInUrl} className='text-black font-medium'>Sign Up</a></p>
            </form>
        </div>
    )
}

export default Auth;