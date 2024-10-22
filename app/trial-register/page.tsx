"use client";

import React from "react";
import Image from "next/image";
import { MailIcon } from "lucide-react";
import { Form, Input, Row, Col } from "antd";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TrialRegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values: string) => {
    console.log("Form values:", values);
  };
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");

  return (
    <div className="flex flex-col justify-center items-center font-montserrat px-10 lg:px-40">
      <div className="h-[80px] w-full flex items-center justify-between ">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/Logo.png"
            width={100}
            height={50}
            objectFit="cover"
            alt="logo"
          />
        </Link>

        <div className="flex text-[14px] font-semibold text-brand-primary-veryDark cursor-pointer">
          <MailIcon className="mr-2" /> sales@pratek.vn
        </div>
      </div>
      <div className="w-full max-w-[750px]  px-10 bg-brand-primary-veryLight rounded-3xl shadow-md flex flex-col items-center justify-center mt-20">
        <h2 className="text-[20px] font-bold text-center text-brand-primary-dark mt-6">
          ĐĂNG KÝ DÙNG THỬ
        </h2>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{ width: "100%", marginTop: "12px" }}
        >
          <Row gutter={10}>
            <Col span={10}>
              <Form.Item
                name="taxCode"
                label="Mã số thuế"
                style={{ marginBottom: "16px" }}
                rules={[
                  { required: true, message: "Vui lòng nhập mã số thuế" },
                ]}
              >
                <Input placeholder="Mã số thuế" />
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item
                name="contactName"
                label="Tên người liên hệ"
                style={{ marginBottom: "16px" }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên người liên hệ",
                  },
                ]}
              >
                <Input placeholder="Người liên hệ" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="companyName"
            label="Tên công ty"
            style={{ marginBottom: "16px" }}
            rules={[{ required: true, message: "Vui lòng nhập tên công ty" }]}
          >
            <Input placeholder="Tên công ty" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ"
            style={{ marginBottom: "16px" }}
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
          >
            <Input placeholder="Địa chỉ" />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Điện thoại liên hệ"
                style={{ marginBottom: "16px" }}
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                ]}
              >
                <Input placeholder="Điện thoại liên hệ" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email liên hệ"
                style={{ marginBottom: "16px" }}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Vui lòng nhập email hợp lệ",
                  },
                ]}
              >
                <Input placeholder="Email liên hệ" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <p
              className={cn(
                "text-center text-sm text-brand-primary-veryDark mt-4",
                (isMobile || isTablet) && "text-xs"
              )}
            >
              Bằng việc đăng ký tài khoản, bạn đã chấp nhận{" "}
              <a href="#" className="text-brand-primary-medium hover:underline">
                Điều khoản sử dụng
              </a>{" "}
              và{" "}
              <a href="#" className="text-brand-primary-medium hover:underline">
                Chính sách bảo mật
              </a>{" "}
              của eVS.
            </p>
            <Button
              className={cn(
                "w-full bg-brand-secondary-medium hover:bg-brand-secondary-dark text-brand-primary-veryDark lg:mt-8 hover:text-white transition-colors duration-200 rounded-full py-3 font-bold",
                (isMobile || isTablet) && "text-sm mt-8"
              )}
            >
              Đăng ký ngay
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center text-[14px] mb-4">
          Bạn đã có tài khoản?{" "}
          <Link href="/login" className="text-blue-600">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrialRegisterPage;
