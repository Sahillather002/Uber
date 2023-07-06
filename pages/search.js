import React from 'react'
import tw from "tailwind-styled-components"

const search = () => {
  return (
    <Wrapper>
        <ButtonContainer>
            <BackButton src="https://icon-library.com/images/arrow-button-icon/arrow-button-icon-8.jpg"/>
        </ButtonContainer>

        <InputContainer>
        <FromToIcons>
            <Circle src="https://img.icons8.com/?size=512&id=rcalyqMF4oIe&format=png"/>
            <Line src="https://img.icons8.com/?size=512&id=118831&format=png"/>
            <Square src="https://img.icons8.com/?size=512&id=12946&format=png"/>
        </FromToIcons>

        <InputBoxes>
        <Input placeholder='  Enter a pickup location'/>
        <Input placeholder='  Where you want to go'/>
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/?size=512&id=3220&format=png"/>
        </InputContainer>
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
px-4

`
const BackButton=tw.img`
h-12
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