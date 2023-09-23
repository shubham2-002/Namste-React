import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const [showidx, setShowidx] = useState(null);
  // console.log(resId);

  const resInfo = useRestrauntMenu(resId);
  if (resInfo === null) return <Shimmer />;

  // console.log(resInfo);
  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);joyisoc353@chambile.com temp mail
  return (
    <div className=" text-center my-10 ">
      <h1 className="font-bold text-2xl my-4">{name} </h1>
      <p className="font-bold text-lg"> {cuisines.join(", ")}</p>
      {/* {catgeoires accordian} */}

      {categories.map((category, index) => {
        const isSectionExpanded = showidx === index;
        return (
          <RestrauntCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index == showidx ? true : false}
            setShowidx={() => setShowidx(isSectionExpanded?null:index)}
          />
        );
      })}
    </div>
  );
};

export default RestrauntMenu;
