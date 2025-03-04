class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Prevent Duplicate Contacts
    addContact(contact) {
        const isDuplicate = this.contacts.some(
            (c) => `${c.firstName} ${c.lastName}`.toLowerCase() === `${contact.firstName} ${contact.lastName}`.toLowerCase()
        );

        if (isDuplicate) {
            console.log(`Duplicate entry! Contact '${contact.firstName} ${contact.lastName}' already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    findContactByName(name) {
        return this.contacts.find(
            (contact) => `${contact.firstName} ${contact.lastName}`.toLowerCase() === name.toLowerCase()
        );
    }

    editContact(name, updatedContact) {
        const index = this.contacts.findIndex(
            (contact) => `${contact.firstName} ${contact.lastName}`.toLowerCase() === name.toLowerCase()
        );

        if (index === -1) {
            console.log(`Contact with name '${name}' not found!`);
            return;
        }

        this.contacts[index] = updatedContact;
        console.log(`Contact '${name}' updated successfully!`);
    }

    deleteContact(name) {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(
            (contact) => `${contact.firstName} ${contact.lastName}`.toLowerCase() !== name.toLowerCase()
        );

        if (this.contacts.length < initialLength) {
            console.log(`Contact '${name}' deleted successfully!`);
        } else {
            console.log(`Contact '${name}' not found!`);
        }
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found!");
            return;
        }
        console.log("Contact List:");
        this.contacts.forEach((contact, index) => {
            console.log(
                `${index + 1}. Name: ${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phone}, Email: ${contact.email}`
            );
        });
    }

    getContactCount() {
        return this.contacts.length;
    }

    searchByCityOrState(location) {
        const results = this.contacts.filter(contact => 
            contact.city.toLowerCase() === location.toLowerCase() || 
            contact.state.toLowerCase() === location.toLowerCase()
        );
    
        if (results.length === 0) {
            console.log(`No contacts found in '${location}'`);
            return;
        }
    
        console.log(`Contacts in '${location}':`);
        results.forEach((contact, index) => {
            console.log(`${index + 1}. Name: ${contact.firstName} ${contact.lastName}, Address: ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, Phone: ${contact.phone}, Email: ${contact.email}`);
        });
    }

    viewPersonsByCityOrState() {
        const groupedByCity = this.contacts.reduce((acc, contact) => {
            if (!acc[contact.city]) {
                acc[contact.city] = [];
            }
            acc[contact.city].push(contact.getFullName());
            return acc;
        }, {});

        const groupedByState = this.contacts.reduce((acc, contact) => {
            if (!acc[contact.state]) {
                acc[contact.state] = [];
            }
            acc[contact.state].push(contact.getFullName());
            return acc;
        }, {});

        console.log("\nContacts Grouped by City:");
        Object.entries(groupedByCity).forEach(([city, names]) => {
            console.log(`${city}: ${names.join(", ")}`);
        });

        console.log("\nContacts Grouped by State:");
        Object.entries(groupedByState).forEach(([state, names]) => {
            console.log(`${state}: ${names.join(", ")}`);
        });
    }
}

module.exports = AddressBook;
