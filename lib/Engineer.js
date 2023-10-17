// Import the Employee class
const Employee = require('./Employee');

// Define the Engineer class, extending from Employee
class Engineer extends Employee {
    // Constructor to set up engineer-specific properties
    constructor(name, id, email, github) {
        // Call the parent class constructor (Employee) to set common properties
        super(name, id, email);

        // Set the 'github' property for the Engineer
        this.github = github;
    }

    // Method to get the engineer's GitHub username
    getGithub() {
        return this.github;
    }

    // Override the getRole method to return 'Engineer'
    getRole() {
        return 'Engineer';
    }
}

// Export the Engineer class
module.exports = Engineer;



// This makes the Engineer class inherit all the properties and methods from the Employee class while adding its own specific properties and methods.