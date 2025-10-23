'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
type IsolateClientProps = {
  suspense?: React.ReactNode;
} & PropsWithChildren;

function IsolateClient({ children, suspense }: IsolateClientProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? children : suspense;
}

export { IsolateClient, type IsolateClientProps };
