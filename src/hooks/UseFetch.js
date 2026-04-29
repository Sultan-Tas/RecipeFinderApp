import { useState, useEffect } from 'react';

export const useFetch = (fetchFunction, dependencies = []) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const result = await fetchFunction();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, dependencies);

    const refetch = () => {
        fetchData();
    };

    return { data, refetch };
};

export default useFetch;