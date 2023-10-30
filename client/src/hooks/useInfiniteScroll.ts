import { useCallback, useRef } from 'react';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';

interface useInfiniteScrollProps {
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<any, any>>;
  hasNextPage: boolean | undefined;
}

const useInfiniteScroll = ({ fetchNextPage, hasNextPage }: useInfiniteScrollProps) => {
  const ref = useRef<IntersectionObserver | null>(null);

  const observeRef = useCallback(
    (node: Element | null) => {
      if (ref.current) {
        ref.current.disconnect();
      }

      ref.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) {
        ref.current?.observe(node);
      }
    },
    [fetchNextPage, hasNextPage]
  );

  return observeRef;
};

export default useInfiniteScroll;
