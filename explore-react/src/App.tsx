import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from './contexts/appContext';
import AuthGuard from './guards/AuthGuard';
import Footer from './core/Footer';
import Header from './core/Header';
import NotFound from './core/NotFound';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Loader from './core/Loader';

export default function App() {
    const [showLoader, setShowLoader] = useState(false);

    const appSettings = {
        showLoader: showLoader,
        setShowLoader
    };

    return (
        <AppContext.Provider value={appSettings}>
            <Loader />
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
        </AppContext.Provider>
    );
}