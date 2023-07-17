import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

function Login() {
  const { setToken } = useToken();
  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    // Here you might want to call your API to log in the user
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await fetch("/admin/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Save the token
      setToken(data.access_token);

      // Redirect the user
      navigate("/admin-dashboard");
    } else {
      // Handle login error
      console.error("Login failed:", data);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
