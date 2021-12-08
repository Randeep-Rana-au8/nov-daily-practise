import React, { useEffect, useState } from "react";

function Timeout() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return <h1>{counter}</h1>;
}

export default Timeout;
