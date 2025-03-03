class AddressBook {
    constructor() {
        this.contacts = []; // Array to store multiple contacts
    }

    addContact(contact) {
        // Check if contact already exists
        if (this.contacts.some(c => c.email === contact.email)) {
            console.log(`Contact with email ${contact.email} already exists!`);
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found!");
            return;
        }

        console.log("Contact List:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. Name: ${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phone}, Email: ${contact.email}`);
        });
    }
}

module.exports = AddressBook;
