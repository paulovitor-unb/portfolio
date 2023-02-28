function SectionLink({ section }) {
    return (
        <li>
            <a href={`#${section.toLowerCase()}`}>{section}</a>
        </li>
    );
}
export default SectionLink;
