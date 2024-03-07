import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setContacts(response.data.results);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      {error && <p>{error}</p>}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <img src={contact.picture.thumbnail} alt="Thumbnail" />
            <div>
              <p>Name: {contact.name.first} {contact.name.last}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
