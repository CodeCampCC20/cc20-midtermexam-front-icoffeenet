import React, { useState } from 'react'
import {toast} from 'react-toastify'
import * as Yup from "yup"
import { schemaLogin, schemaRegister } from '../validate/schemaLogin';
import {Send} from 'lucide-react';
import {Loader} from 'lucide-react';
import InputForm from '../components/form/InputForm';
import { useNavigate } from 'react-router';
import authApi from '../api/authApi';

const initialInput ={
  username: "",
  password: "",
  confirmPassword: ""
};
function LoginPage() {
  const [input,setInput] = useState(initialInput);
  const [inputError,setInputError] = useState(initialInput);
  const [isLoading,setIsLoading] =useState(false)
  const navigate = useNavigate()

  const handleChange= (e) =>{
    const{id,value} = e.target
    setInput(prev=> ({...prev, [id]:value}))
    setInputError(prev=> ({...prev, [id]:""}))
    
  }
  const handleSubmit = async(e)=>{
    try{
      e.preventDefault()
      setIsLoading(true)
      console.log(input)
       

      schemaRegister.validateSync(input, {abortEarly: false})

      const res = await authApi.register(input)
      console.log("res.data",res.data)

      setInput(initialInput)
      navigate('/');

      toast.success("Login success!!!")
    }catch(error){
      console.log(error)
      toast.error("Login invalid !!!")
      if(error instanceof Yup.ValidationError){
        const err = error.inner.reduce((acc,cur)=>{
          acc[cur.path]=cur.message;
          return acc;
        },{})
        setInputError(err);
      }
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <div className='p-8 bg-base-700'>
     <div className='w-2/5 border rounded-3xl p-8 mx-auto my-40'>
      <h1 className='text-2xl font-bold mb-4'>Welcome</h1>
      <form className='space-y-4'
      onSubmit={handleSubmit}>
        <InputForm
          id="username" 
          placeholder="Username"
          handleChange={handleChange} 
          error={inputError.username}
          value={input.username}
          text = "Username"
          />
        <InputForm
          id="password" 
          placeholder="Password"
          handleChange={handleChange} 
          error={inputError.password}
          value={input.password}
          type='password'
          text = "Password"
          />
         <InputForm
          id="confirmPassword" 
          placeholder="Confirm Password"
          handleChange={handleChange} 
          error={inputError.confirmPassword}
          value={input.confirmPassword}
          type='password'
          text = "confirmPassword"
          />
        <button className='w-full mt-8 py-2 bg-gray-700 hover:bg-blue-400 duration-200 rounded-xl flex items-center justify-center gap-1'>
          {isLoading ?
            <>
            <Loader className='w-5 h-5 animate-spin font-medium text-white'/>
            <span>Loading...</span>
            </>
            : 
            <>
            <Send className='w-5 h-5 text-white'/>
            <span className='font-medium text-white'>Submit</span>
            </>
            }
        </button>
      </form>
      
     </div>
    </div>
  )
}

export default LoginPage