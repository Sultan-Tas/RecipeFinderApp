import {useEffect, useState} from "react";

export const useDebounce = (value, delay = 500) => {
    const[debouncedValue, setDebounced] = useState(value)

    useEffect(() =>{
        const timer = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(timer)
    }, [value])

    return debouncedValue
}

export default useDebounce;