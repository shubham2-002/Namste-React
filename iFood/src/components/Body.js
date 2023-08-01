import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {


  const [newreList1, setNewreList] = useState([]);
  const [filterRestraunt,SetfilterRestraunt] = useState([]);
  const [search, Setsearch] = useState("");

  const searchDish = () => {
    const filteredList = newreList1.filter((res) => res?.info.name.toLowerCase().includes(search.toLowerCase()))
    SetfilterRestraunt(filteredList);
  }
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8761653&lng=75.3433139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()

    console.log(json)
    setNewreList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    SetfilterRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (newreList1.length === 0) {
    return <Shimmer />
  }
  return (
    <div className="body">
      <div className="search">
        <input className="search-bar" placeholder="search your local restarunt" onChange={(e) => Setsearch(e.target.value)} />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = newreList1.filter((res) => res?.info.avgRating > 4)
            SetfilterRestraunt(filteredList);

          }}
        >
          Top Rated Restaurants
        </button>
        <button className="ser-btn" onClick={searchDish}>Search</button>
      </div>
      <div className="card-Container">
        {filterRestraunt.map((restr) => (
          <ResCard key={restr.info.id} resData={...restr.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;