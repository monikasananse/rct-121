import React from "react";
import { Route,Routes } from "react-router-dom";
import TannerGoods from "./TannerGoods";
import MazamaWares from "./MazamaWares";
import FeaturedCollection from "./FeaturedCollection";
import FinalSale from "./FinalSale";
import Navbar from "./Navbar";
import Home from "./Home";

const AllRoutes=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
           
            <Route path="/tannerGoods"element={<TannerGoods/>}/>
            <Route path="/mazamawares" element={<MazamaWares/>}/>
            <Route path="/featuredCollections"element={<FeaturedCollection/>}/>
            <Route path="/finalsale"element={<FinalSale/>}/>

        </Routes>
        <Home/>
        </>
    )
}
export default AllRoutes;