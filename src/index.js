const Contact = require("./models/Contact");
const AddressBook = require("./services/AddressBook");

const myAddressBook = new AddressBook();

try {
    // Creating contacts
    const contact1 = new Contact(
        "Saurabh",
        "Kumar",
        "123 Main St",
        "New Delhi",
        "Delhi",
        "110001",
        "9876543210",
        "saurabh.kumar@example.com"
    );

    const contact2 = new Contact(
        "Anand",
        "Sharma",
        "456 Park Ave",
        "Mumbai",
        "Maharashtra",
        "400001",
        "9876543211",
        "anand.sharma@example.com"
    );

    // Adding contacts to the address book
    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);

    // Displaying contacts
    myAddressBook.displayContacts();

    // Editing "Saurabh Kumar"
    const updatedContact = new Contact(
        "Saurabh",
        "Kumar",
        "999 New St",
        "Gurgaon",
        "Haryana",
        "122001",
        "9876500000",
        "saurabh.kumar@example.com"
    );

    myAddressBook.editContact("Saurabh Kumar", updatedContact);

    // Display updated contacts
    myAddressBook.displayContacts();

    // Deleting "Saurabh Kumar"
    myAddressBook.deleteContact("Saurabh Kumar");

    // Display contacts after deletion
    myAddressBook.displayContacts();

} catch (error) {
    console.log(error.message);
}
