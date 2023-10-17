# team_profile_generator
Description
The Team Profile Generator is a command-line application that allows you to input information about your development team members, including managers, engineers, and interns. The application collects and stores this information and then generates an HTML representation of your team for easy viewing and sharing.

## Features
-Gather information about team members.
-Create objects for each team member.
-Input data for Managers, Engineers, and Interns.
-Generate an HTML page with team member information.

## Installation
Clone the repository to your local machine
Install the required dependencies:
-npm install inquirer@6.3.1
-npm install jest (to test the classes)

## Usage
To start the application, run the following command in the terminal:
node index.js

-Follow the prompts to input information about your team members, including managers, engineers, and interns.

-When you are finished entering team member information, select "Finish building the team."

-The application will generate an HTML file in the "output" directory.

-Open the HTML file in a web browser to view your team profile.

## Testing with Jest

This project uses Jest for testing the classes, which cover the Employee, Manager, Engineer, and Intern classes. All tests have passed successfully.

To run the tests, use the following command:
npm run test

## Screenshots
Input Example
![Input Example](/assets/Untitled.png)

HTML Output in Browser
![HTML Output in Browser](/assets/Untitled2.png)


Disclaimer: You can find a sample generated in the output directory in the repo! 

License
This project is licensed under the MIT License.