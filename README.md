# Shayari Hub

Shayari Hub ek simple website hai jahan aapko har baar click karne par random shayari milti hai. Yeh project **HTML**, **CSS**, aur **JavaScript** ka use karke banaya gaya hai, jisme **Shayari API** se data fetch karke shayari ko display kiya jaata hai.

## Features

- **Random Shayari**: Har baar button press karne par random shayari milegi.
- **Responsive Design**: Bootstrap ka use karke website ko mobile-friendly aur responsive banaya gaya hai.
- **API Integration**: **Shayari API** ka use karke unlimited shayari fetch ki jaati hai.

## Prerequisites

Is project ko chalane ke liye aapko **API Key** ki zarurat padegi.

1. **Shayari API** ki **API Key** ko **RapidAPI** se obtain karein.
2. **API Key** ko `script.js` mein replace karein.

## Setup Instructions

### Step 1: Clone the repository

Apne local machine par repository clone karne ke liye:

git clone https://github.com/your-username/shayari-hub.git

### Step 2: Install dependencies

Is project mein external libraries jaise **Bootstrap** aur **jQuery** ko use kiya gaya hai jo CDN ke through load ho jaati hain. Aapko additional dependencies install karne ki zarurat nahi hai.

### Step 3: API Key Setup

- Shayari API ka use karne ke liye, aapko **RapidAPI** se API key leni hogi.
- API key ko aapko `script.js` mein update karna hoga:

```javascript
const headers = {
  'X-RapidAPI-Host': 'shayari.p.rapidapi.com',
  'X-RapidAPI-Key': 'your-api-key-here' // Replace with your API Key
};
