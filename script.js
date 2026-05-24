// ------------------------------
// Cloud Database Simulation
// ------------------------------

let database = [];

let idCounter = 1;

// ------------------------------
// Add Data Function
// ------------------------------

function addData() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message");

    // ------------------------------
    // Validation Check
    // ------------------------------

    if(name === "" || email === "" || phone === ""){
        message.innerHTML = "❌ Please fill all fields.";
        message.style.color = "red";
        return;
    }

    // ------------------------------
    // Detect Redundant Data
    // ------------------------------

    const duplicate = database.find(user =>
        user.email === email || user.phone === phone
    );

    // ------------------------------
    // Duplicate Found
    // ------------------------------

    if(duplicate){

        message.innerHTML = "⚠️ Redundant Data Detected! Duplicate entry blocked.";
        message.style.color = "red";

        addRow({
            id: "-",
            name,
            email,
            phone,
            status: "Duplicate"
        });

        clearInputs();
        return;
    }

    // ------------------------------
    // Store Unique Verified Data
    // ------------------------------

    const newUser = {
        id: idCounter++,
        name,
        email,
        phone,
        status: "Unique"
    };

    database.push(newUser);

    message.innerHTML = "✅ Unique verified data added successfully.";
    message.style.color = "green";

    addRow(newUser);

    clearInputs();
}

// ------------------------------
// Add Row To Table
// ------------------------------

function addRow(data){

    const tableBody = document.getElementById("tableBody");

    const row = `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td class="${data.status === 'Unique' ? 'unique' : 'duplicate'}">
                ${data.status}
            </td>
        </tr>
    `;

    tableBody.innerHTML += row;
}

// ------------------------------
// Clear Inputs
// ------------------------------

function clearInputs(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}