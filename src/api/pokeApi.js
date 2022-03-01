import axios from "axios";
import { useEffect, useState } from "react";

export const PokeApi = (url) => {
  const [apiResult, setApiResult] = useState({ loading: true, data: null });
  useEffect(() => {
    getApi(url);
  }, [url]);

  async function getApi(url) {
    setApiResult({ loading: false, data: null });
    axios
      .get(url)
      .then((data) => {
        // console.log(data.data);
        setApiResult({ loading: false, data: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return apiResult;
};
