class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Validation Patterns
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Capital letter + min 3 chars
        const addressPattern = /^[a-zA-Z0-9\s]{4,}$/; // Min 4 chars
        const zipPattern = /^\d{6}$/; // 6-digit ZIP (India)
        const phonePattern = /^[6-9]\d{9}$/; // 10-digit Phone (Indian)
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/; // Valid email

        // Name Validation
        if (!namePattern.test(firstName)) {
            throw new Error("Invalid First Name (Capital & Min 3 chars required)");
        }
        if (!namePattern.test(lastName)) {
            throw new Error("Invalid Last Name (Capital & Min 3 chars required)");
        }

        // Address, City & State Validation
        if (!addressPattern.test(address)) {
            throw new Error("Invalid Address (Min 4 chars required)");
        }
        if (!addressPattern.test(city)) {
            throw new Error("Invalid City (Min 4 chars required)");
        }
        if (!addressPattern.test(state)) {
            throw new Error("Invalid State (Min 4 chars required)");
        }

        // Zip, Phone, and Email Validation
        if (!zipPattern.test(zip)) {
            throw new Error("Invalid Zip Code (Must be 6-digit)");
        }
        if (!phonePattern.test(phone)) {
            throw new Error("Invalid Phone Number (Must be 10-digit Indian number)");
        }
        if (!emailPattern.test(email)) {
            throw new Error("Invalid Email Address");
        }

        // Assign values if all validations pass
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

module.exports = Contact;