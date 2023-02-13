import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AppRoutes } from "../../route";
import "./style.scss"

export function Content() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <AppRoutes/>
        <Footer />
      </div>
    </div>
  );
}
