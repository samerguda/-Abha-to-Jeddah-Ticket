// Function to update the current date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = formattedDateTime;
}

// Function to print the page
function printPage() {
    window.print();
}

// Function to copy content
function copyContent() {
    const content = document.querySelector('.container').innerText;
    navigator.clipboard.writeText(content).then(() => {
        alert('Content copied to clipboard');
    });
}

// Function to send content via WhatsApp
function sendWhatsApp() {
    const content = document.querySelector('.container').innerText;
    const url = `https://wa.me/?text=${encodeURIComponent(content)}`;
    window.open(url, '_blank');
}

// Function to send content via Email
function sendEmail() {
    const content = document.querySelector('.container').innerText;
    const mailtoLink = `mailto:?subject=Lisbon Abha to Jeddah&body=${encodeURIComponent(content)}`;
    window.open(mailtoLink, '_self');
}

// Initialize the current date and time
updateDateTime();

// Set written date (you can customize the date here)
document.getElementById('written-date').textContent = "August 17, 2024";
