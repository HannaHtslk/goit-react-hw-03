import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <Contact data={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
