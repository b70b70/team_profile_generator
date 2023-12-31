//  Create a constructor that accepts 'name', 'id', and 'email' as parameters:
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
   // Method to retrieve the employee's names
    getName() {
        return this.name;
    }
    // Method to retrieve the employee's ID
    getId() {
        return this.id;
    }
    // Method to retrieve the employee's email
    getEmail() {
        return this.email;
    }
     // Method to retrieve the employee's role
    getRole() {
        return 'Employee';
    }
}


// Export the 'Employee' class as a module for use elsewhere
module.exports = Employee;