import { useContext, useState, useEffect } from "react";

import { DeviceContext } from "../../App";
import SectionLink from "./SectionLink";

function SectionsNav() {
    const isPhone = useContext(DeviceContext);
    const [sectionsList, setSectionsList] = useState([]);

    useEffect(() => {
        setSectionsList(
            Array.from(document.querySelectorAll("main section")).map(
                (element) =>
                    element.id.charAt(0).toUpperCase() + element.id.slice(1)
            )
        );
    }, []);

    return (
        <ul className={`d-flex ${isPhone ? "flex-column gap-1" : "gap-3"}`}>
            {sectionsList.map((section) => (
                <SectionLink key={section} section={section} />
            ))}
        </ul>
    );
}
export default SectionsNav;
