import { ILazyLoadingWrapperProps } from "@app/components/layout/LazyLoadingWrapper/@types/LazyLoadingWrapper";
import { Loader } from "@app/components/molecules/Loader/Loader";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

export const LazyLoadingWrapper: React.FC<ILazyLoadingWrapperProps> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    fallbackInView: true,
    triggerOnce: true,
  });

  return (
    <Suspense fallback={<Loader />}>
      <div ref={ref}>{inView ? children : null}</div>
    </Suspense>
  );
};
