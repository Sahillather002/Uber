import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../firebase'

const login = () => {

    const router=useRouter()
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                router.push('/')//home page i.e index.js
            }
        })
    },[])

  return (
    <Wrapper>
        <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png"/>
        <Title>Log in to access you account</Title>
        <HeadImg src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <SignInButton onClick={()=>signInWithPopup(auth,provider)}>
            Sign in with Google
        </SignInButton>
    </Wrapper>
  )
}

export default login

const Wrapper=tw.div`
flex
flex-col
h-screen
w-screen 
bg-gray-200
p-4
`
const SignInButton=tw.button`
bg-black
text-white
text-center
py-4
mt-8
self-center
w-full
cursor-pointer
rounded-2xl
`
const UberLogo=tw.img`
h-20
w-auto
object-contain
self-start
`
const Title=tw.div`
text-5xl
pt-4
text-gray-500
`
const HeadImg=tw.img`
h-screen
`