import { useEffect } from 'react';
import Spinner from './Spinner';

export default function Loader() {
    useEffect(() => {
        const onFadeInHandler = (event: any) => {
            if (event.animationName === 'fade-in')
                event.target.classList.add('did-fade-in');
        }
        const onFadeOutHandler = (event: any) => {
            if (event.animationName === 'fade-out')
                event.target.classList.remove('did-fade-in');
        }
        document.addEventListener('animationstart', onFadeInHandler);
        document.addEventListener('animationend', onFadeOutHandler);

        return () => {
            document.removeEventListener('animationstart', onFadeInHandler);
            document.removeEventListener('animationend', onFadeOutHandler);
        }
    }, []);

    return (
        <div id="fullScreenLoader">
            <Spinner size="global" />
        </div>
    );
}