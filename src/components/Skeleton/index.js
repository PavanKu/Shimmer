import React, { useEffect, useRef } from "react";
import "./Skeleton.css";

const Skeleton = ({ children, show }) => {
  const containerRef = useRef(null);

  const getLeafNodes = (ref) => {
    if (ref !== null) {
      const containerDOM = ref.current;
      const nodes = Array.prototype.slice.call(
        containerDOM.getElementsByTagName("*"),
        0
      );
      const leafElements = nodes.filter((node) => !node.children.length);
      return leafElements;
    }
  };

  useEffect(() => {
    const leafNodes = getLeafNodes(containerRef);
    leafNodes.forEach((node) => {
      node.setAttribute("data-loader", true);
    });
  }, []);

  let containerStyle = "opacity0"; // Till the component is not mounted
  if (containerRef !== null) {
    containerStyle = show ? "skeleton" : "";
  }
  return (
    <div ref={containerRef} className={containerStyle}>
      {children}
    </div>
  );
};

export default Skeleton;
