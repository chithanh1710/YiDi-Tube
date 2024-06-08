import { ReactNode } from "react";

export default function SlideCategoryPills({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="sticky top-0 bg-white z-10 pb-4">{children}</div>;
}
