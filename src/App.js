import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import OrderReview from "./Component/OrderReview/OrderReview";
import NotFound from "./Component/NotFound/NotFound";
import Inventory from "./Component/Inventory/Inventory";
import PlaceOrder from "./Component/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/review" element={<OrderReview/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/placeorder" element={<PlaceOrder/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
