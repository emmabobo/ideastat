"use client";

import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const LoginButton = () => {
  return (
    <Button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      variant="outline"
    >
      Login
    </Button>
  );
};

export default LoginButton;

