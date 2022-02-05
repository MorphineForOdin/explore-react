import { useState } from 'react';

const useLoader = () => {

    const [loading, setLoading] = useState(false);

    return {
        loading
    }
}

export default useLoader;