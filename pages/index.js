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

        <ActionButtons>

          <ActionButton>
          <ActionButtonImage src="https://links.papareact.com/3pn"/>
            Ride
          </ActionButton>

          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels
          </ActionButton>

          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserve
          </ActionButton>

        </ActionButtons>

        <InputButton>
        Where to?
        </InputButton>

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
const ActionButtons=tw.div`
flex
m-2

`
const ActionButton=tw.div`
flex
bg-gray-200
flex-1
m-1
h-40
shadow-xl
items-center
flex-col
justify center
rounded-lg transform
hover:scale-105
transition-colors
duration-700
`
const ActionButtonImage=tw.img`
h-4/5
`
const InputButton=tw.div`
h-20 
bg-gray-200
shadow-xl
transition-colors
text-2xl
p-4
flex items-center
mt-4
`