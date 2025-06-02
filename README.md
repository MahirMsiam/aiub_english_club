## 🌟 Overview

This repository contains the source code for the official website of the AIUB English Club, a student-led community at the American International University-Bangladesh (AIUB). The website aims to provide information about the club, its activities, events, team members, and a way for interested students to join.

The live website showcases the club's vision, mission, past events, and introduces the executive committee and various operational teams.

## ✨ Features

* **Homepage**: Engaging introduction with a dynamic image carousel.
    * One of the carousel slides links to a video showcasing AIUB's [Boishakh Utshab 1431 celebrations](https://www.youtube.com/watch?v=jIqyxYjVANY&t=1s).
* **Vision & Mission**: Clearly defined goals and objectives of the club.
* **About Us**: Detailed information about the club's purpose and activities.
* **Event Gallery**: A visually appealing gallery of past events with an auto-scrolling feature.
* **Our Teams**: Highlights the different operational teams within the club:
    * Communication Team
    * Public-Relations Team
    * Content & Media Team
    * Logistics Team
    * Management Team
* **Executive Committee**: Introduces the key members of the executive committee.
* **Join Section**: A registration form for students interested in joining the club (submission to a Google Apps Script). *Note: This section can be toggled on/off via a JavaScript variable.*
* **Member Statistics**: Animated display of current members, alumni, advisors, and executives.
* **Footer**:
    * Contact information (email).
    * Social media links (Facebook, LinkedIn, and the [AIUB English Club YouTube Channel](https://www.youtube.com/@AIUBEnglishClub)).
    * Embedded Google Map showing the [location of AIUB](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.900722021862!2d90.42483137592153!3d23.822129086017735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c711d13bbec7%3A0xc47f7c3e8e2263f2!2sAmerican%20International%20University%20-%20Bangladesh%20(AIUB)!5e0!3m2!1sen!2sbd!4v1747902375476!5m2!1sen!2sbd).
    * Developer credit.
* **Responsive Design**: Adapts to various screen sizes for optimal viewing on desktops, tablets, and mobile devices.

## 🛠️ Technologies Used

* **HTML5**: Structure of the website.
* **CSS3**: Styling and layout, including animations and responsive design.
* **JavaScript**: Interactive elements, animations, form submission, and dynamic content.
* **Bootstrap 5.3.3**: CSS framework for layout and components.
* **Font Awesome 6.5.0**: For social media and other icons.
* **Flickity 2.2.2**: Carousel library (linked in HTML, though custom JavaScript is primarily used for the event gallery scroll).
* **Google Apps Script**: Backend for the "Join Us" form submission.

## 📂 Project Structure

.
├── Images/         # Contains all images used in the website
│   ├── logo-white.png
│   ├── logo.png
│   ├── First.jpg
│   ├── Second.jpg
│   ├── Third.jpg
│   ├── Fourth.jpg
│   ├── group.jpg
│   ├── Events/
│   │   ├── englishquest.jpg
│   │   └── ... (other event images)
│   ├── Teams/
│   │   ├── communication.jpg
│   │   └── ... (other team images)
│   └── Committee/
│       ├── President.jpg
│       └── ... (other committee member images)
├── index.html      # Main HTML file
├── style.css       # CSS file for styling
└── script.js       # JavaScript file for interactivity


## 🚀 Usage

To view the website:

1.  Clone this repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3.  Open the `index.html` file in your web browser.

No special build steps are required as it's a static website.

## 📝 Join Section Configuration

The visibility of the "Join Us" registration form is controlled by the `registrationOpen` variable in `script.js`.
```javascript
// script.js
const registrationOpen = false; // Set to true to display the form, false to hide it.
