import React, { useRef, useEffect } from 'react';

export function useDidMount() {
  const didMountRef = useRef(true);

  useEffect(() => {
    didMountRef.current = false;
  }, []);

  return didMountRef.current;
}
