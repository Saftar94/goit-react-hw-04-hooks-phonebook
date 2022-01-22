import styles from "./Addcontact.module.scss";
import { useState } from "react";

export default function Addcontact({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputName = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const HandelSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <form className={styles.Blockinput} onSubmit={HandelSubmit}>
      <label>
        <p>Name</p>
        <input
          className={styles.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputName}
        />
      </label>
      <label>
        <p>Number</p>
        <input
          className={styles.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputName}
        />
      </label>
      <button className={styles.Button} type="submit">
        Add contact
      </button>
    </form>
  );
}
