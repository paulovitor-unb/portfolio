import ContactsList from "../Header/ContactsList";

function Footer() {
    return (
        <footer className="d-flex justify-content-around">
            <p>&copy; 2023 Paulo Vitor</p>
            <ContactsList />
        </footer>
    );
}
export default Footer;
