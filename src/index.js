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
        "Singh",
        "789 MG Road",
        "Mumbai",
        "Maharashtra",
        "400002",
        "9876543222",
        "kuldeep.singh@example.com"
    );

    // Adding contacts
    myAddressBook.addContact(contact1);
    myAddressBook.addContact(contact2);
    myAddressBook.addContact(contact3);

    // Display all contacts
    myAddressBook.displayContacts();
    console.log(`Total Contacts: ${myAddressBook.getContactCount()}`);

    // Search Contacts by City
    console.log("\n Searching for contacts in 'Mumbai':");
    myAddressBook.searchByCityOrState("Mumbai");

    // Search Contacts by State
    console.log("\n Searching for contacts in 'Delhi':");
    myAddressBook.searchByCityOrState("Delhi");

} catch (error) {
    console.log(error.message);
}
