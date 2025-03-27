import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, cloudinaryImageId} = resData?.info;   /* destructuring */
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}</h5>
            <h5>{ sla.slaString}</h5>
        </div>
    )
}

export default RestaurantCard;