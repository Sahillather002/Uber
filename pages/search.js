import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
const search = () => {

  const[pickup,setpickup]=useState("");
  const[dropoff,setdropoff]=useState("");

  console.log(pickup)

  return (
    <Wrapper>
        <ButtonContainer>
            <Link href='/'>
            <BackButton src="https://icon-library.com/images/arrow-button-icon/arrow-button-icon-8.jpg"/>
            </Link>
        </ButtonContainer>

        <InputContainer>
        <FromToIcons>
            <Circle src="https://img.icons8.com/?size=512&id=rcalyqMF4oIe&format=png"/>
            <Line src="https://img.icons8.com/?size=512&id=118831&format=png"/>
            <Square src="https://img.icons8.com/?size=512&id=12946&format=png"/>
        </FromToIcons>

        <InputBoxes>
        <Input 
        placeholder='  Enter a pickup location'
        value={pickup}
        onChange={(e)=>setpickup(e.target.value)}
        />
        <Input 
        placeholder='  Where you want to go'
        value={dropoff}
        onChange={(e)=>setdropoff(e.target.value)}
        />
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/?size=512&id=3220&format=png"/>
        </InputContainer>

        <SavedPlaces>
            <StarIcon src="https://img.icons8.com/?size=512&id=44053&format=png"/>
            SavedPlaces
        </SavedPlaces>

        <Link href={{
          pathname:"/confirm",
          query:{
            pickup:pickup,
            dropoff:dropoff
          }
        }}>
        <ConfirmButton>
          Confirm Locations
        </ConfirmButton>
        </Link>

    </Wrapper>
  )
}

export default search

const Wrapper=tw.div`
bg-gray-200
h-screen

`
const ButtonContainer=tw.div`
h-12
bg-white
px-2
py-2
`
const BackButton=tw.img`
h-10
cursor-pointer
`
const InputContainer=tw.div`
bg-white
flex
items-center
p-2
`
const FromToIcons=tw.div`
w-10
flex
flex-col
items-center
`
const Circle=tw.img`
h-2.5
`
const Line=tw.img`
h-12
`
const Square=tw.img`
h-3
`
const InputBoxes=tw.div`
flex
flex-col
flex-1

`
const Input=tw.input`
h-10 
bg-gray-200
my-2
rounded-2xl
p-2
outline-none
border-none
`
const PlusIcon=tw.img`
h-12
w-12
bg-gray-200
rounded
ml-3

`
const SavedPlaces=tw.div`
flex
items-center
bg-white
px-2
py-2
`
const StarIcon=tw.img`
h-12
w-12
p-2
mr-2
`
const ConfirmButton=tw.div`
bg-black
text-white
text-center
m-2
p-2
cursor-pointer

`