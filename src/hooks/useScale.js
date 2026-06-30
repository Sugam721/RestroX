import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScale = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,

      {
        scale: 0.8,
      },

      {
        scale: 1,

        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          scrub: true,
        },
      },
    );
  }, [ref]);
};

export default useScale;
