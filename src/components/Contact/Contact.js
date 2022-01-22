import PropTypes from "prop-types";
import styles from "./Contact.module.scss";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      <p>
        <span className={styles.Name}>{name}:</span>
        <span className={styles.Number}>{number}</span>
      </p>
      <button className={styles.Delete} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default Contact;
