import { useContext } from "react";

import { DeviceContext } from "../../App";
import Wrapper from "../Wrapper";
import ContactsNav from "../Header/ContactsNav";

function Footer() {
    const isPhone = useContext(DeviceContext);

    return (
        <footer>
            <Wrapper className="justify-content-around">
                <span>&copy; 2023 Paulo Vitor</span>
                {isPhone ? null : <ContactsNav />}
            </Wrapper>
        </footer>
    );
}
export default Footer;
