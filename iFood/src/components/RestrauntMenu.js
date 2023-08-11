import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_ITEM } from "../utils/constant";

const RestrauntMenu = () => {
  const [resInfo, SetResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchRestraunt();
  }, []);

  const fetchRestraunt = async () => {
    const data = await fetch(MENU_ITEM + resId);
    const json = await data.json();
    // console.log(json);
    SetResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card 

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name} </h1>
      <h3> {cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info.name} - {"Rs " + item?.card?.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
