import "./App.css";
import Dashboard from "./components/week2-day1-08-07-2025/Dashboard";
import MultiPageProductListingApp from "./components/week2-day1-08-07-2025/MultiPageProductListingApp";
import Products from "./components/week2-day1/CRUD";
import Weather from "./components/week2-day1/Weather";

function App() {
  return (
    <>
      <Dashboard />
      <MultiPageProductListingApp />
      <Weather />
      <Products />
    </>
  );
}

export default App;
