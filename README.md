# Data Redundancy Removal System

A simple web-based project that detects and removes redundant data entries before storing them in a simulated cloud database.

This system validates user input, checks for duplicate records, and only stores unique verified data to ensure database accuracy and efficiency.

---

## 🚀 Features

- Detects duplicate or redundant data entries
- Validates user input before submission
- Prevents duplicate data from being stored
- Stores only unique and verified records
- Displays database records dynamically
- Simple and responsive user interface
- Built using HTML, CSS, and JavaScript

---

## 📌 Project Objectives

✔ Design a system that identifies and classifies redundant data  
✔ Implement validation mechanisms for new data entries  
✔ Prevent duplicate data from entering the database  
✔ Append only verified and unique records  
✔ Improve database accuracy and efficiency  

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📂 Project Structure

```bash
Data-Redundancy-Removal-System/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ▶ How to Run the Project

1. Download or clone the repository

```bash
git clone https://github.com/your-username/data-redundancy-removal-system.git
```

2. Open the project folder

3. Run `index.html` in your browser

---

## 💻 System Workflow

1. User enters Name, Email, and Phone Number
2. System validates input fields
3. Existing records are checked
4. Duplicate entries are detected
5. Duplicate data is blocked
6. Unique verified data is added to the database
7. Database records are displayed in a table

---

## 🔒 Validation & Redundancy Detection

The system checks:

- Empty input fields
- Duplicate Email IDs
- Duplicate Phone Numbers

If duplicate data is detected:
- Entry is blocked
- User receives a warning message

If data is unique:
- Entry is stored successfully
- Status shown as "Unique"

---

## 📸 Sample Output

### Unique Data Entry
```text
✅ Unique verified data added successfully.
```

### Duplicate Data Entry
```text
⚠️ Redundant Data Detected! Duplicate entry blocked.
```

---

## 🎯 Future Improvements

- Connect with real cloud databases (MongoDB / Firebase / MySQL)
- Add login authentication
- Use AI/ML for advanced redundancy detection
- Add export/import functionality
- Improve security and encryption

---

## 👨‍💻 Author

Sachin G

---

## 📜 License

This project is free to use for educational purposes.
