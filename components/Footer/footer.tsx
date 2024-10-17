"use client";
import React from "react";
import { Form, Input } from "antd";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

const RegistrationForm: React.FC = () => {
  const onFinish = (values: string) => {
    console.log("Received values:", values);
  };

  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  return (
    <div className="w-full max-w-md mx-auto font-montserrat">
      <Form onFinish={onFinish} layout="vertical" className="space-y-4">
        {["taxId", "contactName", "phone", "email"].map((field) => (
          <Form.Item
            key={field}
            label={
              <span className="font-semibold text-white">
                {getFieldLabel(field)}
              </span>
            }
            name={field}
            rules={getFieldRules(field)}
          >
            <Input
              className="px-3 py-2 rounded-md"
              placeholder={getFieldLabel(field)}
            />
          </Form.Item>
        ))}
        <Form.Item>
          <p
            className={cn(
              "text-center text-sm text-gray-300 mt-4",
              (isMobile || isTablet) && "text-xs"
            )}
          >
            Bằng việc đăng ký tài khoản, bạn đã chấp nhận{" "}
            <a href="#" className="text-brand-secondary-medium hover:underline">
              Điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a href="#" className="text-brand-secondary-medium hover:underline">
              Chính sách bảo mật
            </a>{" "}
            của eVS.
          </p>
          <Button
            type="submit"
            className={cn(
              "w-full bg-brand-secondary-medium hover:bg-brand-secondary-dark text-brand-primary-veryDark lg:mt-8 hover:text-white transition-colors duration-200 rounded-full py-3 font-bold",
              (isMobile || isTablet) && "text-sm mt-8"
            )}
          >
            Đăng ký ngay
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const CustomFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={100}
            height={50}
            className="mb-4 md:mb-0 cursor-pointer"
          />
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={24}
                height={24}
                className="rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="border-t border-[#003459] pt-8">
          <p className="text-base text-[#003459] text-center md:flex md:justify-between">
            <span>&copy; 2024 PRATEK CO.LTD. All rights reserved.</span>
            <span className="block md:inline mt-2 md:mt-0">
              Lầu 2, Tòa nhà Hồng Anh Japan, 24 Trường Sơn, phường 2, quận Tân
              Bình, TP. HCM
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Footer: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isSmallMobile = useMediaQuery("(max-width: 433px)");
  return (
    <>
      <section className="bg-[#003459] text-brand-secondary-medium py-16 px-4 sm:px-6 lg:px-8 font-montserrat">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left md:leading-7">
              <h2
                className={cn(
                  "text-3xl sm:text-4xl font-bold leading-tight mb-4",
                  (isMobile || isTablet) && "text-xl"
                )}
              >
                {isSmallMobile ? (
                  <>
                    Đăng ký <br />
                    Trải nghiệm dịch vụ <br />
                    <span className="whitespace-nowrap">miễn phí</span>
                  </>
                ) : isMobile || isTablet ? (
                  "Đăng ký trải nghiệm dịch vụ miễn phí."
                ) : (
                  <span>
                    Đăng ký <br />
                    Trải nghiệm <br />
                    Dịch vụ <span className="whitespace-nowrap">miễn phí</span>
                  </span>
                )}
              </h2>

              <div
                className={cn(
                  "text-xlmb-8 text-brand-secondary-medium font-semibold",
                  (isMobile || isTablet) && "text-[16px] font-normal"
                )}
              >
                Để tìm hiểu thêm về các tính năng của hệ thống,{" "}
                {isMobile || isTablet ? "" : <br />}
                mời bạn tham gia trải nghiệm miễn phí.
              </div>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

function getFieldLabel(field: string): string {
  const labels: { [key: string]: string } = {
    taxId: "Mã số thuế",
    contactName: "Tên người liên hệ",
    phone: "Điện thoại người liên hệ",
    email: "Email liên hệ",
  };
  return labels[field] || field;
}

import { RuleObject } from "antd/lib/form";

function getFieldRules(field: string): RuleObject[] {
  const commonRule = {
    required: true,
    message: `Vui lòng nhập ${getFieldLabel(field).toLowerCase()}!`,
  };
  if (field === "email") {
    return [commonRule, { type: "email", message: "Email không hợp lệ!" }];
  }
  return [commonRule];
}
