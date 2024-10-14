"use client";
import { Form, Input } from "antd";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const RegistrationForm: React.FC = () => {
  const onFinish = (values: string) => {
    console.log("Received values:", values);
  };

  return (
    <div className=" flex justify-center items-center footer-height">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label={<span className="font-semibold">Mã số thuế</span>}
            name="taxId"
            rules={[{ required: true, message: "Vui lòng nhập mã số thuế!" }]}
          >
            <Input className="px-3 py-2" placeholder="Mã số thuế" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Tên người liên hệ</span>}
            name="contactName"
            rules={[
              { required: true, message: "Vui lòng nhập tên người liên hệ!" },
            ]}
          >
            <Input className="px-3 py-2" placeholder="Tên người liên hệ" />
          </Form.Item>

          <Form.Item
            label={
              <span className="font-semibold">Điện thoại người liên hệ</span>
            }
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập điện thoại liên hệ!" },
            ]}
          >
            <Input className="px-3 py-2" placeholder="Điện thoại liên hệ" />
          </Form.Item>

          <Form.Item
            label={<span className="font-semibold">Email liên hệ</span>}
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email liên hệ!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input className="px-3 py-2" placeholder="Email liên hệ" />
          </Form.Item>

          <Form.Item>
            <Button
              variant="default"
              className="w-full bg-brand-secondary-medium hover:bg-brand-secondary-dark text-brand-primary-veryDark hover:text-white transition-colors duration-200 rounded-[100px] h-[48px] font-bold leading-6"
            >
              Đăng ký ngay
            </Button>
          </Form.Item>
        </Form>
        <p className="text-center text-sm text-gray-600 mt-4 text-[14px] leading-4">
          Bằng việc đăng ký tài khoản, bạn đã chấp{" "}
          <span className="text-brand-primary-medium cursor-pointer">
            nhận Điều khoản sử dụng và Chính sách bảo mật
          </span>{" "}
          của eVS.
        </p>
      </div>
    </div>
  );
};

const CustomFooter = () => {
  return (
    <div className="flex flex-col justify-between items-center px-40 py-10 h-[192px]">
      <div className="relative top-6 flex justify-between items-center w-[100%]">
        <Image
          className="cursor-pointer"
          src="/Logo.svg"
          alt="logo"
          width={100}
          height={48}
        />
        <div className="flex items-center justify-center gap-x-4 cursor-pointer">
          <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
          <Image
            className="rounded-[100px] "
            src="/linkedin.svg"
            alt="linkedin"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#003052] relative top-4"></div>
      <div className="flex justify-between w-full items-center text-sm font-normal text-[#003052] mt-2">
        <span>© PRATEK CO.LTD</span>
        <span>
          Lầu 2, Tòa nhà Hồng Anh Japan, 24 Trường Sơn, phường 2, quận Tân Bình,
          TP. HCM
        </span>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div>
      <div className="footer-height bg-[#003459] flex justify-between items-center px-40 font-montserrat">
        <div className=" text-[40px] leading-[48px] text-brand-secondary-medium flex flex-col font-bold gap-y-2">
          <span>Đăng ký</span>
          <span> trải nghiệm</span>
          <span>dịch vụ miễn phí</span>

          <div className="font-semibold text-brand-secondary-medium leading-8 text-lg flex flex-col mt-4">
            <span>Để tìm hiểu hơn về các tính năng của hệ thống</span>
            <span>mời bạn tham gia trải nghiệm miễn phí.</span>
          </div>
        </div>
        <RegistrationForm />
      </div>

      <CustomFooter />
    </div>
  );
};
