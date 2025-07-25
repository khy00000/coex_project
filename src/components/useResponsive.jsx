import { useEffect, useState } from "react";

const useResponsive = () => {
  const getStatus = () => {
    const width = window.innerWidth;
    return {
      isMobile: width <= 747,
      isTablet: width > 747 && width <= 1024,
      isDesktop: width > 1024,
    };
  };

  const [status, setStatus] = useState(getStatus());

  useEffect(() => {
    const handleResize = () => {
      setStatus(getStatus());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return status;
};

export default useResponsive;