"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-20 left-4 z-50 flex items-center justify-center px-4 py-2 font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
    >
      <span className="text-xl">&larr;</span>
    </button>
  );
};

export default GoBackButton;
