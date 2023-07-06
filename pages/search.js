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

p-2
`
const FromToIcons=tw.div`
w-10
flex
flex-col
`
const Circle=tw.img`
h-12
`
const Line=tw.img`
h-12
`
const Square=tw.img`
h-12
`