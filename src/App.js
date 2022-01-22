import { useState, useEffect } from "react";
import { useMemo } from "react";
import Section from "./components/Sections/Sections";
import Addcontact from "./components/Addcontact/Addcontact";
import ConctactsList from "./components/Contact/ConctactList";
import Filter from "./components/Filter/Filte.js";
import { nanoid } from "nanoid";

export default function App() {
  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  };

  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const formSubmitHandler = (data) => {
    let isUniqueName = contacts.find((elem) => elem.name.includes(data.name));
    if (!isUniqueName) {
      const userId = { id: nanoid() };
      setContacts((contacts) => [...contacts, { ...userId, ...data }]);
    } else {
      alert({
        title: "Alert",
        text: `${isUniqueName.name} is already in contacts`,
      });
    }
  };
  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filterContact = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }, [contacts, filter]);

  return (
    <>
      <Section title="PhoneBook">
        <Addcontact onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contact">
        <Filter value={filter} onChange={handleChange} />
        <ConctactsList contacts={filterContact} deleteContact={deleteContact} />
      </Section>
    </>
  );
}
