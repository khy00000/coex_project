import { useRef, useEffect, isValidElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeInGSAP = ({ children, delay = 0 }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay,
        duration: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      gsap.killTweensOf(el);
    };
  }, [delay]);

  // 자식이 단일 엘리먼트일 때만 작동하도록
  if (isValidElement(children)) {
    return cloneElement(children, { ref: sectionRef });
  }

  console.warn("단일 엘리먼트만 허용합니다.");
  return null;
};

export default FadeInGSAP;
