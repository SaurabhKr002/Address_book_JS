const Contact = require("../models/Contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a new contact
    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } else {
            console.log("Invalid contact object!");
        }
    }

    // Display all contacts
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.toString()}`);
            });
        }
    }
}

module.exports = AddressBook;
