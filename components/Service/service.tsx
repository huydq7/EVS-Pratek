"use client";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

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
  return (
    <div className="relative w-[224px] h-[276px] bg-white group hover:text-white cursor-pointer px-8 hover:bg-brand-primary-medium flex flex-col items-center justify-center hover:mb-20 hover:rounded-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary-dark/50">
      {props.isPopular && (
        <div className="absolute top-2 right-2 bg-brand-secondary-medium px-2 gap-2 rounded-[100px] text-brand-primary-veryDark text-[10px] font-semibold leading-7">
          Phổ biến
        </div>
      )}
      <h3 className="text-[16px] leading-6 font-semibold">{props.title}</h3>
      <h4 className="text-lg font-bold">
        {props.price} <span>/năm</span>
      </h4>
      <div className="text-[14px] leading-4 mt-4 flex flex-col">
        <span className="text-center text-brand-primary-medium group-hover:text-white transition-all duration-200">
          {props.intro}
        </span>
        <div className="mt-4 mb-2 flex gap-x-2 items-center justify-center">
          <CheckCircle size={16} />
          <span>{props.bill}</span>
        </div>
      </div>
      <Button
        onClick={props.onClick}
        className="mt-4 rounded-[100px] w-[182px] h-[52px] text-brand-secondary-dark hover:w-full hover:text-white leading-7 text-[16px] bg-brand-secondary-veryLight font-semibold group-hover:bg-brand-secondary-dark group-hover:text-white transition-all duration-200"
        variant="default"
      >
        Bắt đầu ngay
      </Button>
    </div>
  );
};

export const Service: React.FC = () => {
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
    <div className="custom-height flex flex-col items-center justify-center font-montserrat bg-brand-primary-veryLight py-12">
      <h2 className="text-2xl mb-12  font-bold text-brand-primary-medium">
        Các gói dịch vụ
      </h2>
      <div className="w-[1120px] h-[276px] justify-center items-center flex bg-white rounded-2xl">
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
    </div>
  );
};
