import { useState, useEffect } from "react";

const useAnimatedText = (sentence) => {
  const intervalTime = sentence.length * 200 + 2000;
  // Tạo animation cho từng chữ
  const letterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // Reset key để lặp animation
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  // Chia nhỏ câu thành từng ký tự, thay dấu cách bằng ký tự không thể phá vỡ
  const characters = sentence.split("").map((char, index) => ({
    char: char === " " ? "\u00A0" : char,
    key: index,
  }));

  return { key, characters, letterAnimation };
};

export default useAnimatedText;
