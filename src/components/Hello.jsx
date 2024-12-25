import React, { useEffect, useState } from "react";

const Hello = ({ onUnmount }) => {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "こんにちは",
    "你好",
    "Guten Tag",
    "Ciao",
    "안녕하세요",
    "Привет",
    "नमस्ते",
    "Xin chào :))",
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Vị trí câu chào hiện tại
  const [isVisible, setIsVisible] = useState(true); // Hiển thị hoặc ẩn component
  const [startUnmount, setStartUnmount] = useState(false); // Kích hoạt hiệu ứng ẩn

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Chuyển sang câu tiếp theo
      }, 100); // Hiển thị mỗi câu trong 1 giây

      return () => clearInterval(interval);
    } else {
      // Sau khi hết câu chào, kích hoạt hiệu ứng ẩn
      setTimeout(() => setStartUnmount(true), 500);
    }
  }, [currentIndex, greetings.length]);

  // Unmount component sau khi hiệu ứng hoàn tất
  useEffect(() => {
    if (startUnmount) {
      const timeout = setTimeout(() => onUnmount(), 1000); // Đợi hiệu ứng ẩn hoàn tất
      return () => clearTimeout(timeout);
    }
  }, [startUnmount, onUnmount]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div
        className={`relative overflow-hidden w-full max-w-md h-20 transition-all duration-1000`}
        style={{
          transform: startUnmount ? `translateY(-100%)` : `translateY(0)`, // Lướt lên khi ẩn
          opacity: startUnmount ? 0 : 1, // Mờ dần khi ẩn
        }}
      >
        {/* Danh sách câu chào */}
        <div className="transition-transform duration-1000 ease-in-out">
          {/* Chỉ hiển thị câu chào hiện tại */}
          <div className="text-4xl font-bold text-white h-20 flex items-center justify-center">
            {greetings[currentIndex] || "Xin chào :))"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
