class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
            return;
        }

        console.log("Contact List:");
        this.contacts.forEach((contact, index) => {
            console.log(
                `${index + 1}. Name: ${contact.firstName} ${contact.lastName}, ` +
                `Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ` +
                `Phone: ${contact.phone}, Email: ${contact.email}`
            );
        });
    }
}

module.exports = AddressBook;
