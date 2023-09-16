/* 
Filename: complexCode.js
Description: This code demonstrates a complex implementation of a file management system using JavaScript.
*/

// Utility Functions
function generateRandomId() {
    let randomId = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 10;

    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomId;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// File Class
class File {
    constructor(name, size, type) {
        this.id = generateRandomId();
        this.name = name;
        this.size = size;
        this.type = type;
        this.createdAt = new Date();
        this.updatedAt = this.createdAt;
    }

    update() {
        this.updatedAt = new Date();
    }

    getInfo() {
        return `
        ID: ${this.id}
        Name: ${this.name}
        Size: ${this.size} KB
        Type: ${this.type}
        Created At: ${formatDate(this.createdAt)}
        Updated At: ${formatDate(this.updatedAt)}
        `;
    }
}

// Folder Class
class Folder {
    constructor(name) {
        this.id = generateRandomId();
        this.name = name;
        this.createdAt = new Date();
        this.updatedAt = this.createdAt;
        this.files = [];
    }

    addFile(file) {
        this.files.push(file);
        this.updatedAt = new Date();
    }

    deleteFile(id) {
        this.files = this.files.filter(file => file.id !== id);
        this.updatedAt = new Date();
    }

    getFile(id) {
        return this.files.find(file => file.id === id);
    }

    getInfo() {
        let filesInfo = "";
        this.files.forEach(file => {
            filesInfo += `
            ${file.getInfo()}
            -------------------------------
            `;
        });

        return `
        ID: ${this.id}
        Name: ${this.name}
        Created At: ${formatDate(this.createdAt)}
        Updated At: ${formatDate(this.updatedAt)}
        
        Files:
        -------------------------------
        ${filesInfo}
        `;
    }
}

// Demo
const mainFolder = new Folder("Main Folder");
const subFolder1 = new Folder("Subfolder 1");
const subFolder2 = new Folder("Subfolder 2");

const file1 = new File("Document 1", 100, "PDF");
subFolder1.addFile(file1);

const file2 = new File("Image 1", 50, "JPEG");
subFolder1.addFile(file2);

const file3 = new File("Spreadsheet 1", 150, "XLSX");
subFolder2.addFile(file3);

mainFolder.addFile(subFolder1);
mainFolder.addFile(subFolder2);

// Output
console.log(mainFolder.getInfo());