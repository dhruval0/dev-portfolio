"use client";

import { useState } from "react";

export function usePolaroidPortrait() {
  const [failed, setFailed] = useState(false);

  return {
    failed,
    onImageError: () => setFailed(true),
  };
}
