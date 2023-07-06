import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl"
import Map from "./components/Map"

export default function Home() {
  return (
    <Wrapper>
      <Map/>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper=tw.div`
flex 
flex-col
bg-red-300
h-screen
`
const ActionItems=tw.div`
flex-1
bg-red-300
`