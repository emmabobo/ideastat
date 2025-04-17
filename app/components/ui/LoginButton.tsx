"use client";
// Removed incorrect import as the component is defined in this file

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const loginButton = () => {
  return (
    <Button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      variant="outline"
    >
      Login
    </Button>
  );
};

export default loginButton;

