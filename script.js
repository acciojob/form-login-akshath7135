function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Access the input fields using document.querySelector
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();

    // Concatenate the values into "FirstName LastName"
    const fullName = `${firstName} ${lastName}`;

    // Display an alert with the full name
    alert(fullName);
}