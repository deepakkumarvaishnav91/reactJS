import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo component
 *  - Nav items
 *  - cart
 * Body
 *  - Search
 *  - RestaurantContainer
 *    -- restaurantCard
 *      -- img
 *      -- name of restaurant , Star rating, cuisine, delivery time
 *     
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const resObj = {
    "info": {
      "id": "686202",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Raj Nagar",
      "areaName": "VVIP Style Mall",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "61955",
      "avgRatingString": "4.2",
      "totalRatingsString": "887",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-05 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Momos.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Momos.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/noida/chinese-wok-raj-nagar-vvip-style-mall-rest686202",
      "type": "WEBLINK"
    }
  }

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId }/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.sla.slaString}</h5>
        </div>
    )
}
/* . const RestaurantCard = ( {resName, cuisine} ) => {    } - you can write like this. this is call destructuring of objects
*
* 
*/



const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                   resData = {resObj} 
                    />
               <RestaurantCard 
                   resData = {resObj} 
                    /> 
            </div>

        </div>

    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <AppLayout /> );