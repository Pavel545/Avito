import { Footer } from "../../components/Footer";
import { AppRoutes } from "../../route";

export function Content() {
  return (
    <div className="wrapper">
      <div className="container">
        
        <AppRoutes/>
        <Footer />
      </div>
    </div>
  );
}
