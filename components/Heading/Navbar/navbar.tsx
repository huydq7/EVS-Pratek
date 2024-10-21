"use client";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "bg-background fixed top-0 w-full px-4 py-2 md:px-6 lg:px-16 lg:h-[84px] font-semibold font-montserrat z-[99999] transition-all duration-300 ease-in-out",
          scrolled && "border-b shadow-sm"
        )}
      >
        <div className="flex items-center justify-between lg:mt-2">
          <div className="flex items-center space-x-4 lg:space-x-16">
            <Image
              src="/Logo.svg"
              alt="logo"
              width={100}
              height={48}
              className="cursor-pointer"
            />
            <div className="hidden md:flex space-x-8">
              <h2 className="cursor-pointer hover:text-brand-primary-veryDark">
                Trang chủ
              </h2>
              <h2 className="cursor-pointer hover:text-brand-primary-veryDark">
                Đọc hóa đơn
              </h2>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="rounded-3xl border-brand-primary-veryDark text-brand-primary-veryDark font-sm font-semibold hover:bg-brand-primary-light"
              variant="outline"
            >
              Đăng nhập
            </Button>
            <Link href="/trial-register">
              {" "}
              <Button className="rounded-3xl bg-brand-secondary-medium font-semibold">
                Dùng thử miễn phí
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <Menu size={24} className="text-brand-primary-veryDark mt-2" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer menu */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-[100000] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Image src="/Logo.svg" alt="logo" width={80} height={38} />
            <button onClick={toggleMenu}>
              <X size={24} className="text-brand-primary-veryDark" />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <h2 className="cursor-pointer hover:text-brand-primary-veryDark relative group">
              Trang chủ
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-primary-veryDark scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </h2>
            <h2 className="cursor-pointer hover:text-brand-primary-veryDark relative group">
              Đọc hóa đơn
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-primary-veryDark scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </h2>
          </div>

          <div className="p-4 space-y-4">
            <Button
              className="w-full rounded-3xl border-brand-primary-veryDark text-brand-primary-veryDark font-sm font-semibold hover:bg-brand-primary-light"
              variant="outline"
            >
              Đăng nhập
            </Button>
            <Button className="w-full rounded-3xl bg-brand-secondary-medium font-semibold">
              Dùng thử miễn phí
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99999] md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};
