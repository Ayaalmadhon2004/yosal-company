"use client";

import { RouteError } from "@/components/ui/RouteError";

export default function Error(props: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return <RouteError {...props} />;
}
