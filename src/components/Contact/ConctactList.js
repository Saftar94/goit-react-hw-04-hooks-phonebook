import PropTypes from "prop-types";
import Contact from "./Contact";
import styles from "./Contact.module.scss";
const ConctactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.Ulist}>
      {contacts.length > 0 &&
        contacts.map((item) => (
          <Contact
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
};
ConctactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ConctactsList;
