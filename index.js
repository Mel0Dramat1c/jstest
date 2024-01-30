/**
 * Return a welcome message from a teacher to a student
 */
function welcomeMessage(studentFirstName, teacherName) {
    let message = `Hello ${studentFirstName},
    Welcome to a new school year!
    Your teacher,
    ${teacherName}`;
        return message;
}

const matildaWelcomeMessage = welcomeMessage("Matilda","Miss Jennifer Honey");
console.log(matildaWelcomeMessage);

const hannahWelcomeMessage = welcomeMessage( "Hannah", "Professor Sprout");
console.log(hannahWelcomeMessage);