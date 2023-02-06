import { redirect } from "react-router-dom";

async function isProtected(user) {
  if (!user) {
    throw redirect("/login");
  }
  return null;
}
export default isProtected;
