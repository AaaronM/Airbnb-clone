"use client";

import React, { Children, useEffect, useState } from "react";

interface CleientOnlyProps {
  children: React.ReactNode;
}

const CleientOnly: React.FC<CleientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default CleientOnly;
