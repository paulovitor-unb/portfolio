import { useState } from "react";

function NavButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
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
            {[...Array(3).keys()].map((index) => (
                <span key={index} className="w-100 bg-dark"></span>
            ))}
        </button>
    );
}
export default NavButton;
