import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken=
'pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w'

const Map = () => {

    useEffect(() => {
        const map= new mapboxgl.Map({
          container:"map",
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [77.2090057, 28.6138954],
          zoom: 4
        });

        addToMap(map)
      });

      const addToMap=(map)=>{
        const marker1=new mapboxgl.Marker()
          .setLngLat([76.7041,28.1025])
          .addTo(map);
      }


  return <Wrapper id='map'>

  </Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`