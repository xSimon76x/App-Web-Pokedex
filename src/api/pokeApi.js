import axios from "axios";
import { useEffect, useState } from "react";

export const PokeApi = (url) => {
  const [apiResult, setApiResult] = useState(null);
  useEffect(() => {
    getApi(url);
  }, [url]);

  async function getApi(url) {
    setApiResult(null);
    axios
      .get(url)
      .then((data) => {
        setApiResult(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return apiResult;
};
