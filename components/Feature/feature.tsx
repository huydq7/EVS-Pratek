import React from "react";

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

  return (
    <div className="w-full custom-height flex items-center justify-center flex-col p-8 md:p-16 font-montserrat">
      <h2 className="text-2xl mb-24 leading-8 text-[24px] font-bold text-brand-primary-medium">
        Tiện ích của chúng tôi
      </h2>
      <div className="relative max-w-6xl w-full">
        {/* Top dashed line */}
        <div className="absolute w-full top-0 border-t border-dashed border-brand-primary-veryDark">
          <div className="absolute -top-[8px] left-[50%]  w-[16px] h-[16px] bg-yellow-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 border-l border-dashed border-brand-primary-veryDark hover:bg-[#E5F4F9] transition-colors duration-300 rounded-lg cursor-pointer"
            >
              <div
                className={`absolute -left-[8px] ${feature.dotPosition} w-[16px] h-[16px] bg-yellow-400 rounded-full`}
              />
              <h3 className="text-lg font-semibold text-brand-primary-medium mb-4 text-[18px] leading-8">
                {feature.title}
              </h3>
              <p className="text-brand-primary-veryDark">
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
