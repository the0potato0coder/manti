"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function VisualEditsMessenger() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;

    window.parent.postMessage(
      {
        type: "ROUTE_CHANGE",
        href: url,
      },
      "*"
    );
  }, [pathname, searchParams]);

  return null;
}
