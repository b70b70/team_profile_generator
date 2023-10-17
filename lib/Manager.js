// Import the Employee class
const Employee = require('./Employee');

// Define the Manager class, extending from Employee
class Manager extends Employee {
    // Constructor to set up manager-specific properties
    constructor(name, id, email, officeNumber) {
        // Call the parent class constructor (Employee) to set common properties
        super(name, id, email);
        if (typeof officeNumber !== 'number') {
            throw new Error('Invalid input format. Office number should be a number.');
        }

        // Set the 'officeNumber' property for the Manager
        this.officeNumber = officeNumber;
    }

    // Override the getRole method to return 'Manager'
    getRole() {
        return 'Manager';
    }

    // Method to get the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export the Manager class
module.exports = Manager;


// This code structure maintains the inheritance of the Employee class, adds the officeNumber property, and overrides the getRole method