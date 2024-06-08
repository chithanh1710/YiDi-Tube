import { ReactNode } from "react";

export default function VideoGridList({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {children}
    </div>
  );
}
