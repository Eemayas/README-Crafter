import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    console.log("Clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-5 right-5">
          <ActionButton
            onClick={() => scrollToTop()}
            text={"↑"}
            className="rounded-full"
            innerClassName="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
