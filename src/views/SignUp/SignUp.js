import { useState } from "react"
import Button from "../../components/Button/Button"
import TextForm from "../../components/InputForm/TextForm"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


function SignUp(){
    const navigate = new useNavigate()
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phoneNumber : '',
        password : '',
        confirmPassword : ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const jsoBodyn = JSON.stringify({
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password
          })
          try{
            const response = await axios.post("http://localhost:7777/api/v1/auth/register", jsoBodyn,
            {headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
            }})
            if(response.status === 200){
                navigate('/login')
            }
        } catch(err){
        }
    }

    const handleInput = (event) =>{
        setUser({...user,[event.target.name] : event.target.value})
    }

    var loginUrl = "/login"

    return(
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center'>
            <form className="flex flex-col justify-center items-center gap-6 lg:pl-20 lg:pr-20 lg:min-h-screen" onSubmit={handleSubmit}>
                <Link className='text-center lm:text-4xl text-2xl font-bold' to='/'>CariAnabul</Link>
                <div className="flex flex-col gap-2.5">
                    <TextForm type='text' name='email' placeholder='Email' value={user.email} onChange={handleInput}></TextForm>
                    <TextForm type='text' name='fullName' placeholder='Full Name' value={user.fullName} onChange={handleInput}></TextForm>
                    <TextForm type='text' name='phoneNumber' placeholder='Phone Number' value={user.phoneNumber} onChange={handleInput}></TextForm>
                    <TextForm type='password' name='confirmPassword' placeholder='Password' value={user.password} onChange={handleInput}></TextForm>
                    <TextForm type='password' name='password' placeholder='Confirm Password' value={user.confirmPassword} onChange={handleInput}></TextForm>
                </div>
                <Button buttonText='Sign In'></Button>
                <p className='text-dark-charcoal font-light'>Have an account? <a href={loginUrl} className='text-black font-medium'>Login</a></p>
            </form>
        </div>
    )
}

export default SignUp