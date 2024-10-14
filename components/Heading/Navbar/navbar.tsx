"use client";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full h-[84px] px-16 font-semibold font-montserrat",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="flex items-center gap-16 w-[50%] cursor-pointer hover:text-brand-primary-veryDark">
        <Image src="/Logo.svg" alt="logo" width={100} height={48} />
        <h2>Trang chủ</h2>
        <h2>Đọc hóa đơn</h2>
      </div>
      <div className="flex flex-1 items-center gap-2 justify-end">
        <Button
          className="rounded-3xl border-brand-primary-veryDark text-brand-primary-veryDark font-sm font-semibold hover:bg-brand-primary-light"
          variant="outline"
        >
          Đăng nhập
        </Button>
        <Button className="rounded-3xl bg-brand-secondary-medium font-semibold">
          Dùng thử miễn phí
        </Button>
      </div>
    </div>
  );
};
