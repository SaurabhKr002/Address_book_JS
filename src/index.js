const Contact = require("./models/Contact");
const AddressBook = require("./services/AddressBook");

// Creating an instance of AddressBook
const myAddressBook = new AddressBook();

// Creating a new contact
const contact1 = new Contact(
    "Saurabh",
    "Kumar",
    "123 Main St",
    "New Delhi",+
    "Delhi",
    "110001",
    "9876543210",
    "saurabh.kumar@example.com"
);

// Adding contact to address book
myAddressBook.addContact(contact1);

// Display all contacts
myAddressBook.displayContacts();
