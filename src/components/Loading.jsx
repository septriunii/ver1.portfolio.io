import { useState, useEffect } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      let currentProgress = 0;

      const incrementInterval = setInterval(() => {
        if (currentProgress < 100) {
          setProgress(currentProgress);
          currentProgress += 1;
        } else {
          clearInterval(incrementInterval);
        }
      }, 10);

      return () => clearInterval(incrementInterval);
    }, 1100); // Delay start by 3 seconds

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <main className="h-1 w-auto bg-zinc-900">
      <section
        className="h-full bg-orange-600"
        style={{ width: `${progress}%` }}
      ></section>
    </main>
  );
};

export default Loading;
