import React, { useEffect, useState } from "react";
import ResCard ,{withOfferLabel }from "./ResCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, json } from "react-router-dom";
import { RESTRAU_LIST } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOfferLabel } from "./ResCard";



const Body = () => {
  const [newreList1, setNewreList] = useState([]);
  const [filterRestraunt,SetfilterRestraunt] = useState([]);
  const [search, Setsearch] = useState("");
  const [page,setPage]= useState(25)
  const [data, Setdata] = useState([]);
  const[menucard,Setmenucard]= useState()

//  const [loading,setLoading]= useState(false)
  const RescardOffer= withOfferLabel(ResCard) //HIGER ORDER COMPONENT
  // const[page,setPage] = useState(10)
  const searchDish = () => {
    const filteredList = newreList1.filter((res) => res?.info.name.toLowerCase().includes(search.toLowerCase()))
    SetfilterRestraunt(filteredList);
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

  //Fetch Netxt 15
const fetchNext=async ()=>{
  try {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST", // Use POST for fetching more restaurants
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers here
        },
        body: JSON.stringify({
          lat: 18.5204303,
          lng: 73.8567437,
          nextOffset: "COVCELQ4KID4ruup+9+KczCnEzgD", // Use the correct nextOffset value
          // Other payload parameters if needed
          seoParams: {
            apiName: "FoodHomePage",
            pageType: "FOOD_HOMEPAGE",
            seoUrl: "https://www.swiggy.com/",
          },
          widgetOffset: {
            // Include your widgetOffset values here
            NewListingView_Topical_Fullbleed: "",
            NewListingView_category_bar_chicletranking_TwoRows: "",
            NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
              String(page),
          },
        }),
      }
    );
    Setdata( await response.json())
    console.log(data)
    Setmenucard(
      data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants)

      if (newreList1) {

        let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

        SetfilterRestraunt((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        setNewreList((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
      }
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  } finally {
    // Setloading(false);
    setPage(page+15)
  }
}





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
      </div>
        <div className="flex justify-center m-8">
          <button className=" px-6 py-2 rounded-md tex
           bg-green-300 active:bg-transparent
            active:text-black hover:outline  
            " onClick={()=>fetchNext()}>MORE</button>
        </div>
    </div>
  );
};
export default Body;
