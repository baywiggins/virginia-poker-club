import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

// Define the Login function component.
function Login() {
  // Use the setToken function from the useToken custom hook.
  const { setToken } = useToken();
  // Initialize the navigate function using the useNavigate hook from react-router-dom.
  let navigate = useNavigate();

  // Define an async function to handle the login.
  async function handleLogin(e) {
    // Prevent the default form submission behavior.
    e.preventDefault();

    // Extract the email and password values from the form submission event.
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Make a POST request to the /admin/token endpoint with the email and password as the body.
    const response = await fetch("/admin/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Parse the JSON response.
    const data = await response.json();

    // If the response was successful (status 200-299), save the token and navigate to the admin dashboard.
    if (response.ok) {
      // Save the token using the setToken function from useToken.
      setToken(data.access_token);

      // Redirect the user to the /admin-dashboard page.
      navigate("/admin-dashboard");
    } else {
      // If the login failed, log the error to the console.
      console.error("Login failed:", data);
    }
  }

  // Render a form with email and password fields and a submit button.
  // When the form is submitted, the handleLogin function will be called.
  return (
    <form onSubmit={handleLogin}>
      <input name="user" type="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Log in</button>
    </form>
  );
}

// Export the Login component as the default export of this module.
export default Login;
