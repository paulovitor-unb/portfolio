import { useContext, useState, useEffect } from "react";

import { DeviceContext } from "../../App";
import Capitalize from "../../services/Capitalize";
import SectionLink from "./SectionLink";

function SectionsNav() {
    const isPhone = useContext(DeviceContext);
    const [sectionsList, setSectionsList] = useState([]);

    useEffect(() => {
        const mainSections = Array.from(
            document.querySelectorAll("main section")
        );

        setSectionsList(mainSections.map((section) => Capitalize(section.id)));
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
