"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Intro = () => {
  return (
    <div className="w-[100%] h-[calc(100vh - 84px)] flex items-center font-montserrat group">
      <div className="w-[60%] flex flex-col px-48 text-[40px] font-bold leading-[48px] relative bottom-32">
        <span className="text-brand-primary-medium ">Cung Cấp</span>
        <span className="text-brand-primary-medium">
          Giải Pháp{" "}
          <span className="text-brand-secondary-medium">Xác Thực</span>
        </span>
        <span className="text-brand-primary-medium">
          Và{" "}
          <span className="text-brand-secondary-medium">Lưu Trữ Hóa Đơn</span>
        </span>

        <span className="text-sm text-brand-primary-veryDark mt-8 leading-6">
          e-Invoice Verify & Storage cung cấp cho bạn những tiện ích hỗ trợ.
          <br />
          Giúp việc quản lý hóa đơn trở nên dễ dàng hơn.
        </span>
        <Button className="rounded-[100px] bg-brand-secondary-medium font-semibold w-[250px] relative top-16 h-[80px] text-[20px] leading-8 px-8 py-4">
          Dùng thử miễn phí
        </Button>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <Image
          className="relative left-16"
          src="/Vector.svg"
          alt="vector"
          layout="responsive" // Use responsive layout
          width={699} // Original width
          height={603} // Original height
        />
        <Image
          className="absolute top-36"
          src="/ipad.png"
          alt="ipad"
          layout="responsive" // Use responsive layout
          width={1600} // Original width
          height={1000} // Original height
        />
      </div>
    </div>
  );
};
