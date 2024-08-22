import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-medium-image-zoom/dist/styles.css";
import ProductProvider from "./Context/ProductContext.tsx";
import DetailContextProvider from "./Context/DetailContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <DetailContextProvider>
      <App />
    </DetailContextProvider>
  </ProductProvider>
);
