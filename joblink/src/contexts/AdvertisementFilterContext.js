import {  createContext, useState } from "react";

const AdvertisementFilterContext = createContext();

export const AdvertisementFilterProvider = ({children})  => {
    const [filterValue,setFilterValue] = useState("");

    return(
        <AdvertisementFilterContext.Provider value={{filterValue,setFilterValue}}>
            {children}
        </AdvertisementFilterContext.Provider>
    )
}

export default AdvertisementFilterContext;