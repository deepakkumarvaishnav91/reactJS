#learning ReactJS


#parcel
 - Dev Build
 - Local Server
 - HMR - Hot Module Replacement -> allows you to update parts of your application without a full reload of the entire page.
 - File Watching Algorithm - written in C++
 - Caching - faster builds
 - image optimaztion
 - minification of files
 - Bundling
 - compression : compress the files
 - Consistent Hashing 
 - code splitting
 - Differential bundling - to support older browsers or different browsers
 - Diagonstic 
 - Error handling
 - HTTPS
 - Tree shaking : remove unused code
 - Different dev and production bundles
 - 

food ordering app

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
 ** /

 /* . const RestaurantCard = ( {resName, cuisine} ) => {    } - you can write like this. this is call destructuring of objects
*/

Two types of export/import 
  - default export - one file can have only one default export
        - export default component_name;
        - import component_name from "path";
  - Named export/import
        - export const component_name;
        - import {component_name} from "path"

# React Hooks
 (normal JS utility functions)
 - useState() - to create state variables in react
 - useEffect() - 