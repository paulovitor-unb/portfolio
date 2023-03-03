import { useContext } from "react";

import { DeviceContext } from "../App";

function Wrapper({ className, children }) {
    const isPhone = useContext(DeviceContext);

    return (
        <div
            className={`wrapper mx-auto p-3 d-flex align-items-center ${
                isPhone ? "flex-column" : ""
            } ${className}`}
        >
            {children}
        </div>
    );
}
export default Wrapper;
