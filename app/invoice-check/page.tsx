"use client";

import { Navbar } from "@/components/Heading/Navbar/navbar";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import Image from "next/image";

const InvoiceCheckPage = () => {
  return (
    <div>
      <Navbar initialActiveHeading={1} />
      <InvoiceCheck />
    </div>
  );
};
export default InvoiceCheckPage;

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const InvoiceCheck = () => {
  return (
    <div className="mt-[84px] flex flex-col custom-height font-montserrat">
      <h1 className="text-[24px] leading-8 font-bold text-center text-brand-primary-dark mt-8 mb-8">
        Đọc hóa đơn điện tử
      </h1>
      <div className="flex flex-col items-center justify-center mx-10 px-8">
        <div className="lg:w-[1440px] lg:h-[300px] flex items-center justify-center bg-brand-primary-veryLight rounded-2xl p-5">
          <Dragger
            {...props}
            className="bg-white rounded-xl font-montserrat w-[100%] h-[100%]"
          >
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined
                style={{ fontSize: "120px", color: "#737373" }}
              />
            </p>
            <p className="ant-upload-text text-[14px] lg:text-xl lg:font-semibold">
              Nhấp hoặc kéo tệp tin vào khu vực này để tải lên
            </p>
            <span className="ant-upload-hint flex items-center justify-center text-center text-xs lg:text-[16px]">
              <span>Các định dạng được chấp nhận là</span>
              <span className="text-brand-primary-dark ml-1 font-semibold">
                .xml
              </span>
            </span>
          </Dragger>
        </div>
      </div>
      <h2 className="mt-8 text-xl font-bold text-brand-secondary-dark text-center">
        Chỉ 3 bước thực hiện
      </h2>
      <Card />
    </div>
  );
};

const Card = () => {
  const steps = [
    {
      number: "1",
      text: "Tải lên tập tin hóa đơn điện tử bạn muốn xem.",
    },
    {
      number: "2",
      content: (
        <span>
          Hệ thống sẽ đọc hóa đơn điện tử theo{" "}
          <span className="text-brand-primary-medium">
            Nghị định 123/2020/NĐ-CP
          </span>{" "}
          và{" "}
          <span className="text-brand-primary-medium">
            Thông tư 78/2021/TT-BTC
          </span>
        </span>
      ),
    },
    {
      number: "3",
      text: "Hệ thống kiểm tra thông tin và tính toán vẹn của hóa đơn, tra cứu tình trạng hóa đơn trên hệ thống TCT.",
    },
  ];
  return (
    <div className="relative py-8 lg:py-0">
      {/* Background layout element */}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-12 px-4 lg:px-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-[250px] lg:w-[320px] h-[296px] max-w-[320px] overflow-visible"
          >
            {/* Background Image */}
            <div className="absolute -top-6  left-1/2 -translate-x-1/2 -z-10">
              <Image
                src="/Ellipse.png"
                alt="ellipse"
                width={200}
                height={200}
              />
            </div>

            {/* Card Content */}
            <div
              className="w-full h-full rounded-3xl p-6 flex flex-col items-center relative z-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                boxShadow: "20px 20px 60px 0 rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white mb-6 lg:mb-12">
                  {step.number}
                </span>
              </div>
              <p className="text-brand-primary-veryDark text-base leading-6 text-center mt-6 lg:mt-12">
                {step.content || step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
