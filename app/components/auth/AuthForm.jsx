import { Form, Link, useActionData, useNavigation, useSearchParams } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const validationErrors = useActionData();
  const authMode = searchParams.get("mode") || "login";
  const isLoginMode = authMode === "login";
  const submitBtnCaption = isLoginMode ? "Login" : "Register";
  const toggleBtnCaption = isLoginMode ? "Create new user" : "Log in existing user";

  const isSubmitting = navigation.state !== "idle";

  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">{isLoginMode ? <FaLock /> : <FaUserPlus />}</div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Authenticating..." : submitBtnCaption}</button>
        <Link to={isLoginMode ? "?mode=signup" : "?mode=login"}>{toggleBtnCaption}</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
