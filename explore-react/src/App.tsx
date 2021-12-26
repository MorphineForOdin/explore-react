import { Routes, Route } from 'react-router-dom';
import AuthGuard from './guards/AuthGuard';
import Footer from './core/Footer';
import Header from './core/Header';
import NotFound from './core/NotFound';
import Auth from './pages/Auth';
import Home from './pages/Home';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route
                    path="*"
                    element={
                        <AuthGuard>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            <Footer />
                        </AuthGuard>
                    }
                />
            </Routes>
        </>
    );
}