import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
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
