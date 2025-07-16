import React, { Suspense } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
