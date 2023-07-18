import { useState } from "react";

function useToken() {
  function getToken() {
    // Retrieve the token from local storage.
    const userToken = localStorage.getItem("token");
    // If a token exists, return it.
    return userToken && userToken;
  }

  // Use the useState hook to manage the token state. Initialize it with the token from local storage, if it exists.
  const [token, setToken] = useState(getToken());

  // Define a function to save a user token. This function will both update the token in local storage and the token state.
  function saveToken(userToken) {
    // Save the user token in local storage.
    localStorage.setItem("token", userToken);
    // Update the token state.
    setToken(userToken);
  }

  // Removes user token (will be used in logout)
  function removeToken() {
    // Remove the user token from local storage.
    localStorage.removeItem("token");
    // Update the token state to null.
    setToken(null);
  }

  // Return an object that contains the saveToken function (as setToken), the current token, and the removeToken function.
  return {
    setToken: saveToken,
    token,
    removeToken,
  };
}

// Export the useToken hook as the default export of this module.
export default useToken;
