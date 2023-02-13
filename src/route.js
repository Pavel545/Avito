import { Route, Routes } from "react-router-dom";
import { Gallari } from "./pages/Gallari";

export const AppRoutes = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Gallari />} />
      
    </Routes>
  );
};
