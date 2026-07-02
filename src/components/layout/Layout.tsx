import type { PropsWithChildren } from "react";
import { LeftSidebar } from "../left-sidebar/LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className=" min-h-screen h-full grid grid-cols-[1fr_4fr_1.2fr]">
      <LeftSidebar />
      <main className=" py-6 px-4">
        {children}
      </main>
      <RightSidebar />
    </div>
  );
}
