'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
type ClientIsolateProps = {
  suspense?: React.ReactNode;
} & PropsWithChildren;

function ClientIsolate({ children, suspense }: ClientIsolateProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : suspense;
}

export { ClientIsolate, type ClientIsolateProps };
