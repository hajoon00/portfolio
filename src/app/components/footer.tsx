"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  // 홈, cdr, pensa 페이지에서만 어두운 배경과 흰 글씨 사용
  const isDarkFooter = pathname === "/" || 
                      pathname.includes("/sides/experience/cdr") || 
                      pathname.includes("/sides/experience/k-pensa");
  
  return (
    <footer className={`py-8 ${isDarkFooter ? 'bg-neutral-900' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className={`text-sm ${isDarkFooter ? 'text-white' : 'text-neutral-400'}`}>
          © {new Date().getFullYear()} Hajoon Park. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
