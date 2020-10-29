import { useState, useEffect } from "react";

import { useAccessToken, useRefreshToken } from "../contexts/LoginInfo";
import validateAccessToken from "../helperFunctions/validateAccessToken";
import fetchAccessToken from "../helperFunctions/fetchAccessToken";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [err, setErr] = useState("");
  const { accessToken, setAccessToken } = useAccessToken();
  const { refreshToken } = useRefreshToken();

  const validations = async () => {
    const isValid = await validateAccessToken(accessToken);
    if (isValid) return;
    const newAccessToken = await fetchAccessToken(refreshToken);
    setAccessToken(newAccessToken);
  };

  const fetchItems = async () => {
    let options = {
      method: "GET",
      headers: {
        authorization: `bearer ${accessToken}`,
        "content-type": "application/json",
      },
    };

    const request = await fetch(url, options);
    if (!request.ok) {
      setErr(request.statusText);
      setLoading(false);
      return;
    }
    const result = await request.json();
    setResult(result);
    setLoading(false);
  };

  const fetchResources = () => {
    setLoading(true);
    validations()
      .then(() => {
        fetchItems();
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  };

  const reloadResources = fetchResources
  useEffect(() => {
    fetchResources();
  }, [url]);

  return { loading, result, err, reloadResources };
}
