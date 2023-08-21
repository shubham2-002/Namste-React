import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
  const deliveryTime = resData.sla.deliveryTime;
  return (
    <div className="m-4 p-4 w-[260px] bg-green-100 ease-in-out duration-300 rounded-md hover:shadow-md">
      <img
        className="rounded-lg w-60 h-52 object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="info">
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};
// Higer Order Component

//Input RestrauntCarad = ReseTrauntCardOffer

export const withOfferLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute overflow-hidden bg-black text-white px-2 m-2 rounded-md">
          OFFER
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
