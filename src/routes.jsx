import { Route, Routes } from "react-router-dom";
import { Article } from "./pages/article";
import { Main } from "./pages/main/main";
import { MyArticle } from "./pages/my-article";
import { Profile } from "./pages/profile";
import { SellerProfile } from "./pages/seller-profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/seller_profile" element={<SellerProfile/>} />
      <Route path="/article" element={<Article/>} />
      <Route path="/my_article" element={<MyArticle/>} />




    </Routes>
  );
};
