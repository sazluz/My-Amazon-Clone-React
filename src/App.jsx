import "./App.css";
import CarouselComponent from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

function App() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Category />
      <Product />
    </>
  );
}

export default App;
