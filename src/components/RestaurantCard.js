import { CDN_IMG_URL } from "../../Config";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, areaName }) => {
  return (
    <div className="card">
      <img src={CDN_IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
