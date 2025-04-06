import React from "react";
import people from "../../assets/people.svg";
import phone from "../../assets/phone.svg";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <div>
        <span className={styles.line}>
          <img src={people} alt="people" />
          <p className={styles.text}>{name}</p>
        </span>
        <span className={styles.line}>
          <img src={phone} alt="phone" />
          <p className={styles.text}>{number}</p>
        </span>
      </div>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={styles.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
