import React, { useEffect, useState } from "react";
import ResCard ,{withOfferLabel }from "./ResCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, json } from "react-router-dom";
import { RESTRAU_LIST } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOfferLabel } from "./ResCard";
import FetchNext from "../utils/getMoreRes"


const Body = () => {
  const [newreList1, setNewreList] = useState([]);
  const [filterRestraunt,SetfilterRestraunt] = useState([]);
  const [search, Setsearch] = useState("");
//  const [loading,setLoading]= useState(false)
  const RescardOffer= withOfferLabel(ResCard) //HIGER ORDER COMPONENT
  // const[page,setPage] = useState(10)
  const searchDish = () => {
    const filteredList = newreList1.filter((res) => res?.info.name.toLowerCase().includes(search.toLowerCase()))
    SetfilterRestraunt(filteredList);
  }

  const LoadMore = async()=>{
    const data =FetchNext()
    console.log(data)
  }
  const fetchData = async () => {
    const data = await fetch(RESTRAU_LIST)
    const json = await data.json()

    // console.log(json)
    setNewreList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    SetfilterRestraunt(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json?.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const onlinestatus= useOnlineStatus()

  if(!onlinestatus){
    return(
    <h1>Looks like Your are offline</h1>
    )
  }
  
  if (newreList1.length === 0) {
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="m-4 p-4 flex justify-center items-center">{/*search*/}
        <input className=" border-b-2 border-blue-300 focus:bg-blue-50 py-1 px-4 w-64" placeholder="search your local restarunt" onChange={(e) => Setsearch(e.target.value)} />
        <button
          className="px-4 bg-green-100 py-1 hover:bg-green-200 mx-8 rounded-lg"
          onClick={() => {
            const filteredList = newreList1.filter((res) => res?.info.avgRating > 4)
            SetfilterRestraunt(filteredList);

          }}
        >
          Top Rated Restaurants
        </button>
        <button className=" rounded-lg px-4 bg-green-100 py-1 hover:bg-green-200" onClick={()=>searchDish()}>Search</button>
      </div>
      <div className="flex flex-wrap">
        {filterRestraunt.map((restr) => (

          // <ResCard  resData={...restr.info} key ={restr.info.id}/>
          <Link key={restr.info.id} to={"/restraunt/"+restr.info.id}>
            {Object.hasOwn(restr?.info,'header')?
            (<RescardOffer resData={...restr.info}/>
            ) : (
            <ResCard resData={...restr.info}/>
            )}
          </Link>     
        ))}
        <div>
          <button className="bg-black" onClick={()=>LoadMore()}>MORE</button>
        </div>
      </div>
    </div>
  );
};
export default Body;
