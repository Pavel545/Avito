import { Route, Routes } from "react-router-dom";
import { Article } from "./pages/Article";
import { Gallari } from "./pages/Gallari";

export const AppRoutes = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Gallari />} />
      <Route path="/article/:id" element={<Article/>}/>
    </Routes>
  );
};
