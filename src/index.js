const Contact = require("./models/Contact");
const AddressBook = require("./services/AddressBook");

// Creating an instance of AddressBook
const myAddressBook = new AddressBook();

try {
    // Creating a new contact with valid/invalid details
    const contact1 = new Contact(
        "Saurabh",  // Valid
        "Kumar",    // Valid
        "123 Main St",  // Valid
        "New Delhi",    // Valid
        "Delhi",        // Valid
        "110001",       // Valid
        "9876543210",   // Valid
        "saurabh.kumar@example.com" // Valid
    );

    // Adding contact to address book
    myAddressBook.addContact(contact1);

    // Display all contacts
    myAddressBook.displayContacts();

} catch (error) {
    console.error("Error:", error.message);
}
