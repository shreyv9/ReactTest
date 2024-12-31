import React from "react";
import { useAuth, RedirectToSignIn, UserButton } from "@clerk/clerk-react";
import Portfolio from "./Portfolio";

const ProtectedPage = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
  
    return <RedirectToSignIn />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     <Portfolio />
      <UserButton />
    </div>
  );
};

export default ProtectedPage;
