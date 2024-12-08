import React from 'react'
import { Header } from '../components/Header'
import { Form } from '../components/Form'

export const Signup = () => {
  return (
    <>
    <Header/>
    <h1 className='text-center text-5xl mt-5'>sign up</h1>
    <Form isSignup/> 

    </>
 )
}
