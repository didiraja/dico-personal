import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);

  function setState(value: number): void {
    return setCount(value);
  }

  function sumState() {
    if (count >= 5) {
      return 0;
    }

    return setCount(count + 1);
  }

  function subState() {
    if (count <= 0) return 0;

    return setCount(count - 1);
  }

  return [count, setState, sumState, subState];
}
