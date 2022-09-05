import { useState } from "react";

export function useCounter() {

    const [count, setCount] = useState(0);

    function sumState() {

        if (count >= 5) {
            return;
        }
        
        return setCount(count + 1);
    }

    function subState() {

        if (count <= 0)
            return;

        return setCount(count - 1);
    }

    return [count, sumState, subState];
}