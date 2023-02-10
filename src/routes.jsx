import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/Protectet-eout/Protectet-eout";
import { Article } from "./pages/article";
import { Main } from "./pages/main/main";
import { MyArticle } from "./pages/my-article";
import { Profile } from "./pages/profile";
import { SellerProfile } from "./pages/seller-profile";
import { todosSelector } from "./store/selectors/todo";

export const AppRoutes = () => {
  const data = useSelector(todosSelector);

  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/seller_profile/:id" element={<SellerProfile />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/my_article/:id" element={<MyArticle />} />
      <Route element={<ProtectedRoute isAllowed={data.tokens} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
