import React, {useEffect} from "react";
import { Scopes, SpotifyAuth } from "react-spotify-auth";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import "react-spotify-auth/dist/index.css";
import { useTokenContext } from "../App";

export default function LinkSpotify() {
  const { token, setToken } = useTokenContext();
  const location = useLocation();
  const navigate = useNavigate()

  //remove token from URL
  useEffect(() => navigate(location.pathname), [token])

  const handleTokenSuccess = (receivedToken) => {
    localStorage.setItem("spotify_token", receivedToken);
    setToken(receivedToken);
  };
  const handleLogout = () => {
    localStorage.removeItem("spotify_token");
    Cookies.remove("spotifyAuthToken");
    setToken(null);
  };
  return (
    <>
      {token
        ? (
          <div id="link-spotify-container">
            <button style={{ backgroundColor: "#aaa" }} onClick={handleLogout} id="unlink-spotify-btn">Unlink Spotify</button>
          </div>
        )
        : (
          <div id="link-spotify-container">
            <SpotifyAuth
              redirectUri="http://localhost:3027/Home"
              clientID="4b830f668f7c43af93ed803df35930bc"
              scopes={[
                Scopes.userReadPrivate,
                "user-read-email",
                "playlist-modify-public",
              ]}
              onAccessToken={handleTokenSuccess}
            />
          </div>
        )}
    </>
  );
}