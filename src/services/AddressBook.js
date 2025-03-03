class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.email === contact.email)) {
            console.log(`Contact with email ${contact.email} already exists!`);
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    findContactByName(name) {
        return this.contacts.find(contact => 
            `${contact.firstName} ${contact.lastName}`.toLowerCase() === name.toLowerCase()
        );
    }

    editContact(name, updatedContact) {
        const index = this.contacts.findIndex(contact => 
            `${contact.firstName} ${contact.lastName}`.toLowerCase() === name.toLowerCase()
        );

        if (index === -1) {
            console.log(`Contact with name '${name}' not found!`);
            return;
        }

        this.contacts[index] = updatedContact;
        console.log(`Contact '${name}' updated successfully!`);
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
