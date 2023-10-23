import { RefObject, useEffect, useState } from 'react';

const useInfiniteScroll = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting);
    },
    { threshold: 1 }
  );

  useEffect(() => {
    const observeRef = ref.current;
    if (observeRef) {
      observer.observe(observeRef);
    }

    return () => {
      if (observeRef) {
        observer.unobserve(observeRef);
      }
    };
  }, []);

  return isIntersecting;
};

export default useInfiniteScroll;
