import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
const confirm = () => {

    // const[pickupCoordinates,setPickupCoordinates]=useState()
    // const[dropoffCoordinates,setDropoffCoordinates]=useState()

    // const getPickupCoordinates=()=>{
    //     const pickup="Santa Monica";
    //     //fetch api
    //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`,+
    //         newURLSearchParams({
    //             access_token:"pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w",
    //             limit:1
    //         }) 
    //     )
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data.features[0].center)
    //         setPickupCoordinates(data.features[0].center)
    //     })

    //     const getDropoffCoordinates=()=>{
    //         const dropoff="Los Angles";
    //     //fetch api
    //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`,+
    //         newURLSearchParams({
    //             access_token:"pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w",
    //             limit:1
    //         }) 
    //     )
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log("Dropoff")
    //         console.log(data.features[0].center)
    //         setDropoffCoordinates(data.features[0].center)
    //     })
    //     }

    //     useEffect(()=>{
    //         getPickupCoordinates();
    //         getDropoffCoordinates();
    //     },[])
    // }
//-------------------------------------------------------------------
    // const getCoordinates=()=>{
    // const pickup="Santa Monica";
    //     //fetch api
    //     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`,+
    //         newURLSearchParams({
    //             access_token:"pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w",
    //             limit:1
    //         }) 
    //     )
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //     })
    //     }

    //     useEffect(()=>{
    //         getCoordinates();
    //     },[])
    //--------------------------------------------------------------------
    // const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Market%20Street%20and%20Fremont%20Street.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w"
    // const [user, setUser] = useState([]);

    // const fetchData = () => {
    //   return fetch(url)
    //         .then((data)=>{
    //             console.log(data)
    //         })
    //         .then((response) => response.json())
    //         .then((data) => setUser(data));
    // }
  
    // useEffect(() => {
    //   fetchData();
    // },[])
  //------------------------------------------------------------------------------
  const callAPI = async () => {
    try {
        const res = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FoaWwwMDIiLCJhIjoiY2xqcHFnbjVjMDF5NTNscWlyMmVzYzY1eiJ9.IbTLWNhg82wVbnnwXosZ9w`,
            {
                method: 'GET',
            }
        );
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
useEffect(()=>{
    callAPI();
},[])
  
    return (
    <Wrapper>
        <Map/>
        <RideContainer>
            Ride Selector
            confirm button
            {/* {pickupCoordinates}
            {dropoffCoordinates} */}
        </RideContainer>
    </Wrapper>
  )
}

export default confirm

const Wrapper=tw.div`
flex
h-screen
flex-col
`
const RideContainer=tw.div`
flex
flex-1
`