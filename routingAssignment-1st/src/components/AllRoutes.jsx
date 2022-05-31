import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from './Products';
import ProductsDetails from "./ProductsDetails";

const AllRoutes=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path={"/"}element={<Home/>}/>
            <Route path={"/products"}element={<Products/>}/>
            <Route path="/products/:id" element={<ProductsDetails/>}/>
        </Routes>
        </>
    )
}
export default AllRoutes;