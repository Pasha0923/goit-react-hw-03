import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "./App.css";
import { nanoid } from "nanoid";

const contactsData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [filter, setFilter] = useState("");

  // Напишемо функцію яка описує додавання якихось нових об'єктів (поштової скриньки) до вже існуючого масиву в state
  const onAddNewContacts = (Data) => {
    const finalData = {
      ...Data,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, finalData]); // ✅
  };
  // Напишемо функцію яка описує видалення об'єктів () з існуючого масиву state
  const handleDelete = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };
  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddNewContacts={onAddNewContacts} />
        <SearchBox value={filter} onFilter={setFilter} />
        {/* // передамо стан contacts компоненті ContactList за допомогою пропса contacts */}
        <ContactList contacts={contacts} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
