const clientId = '0c800865bb3e4b5b83044919bb91f2f6'; 
const redirectUri = "http://localhost:3000/"; 
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken; // Return existing token if already available
    }

    // Check if token and expiration time are in the URL
    const urlParams = window.location.href.match(/access_token=([^&]*)/);
    const expiresInParam = window.location.href.match(/expires_in=([^&]*)/);

    if (urlParams && expiresInParam) {
      accessToken = urlParams[1];
      const expiresIn = Number(expiresInParam[1]);

      // Clear the URL parameters to prevent reusing an expired token
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    } else {
      // Redirect user to Spotify authorization page if no token found
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location.href = authUrl;
    }
  },
   search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
  
};

export default Spotify;
