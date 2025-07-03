import "./App.css";
import NewsBoard from "./components/render-list-01/NewsBoard";
import ProductList from "./components/render-list-04/ProductList";
import ButtonGroup from "./components/state-01/ButtonGroup";
import DealOfTheDay from "./components/render-list-05/DealOfTheDay";
import Rating from "./components/state-02";
import ViewedProduct from "./components/state-03/ViewedProduct";
import DropDownFilter from "./components/state-04/DropDownFilter";

function App() {
  return (
    <>
      <NewsBoard />
      <ProductList />
      <DealOfTheDay />
      <ButtonGroup />
      <Rating />
      <ViewedProduct />
      <DropDownFilter />
    </>
  );
}

export default App;
