"use client";

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-20 left-4 text-gray-500 font-semibold py-2 px-4 hover:text-hajoon-500 flex items-center justify-center"
    >
      <span className="text-xl">&larr;</span>
    </button>
  );
};

export default GoBackButton;
