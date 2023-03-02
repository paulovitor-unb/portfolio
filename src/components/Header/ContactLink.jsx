import { useContext } from "react";

import { DeviceContext } from "../../App";

function ContactLink({ site, title, icon, url }) {
    const isPhone = useContext(DeviceContext);

    return (
        <li title={site || title}>
            <a href={url} target="_blank" rel="noreferrer">
                <i
                    className={`bi bi-${icon || site.toLowerCase()} ${
                        isPhone ? "fs-1" : "fs-2"
                    }`}
                ></i>
            </a>
        </li>
    );
}
export default ContactLink;
