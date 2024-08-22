import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Produk from "./Pages/Produk";
import DetailProduk from "./Pages/DetailProduk";
import Perusahaan from "./Pages/Perusahaan";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Tentang from "./Pages/Perusahaan/Tentang";
import Visi from "./Pages/Perusahaan/Visi";
import Struktur from "./Pages/Perusahaan/Struktur";
import HubungiKami from "./Pages/HubungiKami";
import NotFound from "./Pages/NotFound";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "perusahaan",
        element: <Perusahaan />,
        children: [
          { index: true, element: <Tentang /> },
          { path: "struktur", element: <Struktur /> },
          { path: "visi-misi", element: <Visi /> },
        ],
      },
      { path: "produk", element: <Produk /> },
      { path: "produk/detail/:id", element: <DetailProduk /> },
      { path: "contact", element: <HubungiKami /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
