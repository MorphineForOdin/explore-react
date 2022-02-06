import React from 'react';

const AppContext = React.createContext({
    showLoader: false,
    setShowLoader: (_: any) => { }
});

export default AppContext;