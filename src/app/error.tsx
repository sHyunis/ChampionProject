"use client";

import { CustomError } from "@/types/Error";
import { useRouter } from "next/router";
import { startTransition } from "react";

interface errorProps {
  error: CustomError;
}
const ErrorComponent = ({ error }: errorProps) => {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.replace(router.asPath);
    });
  };
  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <h2>Error가 발생하였습니다.</h2>
      <p>{error.message}</p>
      <button onClick={handleRetry}>재시도</button>
    </div>
  );
};

export default ErrorComponent;
