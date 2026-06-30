import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useFadeUp = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: options.y || 80,
      opacity: 0,

      duration: options.duration || 1,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ref.current,
        start: options.start || "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, [ref]);
};

export default useFadeUp;
