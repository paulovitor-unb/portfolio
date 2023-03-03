import { useContext } from "react";

import { DeviceContext } from "../../App";
import SectionsNav from "./SectionsNav";
import ContactsNav from "./ContactsNav";

function NavMenu() {
    const isPhone = useContext(DeviceContext);

    return (
        <div id="nav-menu" className={isPhone ? "collapse" : "d-block"}>
            <nav
                className={`d-flex flex-column gap-3 ${isPhone ? "mt-3" : ""}`}
            >
                <SectionsNav />
                {isPhone ? <ContactsNav /> : null}
            </nav>
        </div>
    );
}
export default NavMenu;
