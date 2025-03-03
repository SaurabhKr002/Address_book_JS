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

    const contact3 = new Contact(
        "Kuldeep",
        "Yadav",
        "789 Sector 22",
        "Noida",
        "Uttar Pradesh",
        "201301",
        "9876543212",
        "kuldeep.yadav@example.com"
    );

    // Adding contacts to the address book
    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);
    myAddressBook.addContact(contact3);

    // Displaying contacts
    myAddressBook.displayContacts();
} catch (error) {
    console.log(error.message);
}
