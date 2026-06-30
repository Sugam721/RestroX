import { useEffect } from "react";
import gsap from "gsap";

const useTextReveal = (ref) => {
  useEffect(() => {
    gsap.from(ref.current, {
      y: 100,
      opacity: 0,

      duration: 1,

      ease: "power4.out",
    });
  }, [ref]);
};

export default useTextReveal;
