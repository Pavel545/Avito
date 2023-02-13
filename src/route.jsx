import { Route, Routes } from "react-router-dom";
import { Article } from "./pages/Article";
import { Gallari } from "./pages/Gallari";
import { SellerProfile } from "./pages/Seller_profile";

export const AppRoutes = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Gallari />} />
      <Route path="/article/:id" element={<Article/>}/>
      <Route path="/seller_profile/:id" element={<SellerProfile/>}/>

    </Routes>
  );
};
