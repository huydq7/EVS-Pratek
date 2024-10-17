"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

export const Feature = () => {
  const features = [
    {
      title: "Quản lý hóa đơn dễ dàng",
      description:
        "Quản lý và theo dõi hiệu quả tất cả chi tiết và lịch sử hóa đơn của bạn.",
      dotPosition: "top-0",
    },
    {
      title: "Xác thực tính chính xác",
      description:
        "Đảm bảo tính chính xác và xá xác thực của tất cả hóa đơn của bạn.",
      dotPosition: "top-1/6",
    },
    {
      title: "Kiểm tra nhanh chóng",
      description:
        "Theo dõi trạng thái và lịch sử hóa đơn của bạn trong thời gian thực.",
      dotPosition: "top-1/3",
    },
    {
      title: "Lưu trữ dữ liệu hiệu quả",
      description:
        "Lưu trữ và quản lý an toàn tất cả các tài liệu và dữ liệu quan trọng của bạn một cách dễ dàng.",
      dotPosition: "top-1/2",
    },
    {
      title: "Bảo mật dữ liệu",
      description:
        "Đảm bảo tính bảo mật và tính toàn vẹn của dữ liệu của bạn với hệ thống lưu trữ tiên tiến của chúng tôi.",
      dotPosition: "top-2/3",
    },
    {
      title: "Sao lưu tự động",
      description:
        "Tự động sao lưu dữ liệu của bạn để đảm bảo tính luôn được đảm bảo.",
      dotPosition: "bottom-0",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

  return (
    <div
      className={cn(
        "w-full h-auto md:h-[650px] flex items-center justify-center flex-col p-8 md:p-16 font-montserrat",
        (isMobile || isTablet) && "min-h-screen overflow-hidden"
      )}
    >
      <h2
        className={cn(
          "lg:-mt-20 mb-10 leading-8 font-bold text-brand-primary-medium lg:text-[32px]",
          (isMobile || isTablet) && "text-[20px]"
        )}
      >
        Tiện ích của chúng tôi
      </h2>
      <div className="relative max-w-6xl w-full">
        {/* Top dashed line */}
        <div className="absolute w-full top-0 border-t border-dashed border-brand-primary-veryDark">
          <div className="absolute -top-[8px] left-[50%] w-[16px] h-[16px] bg-yellow-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 border-l border-dashed border-brand-primary-veryDark transition-colors duration-300 cursor-pointer"
            >
              <div
                className={`absolute -left-[8px] ${feature.dotPosition} w-[16px] h-[16px] bg-yellow-400 rounded-full`}
              />
              <h3
                className={cn(
                  "text-lg font-semibold text-brand-primary-medium mb-4 text-[18px] leading-8",
                  (isMobile || isTablet) && "text-[16px]"
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "text-brand-primary-veryDark",
                  (isMobile || isTablet) && "text-[14px]"
                )}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom dashed line */}
        <div className="absolute w-full bottom-0 border-t border-dashed border-brand-primary-veryDark"></div>
      </div>
    </div>
  );
};
