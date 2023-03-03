import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ExternalLink = () => {
  const [token, setToken] = useSearchParams();
  const location = useLocation();
  const fetchToken = async () => {
    const response = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token.get("code")}`
    );
    console.log(response, response.data);
  };
  useEffect(() => {
    console.log(location);
    fetchToken();
    return () => {};
  }, []);

  return <div>ExternalLink</div>;
};

export default ExternalLink;
