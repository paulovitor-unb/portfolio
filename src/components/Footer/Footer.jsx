import { useContext } from "react";

import { DeviceContext } from "../../App";
import ContactsNav from "../Header/ContactsNav";

function Footer() {
    const isPhone = useContext(DeviceContext);

    return (
        <footer className="py-3">
            <div className="wrapper d-flex align-items-center justify-content-around">
                <span>&copy; 2023 Paulo Vitor</span>
                {isPhone ? null : <ContactsNav />}
            </div>
        </footer>
    );
}
export default Footer;
