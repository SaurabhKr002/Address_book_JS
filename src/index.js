const Contact = require("./models/Contact");
const AddressBook = require("./services/AddressBook");

const myAddressBook = new AddressBook();

// Adding Contacts
try {
    myAddressBook.addContact(new Contact("Saurabh", "Kumar", "123 Main St", "New Delhi", "Delhi", "110001", "9876543210", "saurabh.kumar@example.com"));
    myAddressBook.addContact(new Contact("Anand", "Sharma", "456 Park Ave", "Mumbai", "Maharashtra", "400001", "9876543211", "anand.sharma@example.com"));
    myAddressBook.addContact(new Contact("Kuldeep", "Singh", "789 MG Road", "Mumbai", "Maharashtra", "400002", "9876543222", "kuldeep.singh@example.com"));
} catch (error) {
    console.log(error.message);
}

// Displaying Contacts
myAddressBook.displayContacts();
console.log(`\nTotal Contacts: ${myAddressBook.getContactCount()}`);

// Searching Contacts by City or State
console.log("\n Searching for contacts in 'Mumbai':");
myAddressBook.searchByCityOrState("Mumbai");

console.log("\n Searching for contacts in 'Delhi':");
myAddressBook.searchByCityOrState("Delhi");

// Viewing Persons Grouped by City and State
console.log("\n Viewing persons by City and State:");
myAddressBook.viewPersonsByCityOrState();
