const useAuthService = () => {

    const ACCESS_TOKEN_KEY = 'access_token';

    const login = () => 
        new Promise((resolve, reject) => setTimeout(() => resolve('token'), 1000))
            .then(token => {
                if (!token) return false;
                window.localStorage.setItem(ACCESS_TOKEN_KEY, token as string);
                return true;
            });

    const logout = () => 
        new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 1000))
            .then(() => {
                window.localStorage.removeItem(ACCESS_TOKEN_KEY);
                return true;
            });

    const isAuthenticated = () => !!window.localStorage.getItem(ACCESS_TOKEN_KEY);

    return {
        login,
        logout,
        isAuthenticated
    }
}

export default useAuthService;