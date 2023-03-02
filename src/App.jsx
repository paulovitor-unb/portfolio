import { createContext, useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

export const DeviceContext = createContext(null);

function App() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        setIsPhone(mediaQuery.matches);

        mediaQuery.addEventListener("change", () => {
            setIsPhone(mediaQuery.matches);
        });
    }, []);

    return (
        <DeviceContext.Provider value={isPhone}>
            <Header />
            <Main />
            <Footer />
        </DeviceContext.Provider>
    );
}
export default App;
