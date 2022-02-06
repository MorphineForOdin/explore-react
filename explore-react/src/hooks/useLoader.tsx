import { useContext } from 'react';
import AppContext from '../contexts/appContext';

const useLoader = () => {
    const context = useContext(AppContext);

    const load = (handler: any) => {
        context.setShowLoader(true);
        return handler().finally(() => context.setShowLoader(false));
    }

    return {
        load
    }
}

export default useLoader;