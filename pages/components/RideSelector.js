import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'
const RideSelector = () => {
  
  const [rideDuration,setrideDuration]=useState(0)
  //getting ride duration from mapbox api
  useEffect(()=>{
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[0]};${dropoffCoordinates[0]},${dropoffCoordinates}`)
  },[])
  return (
    <Wrapper>
        <Title>
            Choose a ride, or swipe up for more!
        </Title>
        <CarList>
            {/* {carList.map((car,index)=>{
              <Car key={index}>
                <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                <CarDetails>
                    <Service>{car.service}</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$20.00</Price>
            </Car>  
            })} */}
            <Car>
                <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                <CarDetails>
                    <Service>UberX</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$20.00</Price>
            </Car> 

            <Car>
                <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png"/>
                <CarDetails>
                    <Service>UberXL</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$20.00</Price>
            </Car>

            <Car>
                <CarImage src="https://i.ibb.co/Xx4G91m/uberblack.png"/>
                <CarDetails>
                    <Service>Black</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$20.00</Price>
            </Car>

            <Car>
                <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                <CarDetails>
                    <Service>Comfort</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$20.00</Price>
            </Car>

            <Car>
                <CarImage src="https://i.ibb.co/1nStPWT/uberblacksuv.png"/>
                <CarDetails>
                    <Service>Black SUV</Service>
                    <Time>5 min away</Time>
                </CarDetails>
                <Price>$20.00</Price>
            </Car>

        </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper=tw.div`
flex-1
overflow-y
flex
flex-col
`
const Title=tw.div`
text-gray-500
text-center
text-s
py-2
`
const CarList=tw.div`
overflow-y-scroll
`
const Car=tw.div`
flex
p-2
items-center
`
const CarImage=tw.img`
h-14
mr-4
`
const CarDetails=tw.div`
flex-1
`
const Service=tw.div`
font-medium
`
const Time=tw.div`
text-xs
text-blue-500
`
const Price=tw.div`
text-sm
`