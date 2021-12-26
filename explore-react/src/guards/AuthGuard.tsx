import { Navigate } from 'react-router-dom';
import useAuthService from '../services/useAuthService';

const AuthGuard = ({ children }: { children: any }) => {
    const authService = useAuthService();

    return authService.isAuthenticated()
        ? children
        : <Navigate to="/auth" />;
}

export default AuthGuard;