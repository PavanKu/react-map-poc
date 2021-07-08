import { useState, useEffect } from "react";
let cacheScripts = [];

const useScript = (url, integrity) => {
  const [isLoaded, setIsloaded] = useState(false);
  const [error, setError] = useState(null);

  const handleSuccess = () => {
    setIsloaded(true);
    setError(null);
  };

  const handleError = (error) => {
    cacheScripts = cacheScripts.filter((script) => script !== url);
    setIsloaded(true);
    setError(error);
  };

  useEffect(() => {
    let scriptElement;
    if (cacheScripts.includes(url)) {
      handleSuccess();
    } else {
      cacheScripts.push(url);
      scriptElement = window.document.createElement("script");
      scriptElement.type = "text/javascript";
      if (integrity) {
        scriptElement.crossOrigin = "";
        scriptElement.integrity = integrity;
      }
      scriptElement.async = true;
      scriptElement.defer = true;
      scriptElement.src = url;
      scriptElement.addEventListener("load", handleSuccess);
      scriptElement.addEventListener("error", handleError);

      window.document.body.appendChild(scriptElement);
    }

    return () => {
      if (scriptElement) {
        scriptElement.removeEventListener("load", handleSuccess);
        scriptElement.removeEventListener("error", handleError);
      }
    };
  }, [url]);

  return { isLoaded, error };
};

export default useScript;
