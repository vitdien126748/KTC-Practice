import { ReactNode } from "react";
import { Providers } from "./provider";

export default function TaskManagementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
