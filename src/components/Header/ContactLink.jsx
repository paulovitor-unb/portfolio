function ContactLink({ site, title, icon, url }) {
    return (
        <li title={site || title}>
            <a href={url} target="_blank">
                <i className={`bi bi-${icon || site.toLowerCase()}`}></i>
            </a>
        </li>
    );
}
export default ContactLink;
