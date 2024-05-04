import { json } from "@remix-run/node";
import { destroyUserSession } from "~/data/auth.server";

export const action = ({ request }) => {
  if (request.method !== "POST") {
    // throw new Error("Invalid request");
    throw json({ message: "Invalid request method" }, { statusCode: 400 });
  }

  return destroyUserSession(request);
};
