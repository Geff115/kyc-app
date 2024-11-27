// Root page.js file that redirects users to
// the kyc endpoint

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/kyc");
}