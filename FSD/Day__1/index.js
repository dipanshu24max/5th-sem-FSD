const name = document.getElementById("name");
const btn = document.getElementById("btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const students = document.getElementById("students");

btn.addEventListener("click", () => {

    console.log(`Name -> ${name.value}`);
    console.log(`Email -> ${email.value}`);
    console.log(`Password -> ${password.value}`);

    students.innerHTML = `
        <h3>Student Details</h3>
        <p><strong>Name:</strong> ${name.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Password:</strong> ${password.value}</p>
    `;
});