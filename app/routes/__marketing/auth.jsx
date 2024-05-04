import AuthForm from "~/components/auth/AuthForm";
import { login, signUp } from "~/data/auth.server";
import { validateCredentials } from "~/data/validation.server";
import authStyles from "~/styles/auth.css";

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === "login") {
      return login(credentials);
    } else {
      return signUp(credentials);
    }
  } catch (error) {
    if (error.statusCode === 422) {
      return { credentials: error.message };
    }
  }
};

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
