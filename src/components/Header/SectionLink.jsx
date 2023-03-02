function SectionLink({ section }) {
    return (
        <li className="d-flex justify-content-center fs-4">
            <a href={`#${section.toLowerCase()}`} className="fw-semibold">
                {section}
            </a>
        </li>
    );
}
export default SectionLink;
