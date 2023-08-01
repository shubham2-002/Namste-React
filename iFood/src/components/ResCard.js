import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =    resData;
  const deliveryTime = resData.sla.deliveryTime
  return (
    <div className=" resCard">
      <img className="food-img" src={CDN_URL+cloudinaryImageId} />
      <div className="info">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default ResCard;
