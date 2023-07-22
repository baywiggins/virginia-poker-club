import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

function Login() {
  const [error, setError] = useState(""); // State to store the error message
  const { setToken } = useToken();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("/admin/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token
        setToken(data.access_token);

        // Redirect the user
        navigate("/admin-dashboard");
      } else {
        // Handle login error
        setError(data.msg); // Update the error state with the error message from the response
      }
    } catch (error) {
      console.error(error); // Log any errors that occur during the fetch request
      setError("Login failed for some reason lmao"); // Set a generic error message
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="username" type="text" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log in</button>
      {error && <p>{error}</p>} {/* Conditionally render the error message */}
    </form>
  );
}

export default Login;
