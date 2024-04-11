import { useState, useEffect } from "react";

const useCalculatedMargins = (
  leftRef: React.MutableRefObject<HTMLDivElement|HTMLAnchorElement>,
  rightRef: React.MutableRefObject<HTMLDivElement|HTMLAnchorElement>
) => {
  const [margins, setMargins] = useState({ right: 0, left: 0 });
  useEffect(() => {
    if (leftRef.current && rightRef.current) {
      setMargins({
        left: leftRef.current.offsetWidth,
        right: rightRef.current.offsetWidth,
      });
    }
  }, [leftRef, rightRef]);

  return margins;
};

export default useCalculatedMargins;
