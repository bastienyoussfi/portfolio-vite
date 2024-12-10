export const useScrollTo = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (elementId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return scrollTo;
};
