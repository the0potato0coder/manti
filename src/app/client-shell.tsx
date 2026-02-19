"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ErrorReporter />
      {children}
      <Toaster position="top-center" />
      <VisualEditsMessenger />
    </>
  );
}
