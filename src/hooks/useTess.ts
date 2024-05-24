import { useLocation } from "react-router-dom";

const useTess = () => {
  const { pathname } = useLocation();
  return pathname;
};

export default useTess;
