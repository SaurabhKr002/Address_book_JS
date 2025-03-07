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
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            return acc;
        }, {});
    
        const groupedByState = this.contacts.reduce((acc, contact) => {
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});
    
        console.log("\nContacts Count by City:");
        Object.entries(groupedByCity).forEach(([city, count]) => {
            console.log(`${city}: ${count} contact(s)`);
        });
    
        console.log("\nContacts Count by State:");
        Object.entries(groupedByState).forEach(([state, count]) => {
            console.log(`${state}: ${count} contact(s)`);
        });
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found!");
            return;
        }
        console.log("Contact List:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
    
    // Sort Contacts Alphabetically by Name
    sortContactsByName() {
        this.contacts.sort((a, b) => a.getFullName().localeCompare(b.getFullName()));
        console.log("\nContacts Sorted Alphabetically:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }

    // Sorting Functions for UC12
    sortByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log("\nContacts Sorted by City:");
        this.displayContacts();
    }

    sortByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log("\nContacts Sorted by State:");
        this.displayContacts();
    }

    sortByZip() {
        this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
        console.log("\nContacts Sorted by Zip:");
        this.displayContacts();
    }
    
}

module.exports = AddressBook;
