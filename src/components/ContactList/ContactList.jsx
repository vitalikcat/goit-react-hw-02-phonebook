import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactsList = ({ items, onDeleteContact }) => (
  <div>
    {items.length > 0 && (
      <ul>
        {items.map(({ id, name, number }) => (
          <li className={styles.li} key={id}>
            {`${name}: ${number}`}
            <button
              className={styles.button}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ContactsList;
