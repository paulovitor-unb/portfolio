import SectionLink from "./SectionLink";

function SectionsList() {
    return (
        <ul>
            <SectionLink section="Home" />
            <SectionLink section="About" />
            <SectionLink section="Projects" />
        </ul>
    );
}
export default SectionsList;
