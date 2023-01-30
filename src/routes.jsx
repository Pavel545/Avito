import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/Protectet-eout/Protectet-eout";
import { Article } from "./pages/article";
import { Main } from "./pages/main/main";
import { MyArticle } from "./pages/my-article";
import { Profile } from "./pages/profile";
import { SellerProfile } from "./pages/seller-profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/seller_profile" element={<SellerProfile />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/my_article" element={<MyArticle />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(true)} />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
