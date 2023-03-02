import ContactLink from "./ContactLink";

function ContactsNav() {
    return (
        <ul className="d-flex justify-content-center gap-3">
            <ContactLink
                site="LinkedIn"
                url="https://www.linkedin.com/in/paulo-vitor-dos-santos/"
            />
            <ContactLink site="WhatsApp" url="https://wa.me/5561996950062" />
            <ContactLink
                site="Telegram"
                url="https://telegram.me/PauloVdosSantos"
            />
            <ContactLink
                title="Email"
                icon="envelope-at"
                url="mailto:paulv.dossantos@gmail.com"
            />
            <ContactLink
                title="Phone"
                icon="telephone"
                url="tel:+5561996950062"
            />
            <ContactLink
                site="GitHub"
                url="https://github.com/paulovitor-unb"
            />
            <ContactLink
                site="YouTube"
                url="https://www.youtube.com/@paulovitordossantos5938/videos"
            />
        </ul>
    );
}
export default ContactsNav;
