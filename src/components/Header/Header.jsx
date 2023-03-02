import { useContext, useState } from "react";

import { DeviceContext } from "../../App";
import SectionsNav from "./SectionsNav";
import ContactsNav from "./ContactsNav";

function Header() {
    const isPhone = useContext(DeviceContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="py-3">
            <div
                className={`wrapper d-flex ${
                    isPhone ? "flex-column" : "gap-5"
                }`}
            >
                <div className="d-flex align-items-center justify-content-around">
                    <h2 className="fw-bold">Portfolio</h2>
                    {isPhone ? (
                        <button
                            id="nav-button"
                            className={`p-0 d-flex flex-column justify-content-between bg-transparent border-0 ${
                                isOpen ? "active" : ""
                            }`}
                            data-bs-toggle="collapse"
                            data-bs-target="#nav-menu"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            {Array(3).fill(
                                <span className="w-100 bg-dark"></span>
                            )}
                        </button>
                    ) : null}
                </div>
                <div className={isPhone ? "collapse" : "d-block"} id="nav-menu">
                    <nav
                        className={`d-flex flex-column gap-3 ${
                            isPhone ? "mt-3" : ""
                        }`}
                    >
                        <SectionsNav />
                        {isPhone ? <ContactsNav /> : null}
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;
