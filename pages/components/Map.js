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
          style: 'mapbox://styles/mapbox/dark-v11',
          center: [78.7041,22.1025],
          zoom: 4
        });
      });

      
  return <Wrapper id='map'>

  </Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`