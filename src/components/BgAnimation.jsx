import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 2,
          bounce: 0,
          repeat: Infinity,
          repeatType: "reverse", // Giúp animation chạy ngược thay vì reset đột ngột
        },
        opacity: {
          delay,
          duration: 1.5, // Làm opacity tăng dần theo animation
        },
      },
    };
  },
};

const shape = {
  strokeWidth: 10,
  strokeLinecap: "round",
  fill: "transparent",
};

const BgAnimation = () => {
  const controls = useAnimation();
  const controlsMobile = useAnimation();
  const divRef = useRef(null);
  const divRefMobile = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kiểm tra kích thước màn hình
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Gọi kiểm tra lần đầu khi component được mount
    handleResize();

    // Lắng nghe sự kiện resize
    window.addEventListener("resize", handleResize);

    // Dọn dẹp sự kiện khi unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hàm tính toán vị trí ngẫu nhiên
  const getRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Kích thước của div
    const divWidth = 100; // Chiều rộng của div
    const divHeight = 100; // Chiều cao của div

    // Tính toán vị trí ngẫu nhiên, đảm bảo không vượt ra khỏi màn hình
    const randomX = Math.random() * (screenWidth - divWidth);
    const randomY = Math.random() * (screenHeight - divHeight);

    return { x: randomX, y: randomY };
  };

  // Hàm di chuyển div đến vị trí ngẫu nhiên
  const moveToRandomPosition = async () => {
    const newPosition = getRandomPosition();
    await controls.start({
      x: newPosition.x,
      y: newPosition.y,
      transition: { type: "tween", ease: "linear", duration: 4 }, // Di chuyển mượt mà trong 10 giây
    });
    if (!isMobile) {
      // Sau khi di chuyển xong, tiếp tục di chuyển đến vị trí mới
      moveToRandomPosition();
    }
  };

  // Hàm kiểm tra va chạm với cạnh màn hình
  const checkCollision = () => {
    const div = divRef.current;
    if (div) {
      const rect = div.getBoundingClientRect();

      // Kiểm tra va chạm với các cạnh màn hình
      if (
        rect.left <= 0 ||
        rect.right >= window.innerWidth ||
        rect.top <= 0 ||
        rect.bottom >= window.innerHeight
      ) {
        if (!isMobile) {
          moveToRandomPosition(); // Di chuyển đến vị trí ngẫu nhiên nếu chạm cạnh
        }
      }
    }
  };

  // Sử dụng useEffect để bắt đầu di chuyển khi component được mount
  useEffect(() => {
    if (isMobile) {
      controls.start({
        rotate: 360,
        transition: { repeat: Infinity, duration: 5, ease: "linear" },
      });
      console.log("trước return");
      return;
    }
    moveToRandomPosition(); // Bắt đầu di chuyển liên tục
    controls.start({
      rotate: 360, // Xoay 360 độ
      transition: { repeat: Infinity, duration: 5, ease: "linear" }, // Xoay liên tục
    });
    const interval = setInterval(checkCollision, 100); // Kiểm tra va chạm mỗi 100ms
    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [isMobile]);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-0">
        <motion.div
          animate={controls}
          ref={divRef}
          className="absolute blur-md opacity-60"
          initial={{ x: 0, y: 0, rotate: 0 }} // Vị trí ban đầu
        >
          <motion.svg
            width="300"
            height="300"
            viewBox="-50 -50 200 200"
            initial="hidden"
            animate="visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(50,50)">
              {/* Điều chỉnh vị trí */}
              <motion.circle
                cx="0"
                cy="0"
                r="10"
                stroke="#61dafb"
                fill="#61dafb"
                variants={draw}
                custom={1}
              />
              <motion.ellipse
                cx="0"
                cy="0"
                rx="30"
                ry="60"
                stroke="#61dafb"
                variants={draw}
                custom={2}
                style={shape}
                transform="rotate(0)"
              />
              <motion.ellipse
                cx="0"
                cy="0"
                rx="30"
                ry="60"
                stroke="#61dafb"
                variants={draw}
                custom={3}
                style={shape}
                transform="rotate(60)"
              />
              <motion.ellipse
                cx="0"
                cy="0"
                rx="30"
                ry="60"
                stroke="#61dafb"
                variants={draw}
                custom={4}
                style={shape}
                transform="rotate(120)"
              />
            </g>
          </motion.svg>
        </motion.div>
        <div className="absolute top-[20%] right-[80%] translate-x-[-50%] translate-y-[-50%] animate-move-rotate-2 blur-md opacity-60 text-white">
          <svg
            className="w-48 h-48 absolute top-10 left-10"
            stroke="#de3101"
            fill="#de3101"
            strokeWidth={0}
            role="img"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z" />
          </svg>
        </div>
        <div className="absolute top-[60%] right-[70%] translate-x-[-50%] translate-y-[-50%] animate-move-rotate-1 blur-md opacity-60 text-white">
          <svg
            className="w-48 h-48 absolute top-10 left-10"
            stroke="#F7DF1E"
            fill="#F7DF1E"
            strokeWidth={0}
            version="1.1"
            viewBox="0 0 32 32"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default BgAnimation;
