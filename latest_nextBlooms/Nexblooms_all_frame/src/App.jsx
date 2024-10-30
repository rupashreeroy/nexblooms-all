import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/login-page";
import SubSubCategories from "./pages/sub-sub-categories";
import RegisterPage from "./pages/register-page";
import SubCategories from "./pages/sub-categories";
import MycartBilling from "./pages/mycart-billing";
import SelectSociety from "./pages/select-society";
import DonationCheckbox from "./pages/donation-checkbox";
import OrderStatus from "./pages/order-status";
import DeliveredOrders from "./pages/delivered-orders";
import OrderReturn from "./pages/order-return";
import ReturnStatus from "./pages/return-status";
import Myorder from "./pages/myorder";
import Contactus from "./pages/contactus";
import HomePage from "./pages/home-page";
import Wishlist from "./pages/wishlist";
import Profile from "./pages/profile";
import EditProfile from "./pages/edit-profile";
import OrderHistory from "./pages/order-history";
import AddNewAddress from "./pages/add-new-address";
import UselocationAddAddress from "./pages/uselocation-add-address";
import ProductDescription from "./pages/product-description";
import ProductReview from "./pages/product-review";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-description":
        title = "";
        metaDescription = "";
        break;
      case "/product-review":
        title = "";
        metaDescription = "";
        break;
      case "/sub-sub-categories":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/sub-categories":
        title = "";
        metaDescription = "";
        break;
      case "/mycart-billing":
        title = "";
        metaDescription = "";
        break;
      case "/select-society":
        title = "";
        metaDescription = "";
        break;
      case "/donation-checkbox":
        title = "";
        metaDescription = "";
        break;
      case "/order-status":
        title = "";
        metaDescription = "";
        break;
      case "/delivered-orders":
        title = "";
        metaDescription = "";
        break;
      case "/order-return":
        title = "";
        metaDescription = "";
        break;
      case "/return-status":
        title = "";
        metaDescription = "";
        break;
      case "/myorder":
        title = "";
        metaDescription = "";
        break;
      case "/contactus":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/wishlist":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/order-history":
        title = "";
        metaDescription = "";
        break;
      case "/add-new-address":
        title = "";
        metaDescription = "";
        break;
      case "/uselocation-add-address":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/product-description"
        element={<ProductDescription />}
      />
      <Route
        path="/product-review"
        element={<ProductReview />}
      />
      <Route path="/sub-sub-categories" element={<SubSubCategories />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/sub-categories" element={<SubCategories />} />
      <Route path="/mycart-billing" element={<MycartBilling />} />
      <Route path="/select-society" element={<SelectSociety />} />
      <Route path="/donation-checkbox" element={<DonationCheckbox />} />
      <Route path="/order-status" element={<OrderStatus />} />
      <Route path="/delivered-orders" element={<DeliveredOrders />} />
      <Route path="/order-return" element={<OrderReturn />} />
      <Route path="/return-status" element={<ReturnStatus />} />
      <Route path="/myorder" element={<Myorder />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/add-new-address" element={<AddNewAddress />} />
      <Route
        path="/uselocation-add-address"
        element={<UselocationAddAddress />}
      />
    </Routes>
    
  );
}
export default App;
