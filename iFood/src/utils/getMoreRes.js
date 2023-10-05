import { useState } from "react";

const FetchNext =async()=>{  
  try {
    const response = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update',
      {
        method: 'POST', // Use POST for fetching more restaurants
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers here
        },
        body: JSON.stringify({
          lat: 18.5204303,
          lng: 73.8567437,
          nextOffset: 'COVCELQ4KID4ruup+9+KczCnEzgD', // Use the correct nextOffset value
          // Other payload parameters if needed
          seoParams: {
            apiName: "FoodHomePage",
            pageType: "FOOD_HOMEPAGE",
            seoUrl: "https://www.swiggy.com/",
          },
          widgetOffset: {
            // Include your widgetOffset values here
            NewListingView_Topical_Fullbleed: '',
            NewListingView_category_bar_chicletranking_TwoRows: '',
            NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(15),
          },
        }),
      }
    );
    const data = await response.json();
       console.log(data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
  //   if (allRestaurants) {

  //     let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

  //     setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
  //     setAllRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
  //   }
  } catch (error) {
    console.error('Error fetching restaurants:', error);
  } finally {
    // Setloading(false);
    // setPage((prev)=>prev+15)
  }

}

export default FetchNext