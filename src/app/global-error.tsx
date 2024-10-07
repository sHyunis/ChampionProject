"use client";

import { useRouter } from "next/router";
import { startTransition } from "react";

interface globalErrorProps {
  error: string;
}
const GlobalError = ({ error }: globalErrorProps) => {
  const router = useRouter();
  const handleReset = () => {
    startTransition(() => {
      router.push("/");
    });
  };

  return (
    <div>
      <h2>에러가 발생하였습니다.</h2>
      <p>{error}</p>
      <button onClick={handleReset}>Go to Home</button>
    </div>
  );
};

export default GlobalError;
