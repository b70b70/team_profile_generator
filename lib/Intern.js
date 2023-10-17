// Import the Employee class
const Employee = require('./Employee');

// Define the Intern class, adding from Employee
class Intern extends Employee {
    // Constructor to set up intern-specific properties
    constructor(name, id, email, school) {
        // Call the parent class constructor (Employee) to set common properties
        super(name, id, email);

        // Set the 'school' property for the Intern
        this.school = school;
    }

    // Method to get the intern's school
    getSchool() {
        return this.school;
    }

    // Override the getRole method to return 'Intern'
    getRole() {
        return 'Intern';
    }
}

// Export the Intern class
module.exports = Intern;


// we import the Employee class, create the Intern class that extends Employee, and add the school property and the overridden getRole method. This makes the Intern class inherit all the properties and methods from the Employee class while adding its own specific properties and methods.
