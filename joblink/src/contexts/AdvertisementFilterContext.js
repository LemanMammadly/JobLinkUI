import {  createContext, useState } from "react";

const AdvertisementFilterContext = createContext();

export const AdvertisementFilterProvider = ({children})  => {
    const [filterDate,setFilterDate] = useState("");
    const [filterSalary,setFilterSalary] = useState("");
    const [filterSort,setFilterSort] = useState("");
    const [filterArea,setFilterArea] = useState("");

    return(
        <AdvertisementFilterContext.Provider value={{filterDate,setFilterDate,filterSalary,setFilterSalary,filterSort,setFilterSort,filterArea,setFilterArea}}>
            {children}
        </AdvertisementFilterContext.Provider>
    )
}

export default AdvertisementFilterContext;