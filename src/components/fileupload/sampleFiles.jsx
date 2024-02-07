import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const SampleFiles = (pathname) => {
  const [menu, setMenu] = useState(pathname);
  const location = useLocation();

  return <div> this is sampple</div>;
};
