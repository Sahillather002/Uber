import tw from "tailwind-styled-components"
import mapboxgl from "mapbox-gl"
import Map from "./components/Map"

export default function Home() {
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
          <UberLogo src="https://links.papareact.com/gzs"/>
        
        <Profile>
          <Name>Sahil</Name>
          <UserImage src="https://avatars.githubusercontent.com/u/72077931?v=4"/>
        </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper=tw.div`
flex flex-col bg-white-300 h-screen
`
const ActionItems=tw.div`
flex-1
p-4
`
const Header=tw.div`
flex 
justify-between
items-center
`
const Profile=tw.div`
flex
items-center
`
const Name=tw.div`
w-16
`
const UserImage=tw.img`
h-16
w-16
animate-pulse
border border-gray-200 
transition-transform	
rounded
shadow-xl
`
const UberLogo=tw.img`
h-8
`