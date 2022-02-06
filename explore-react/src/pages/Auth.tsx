import { useNavigate } from 'react-router-dom';
import useLoader from '../hooks/useLoader';
import useAuthService from '../services/useAuthService';

export default function Auth() {
    const navigate = useNavigate();
    const authService = useAuthService();

    const { load } = useLoader();

    const onSignupClick = () =>
        load(() => authService.login())
            .then((_: any) => navigate(-1))
            .catch((error: any) => console.log(error));

    return (
        <div className="auth-form">
            <div>
                <h1 data-tooltip="long, very long tooltip tooltip tooltip...">Sign Up</h1>
            </div>
            <div>
                <p data-tooltip="small tooltip">
                    In order to have any access, you have to authenticate your identity.
                </p>
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    id="authEmail"
                    className="form-input"
                    placeholder=" "
                    autoComplete="off"
                    tabIndex={1} />
                <label htmlFor="authEmail" className="form-label">Email</label>
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    id="authPassword"
                    className="form-input"
                    placeholder=" "
                    autoComplete="off"
                    tabIndex={2} />
                <label htmlFor="authPassword" className="form-label">Password</label>
            </div>
            <button
                className="form-button"
                onClick={onSignupClick}
                tabIndex={3}>Sign Up</button>
        </div>
    );
}