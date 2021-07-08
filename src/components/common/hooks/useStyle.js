import { useState, useEffect } from "react";
let cacheStyles = [];

const useStyle = (url, integrity) => {
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null);

  const handleSuccess = () => {
    setIsloaded(true);
    setError(null);
  };

  const handleError = (error) => {
    cacheStyles = cacheStyles.filter((style) => style !== url);
    setIsloaded(true);
    setError(error);
  };

  useEffect(() => {
    let styleElement;
    if (cacheStyles.includes(url)) {
      handleSuccess();
    } else {
      cacheStyles.push(url);
      styleElement = window.document.createElement("link");
      styleElement.type = "text/css";
      if (integrity) {
        styleElement.crossOrigin = "";
        styleElement.integrity = integrity;
      }
      styleElement.rel = "stylesheet";
      styleElement.href = url;
      styleElement.addEventListener("load", handleSuccess);
      styleElement.addEventListener("error", handleError);

      window.document.head.appendChild(styleElement);
    }

    return () => {
      if (styleElement) {
        styleElement.removeEventListener("load", handleSuccess);
        styleElement.removeEventListener("error", handleError);
      }
    };
  }, [url]);

  return { isLoaded, error };
};

export default useStyle;
