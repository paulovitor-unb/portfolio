import { useContext } from "react";

import { DeviceContext } from "../../App";
import Wrapper from "../Wrapper";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

function Header() {
    const isPhone = useContext(DeviceContext);

    return (
        <header className="position-sticky top-0">
            <Wrapper>
                <div
                    className={`d-flex align-items-center justify-content-around ${
                        isPhone ? "w-100" : "me-5"
                    }`}
                >
                    <h2 className="fw-bold">Portfolio</h2>
                    {isPhone ? <NavButton /> : null}
                </div>
                <NavMenu />
            </Wrapper>
        </header>
    );
}
export default Header;
