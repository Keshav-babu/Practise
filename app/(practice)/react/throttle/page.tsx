"use client";

import { useEffect, useRef, useState } from "react";

// import { useRef } from "react";

// export default function Throttle() {
//   const lastClick = useRef(0);

//   const timer = 1000;

//   const handleClick = () => {
//     const now = Date.now();
//     if (now - lastClick.current >= timer) {
//       console.log("Clicked");
//       lastClick.current = now;
//     }
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// }

export default function Throttle() {
  const [scrollY, setScrollY] = useState(0);
  let lastRun = useRef(0);
  let timer = 1000;

  function ThrottleOnScroll() {
    const now = Date.now();
    if (now - lastRun.current >= timer) {
      console.log("Running");
      setScrollY(window.scrollY);
      lastRun.current = now;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ThrottleOnScroll);

    return () => {
      window.removeEventListener("scroll", ThrottleOnScroll);
    };
  }, []);

  return (
    <div className="h-[200vh]">
      <h2>Scroll Position (Throttled)</h2>
      <p>Scroll Y: {scrollY}px</p>
    </div>
  );
}
