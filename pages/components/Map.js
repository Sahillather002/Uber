import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken=
'pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w'

//we use props for the data that is comming from confirm page
//of 2 coordinates to put pointers inside our map
const Map = (props) => {
    // console.log(props)
    useEffect(() => {
        const map= new mapboxgl.Map({
          container:"map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [77.2090057, 28.6138954],
          zoom: 4
        });

        if(props.pickupCoordinates){
          addToMap(map,props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
          addToMap(map,props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
          map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
          ],{
            padding:60
          })
        }
      },[props.pickupCoordinates,props.dropoffCoordinates]);

      
      const addToMap=(map,coordinates)=>{
        const marker1=new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
      }

  return <Wrapper id='map'>

  </Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`