import SectionsList from "./SectionsList";
import ContactsList from "./ContactsList";

function Header() {
    return (
        <header>
            <nav>
                <SectionsList />
                <ContactsList />
            </nav>
        </header>
    );
}
export default Header;
