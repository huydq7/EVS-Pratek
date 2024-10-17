"use client";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

interface ServicePlan {
  title: string;
  price: string;
  intro: string;
  bill: string;
  isPopular?: boolean;
}

interface PricingCardProps extends ServicePlan {
  onClick: () => void;
}
const PricingCard: React.FC<PricingCardProps> = (props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  return (
    <div
      className={cn(
        "relative bg-white group cursor-pointer px-4 py-6 flex flex-col items-center justify-between rounded-2xl transition-all duration-300",
        "w-full h-full",
        props.isPopular &&
          "lg:bg-brand-primary-medium lg:mb-12 lg:rounded-lg lg:text-white shadow-2xl"
      )}
    >
      {props.isPopular && (
        <div
          className={cn(
            "absolute top-2 right-2 bg-brand-secondary-medium px-2 gap-2 rounded-[100px] text-brand-primary-veryDark text-[10px] font-semibold leading-7",
            (isMobile || isTablet) && "-top-2 -right-2 text-[8px]"
          )}
        >
          Phổ biến
        </div>
      )}
      <h3 className="text-[16px] leading-6 font-semibold">{props.title}</h3>
      <h4 className="text-lg font-bold flex">
        {props.price} <span className="font-normal text-[12px] mt-2">/năm</span>
      </h4>
      <div className="text-[14px] leading-4 mt-4 flex flex-col">
        <span
          className={cn(
            "text-center text-brand-primary-medium transition-all duration-200",
            props.isPopular && "text-white",
            (isMobile || isTablet) && "text-brand-primary-medium"
          )}
        >
          {props.intro}
        </span>
        <div className="mt-4 mb-2 flex gap-x-2 items-center justify-center">
          <CheckCircle size={16} />
          <span className="font-semibold">{props.bill}</span>
        </div>
      </div>
      <Button
        onClick={props.onClick}
        className={cn(
          "mt-4 rounded-[100px] w-[182px]  lg:h-[52px] text-brand-secondary-dark lg:hover:w-full leading-7 text-[16px] hover:text-white bg-brand-secondary-veryLight font-semibold group-lg:hover:bg-brand-secondary-dark  transition-all duration-200",
          (isMobile || isTablet) && "text-[12px] h-[30px] w-[120px] mt-2 "
        )}
        variant="default"
      >
        Bắt đầu ngay
      </Button>
    </div>
  );
};

export const Service: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const services: ServicePlan[] = [
    {
      title: "Basic",
      price: "850.000đ",

      intro: "Trải nghiệm miễn phí 1 tháng đầu tiên",
      bill: "500 Hóa đơn",
    },
    {
      title: "Standard",
      price: "1.100.000đ",
      intro: "Trải nghiệm miễn phí 1 tháng đầu tiên",
      bill: "1.000 Hóa đơn",
    },
    {
      title: "Advance",
      price: "1.500.000đ",

      intro: "Trải nghiệm miễn phí 3 tháng đầu tiên",
      bill: "2.000 Hóa đơn",

      isPopular: true,
    },
    {
      title: "Premium",
      price: "2.500.000đ",

      intro: "Trải nghiệm miễn phí 1 tháng đầu tiên",
      bill: "5.000 Hóa đơn",
    },
    {
      title: "Enterprise",
      price: "4.500.000đ",
      intro: "Trải nghiệm miễn phí 1 tháng đầu tiên",
      bill: "10.000 Hóa đơn",
    },
  ];

  return (
    <div
      className={cn(
        "lg:h-[600px] lg:py-24 flex flex-col items-center justify-start font-montserrat bg-brand-primary-veryLight py-12 px-4",
        (isMobile || isTablet) && "w-full min-h-screen"
      )}
    >
      <h2
        className={cn(
          "text-[20px] lg:text-[32px] md:text-[30px] lg:mb-24 font-bold text-brand-primary-medium",
          (isMobile || isTablet) && "mb-8"
        )}
      >
        Các gói dịch vụ
      </h2>
      {!isMobile && !isTablet && (
        <div className="w-[1120px] h-[276px] justify-center items-center flex lg:bg-white rounded-2xl sm:bg-transparent">
          {services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              price={service.price}
              intro={service.intro}
              bill={service.bill}
              isPopular={service.isPopular}
              onClick={() => console.log(service.title)}
            />
          ))}
        </div>
      )}
      {(isMobile || isTablet) && (
        <div
          className={cn(
            "grid gap-x-4 gap-y-6 w-full h-full text-lg justify-items-center px-6", // Giữ justify-items-center để các card nằm giữa theo hàng ngang
            isMobile && "grid-cols-2 mx-auto h-fit", // 2 cột trên mobile
            isTablet && "grid-cols-3 mx-auto h-fit" // 3 cột trên tablet
          )}
        >
          {/* Hiển thị các card */}
          {services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              price={service.price}
              intro={service.intro}
              bill={service.bill}
              isPopular={service.isPopular}
              onClick={() => console.log(service.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
