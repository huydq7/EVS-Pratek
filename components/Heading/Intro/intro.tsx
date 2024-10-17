"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

export const Intro = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  return (
    <div
      className={cn(
        "w-full min-h-screen flex flex-col lg:flex-row items-center justify-center font-montserrat overflow-hidden",
        "sm:px-6 px-8 lg:px-0 py-12 lg:py-0",
        isMobile || (isTablet && "mt-24") // Add this to move the text down on larger screens
      )}
    >
      <div
        className={cn(
          "w-full lg:w-1/2 flex flex-col",
          "space-y-6 lg:space-y-8 mb-10 lg:mb-0 lg:ml-20",
          "lg:ml-40",
          !isMobile && !isTablet && "lg:mt-12" // Adjust the margin-top to move the text down
        )}
      >
        {(isMobile || isTablet) && <ResponsiveIpadImage />}

        <h1
          className={cn(
            "font-bold text-center lg:text-left",
            "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
            (isMobile || isTablet) && "-mb-24"
          )}
        >
          <span className="text-brand-primary-medium leading-tight">
            Cung Cấp
          </span>
          <br />
          <span className="text-brand-primary-medium leading-tight">
            Giải Pháp{" "}
            <span className="text-brand-secondary-medium leading-tight">
              Xác Thực
            </span>
          </span>
          <br />
          <span className="text-brand-primary-medium">
            Và{" "}
            <span className="text-brand-secondary-medium">Lưu Trữ Hóa Đơn</span>
          </span>
        </h1>

        <p
          className={cn(
            "text-sm sm:text-base lg:text-lg",
            "text-brand-primary-veryDark",
            "max-w-2xl mx-auto lg:mx-0",
            "text-center lg:text-left",
            "font-semibold"
          )}
        >
          e-Invoice Verify & Storage cung cấp cho bạn những tiện ích hỗ trợ.
          Giúp việc quản lý hóa đơn trở nên dễ dàng hơn.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button
            className={cn(
              "rounded-full bg-brand-secondary-medium text-white",
              "font-semibold text-base sm:text-lg",
              "py-3 px-6 sm:py-4 sm:px-8",
              "hover:bg-brand-secondary-dark transition-colors duration-300",
              "shadow-lg hover:shadow-xl",
              isMobile ? "w-[60%] h-[60px]" : "w-auto",
              isTablet ? "h-[50px]" : "lg:h-[60px] xl:h-[70px]"
            )}
          >
            Dùng thử miễn phí
          </Button>
        </div>
      </div>

      {!isMobile && !isTablet && (
        <div className="w-1/2 flex items-center justify-center relative">
          <ResponsiveIpadImage />
        </div>
      )}
    </div>
  );
};

export const ResponsiveIpadImage = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  return (
    <div
      className={cn(
        "relative lg:scale-150",
        isMobile
          ? "w-full h-[200px] scale-150 mb-12"
          : isTablet
          ? "w-full h-[300px] scale-150 mb-16"
          : "w-full h-[500px] xl:h-[600px]"
      )}
    >
      <Image
        src={isMobile || isTablet ? "/ipad.svg" : "/ipad.png"}
        layout="fill"
        objectFit="contain"
        alt="iPad"
        className="transform transition-transform duration-300"
      />
    </div>
  );
};
