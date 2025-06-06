# EmptyCup Frontend Assignment

This project is a mobile-friendly single-page web app that replicates the design provided in the Figma file for EmptyCup.  
It includes a shortlist toggle functionality implemented in JavaScript and loads listing data from a static JSON file.

---

## How to Run Locally

### Option 1: Open directly in Browser
- Simply open `index.html` in your preferred browser by double-clicking the file.

### Option 2: Run a local HTTP server (recommended for full functionality)
You can serve the files using Python or Node.js to avoid CORS issues when loading JSON.

#### Using Python 3
1. Open a terminal/command prompt in the project folder.
2. Run:  python -m http.server 8000
3. Open your browser and go to: `http://localhost:8000`

#### Using Node.js (http-server)
1. Make sure Node.js is installed.
2. Open terminal/command prompt in the project folder.
3. Run:npx http-server
4. Open your browser and go to the URL displayed in the terminal.

---

## Features

- Pixel-perfect UI matching the Figma design.
- Shortlist toggle buttons for each listing (icon switches between filled and line versions).
- “Shortlisted” filter toggle to view only shortlisted listings.
- Listing data loaded dynamically from `listings.json`.

---

## Deployment

- The frontend code is deployed and publicly accessible via Netlify at:  
[https://emptycup-landing-page.netlify.app/](https://emptycup-landing-page.netlify.app/)

---

## Notes

- Backend API and Docker deployment were planned but not implemented due to time constraints and environment setup issues.
- The current setup works fully as a static frontend app and can be run locally or on any static hosting service.

---

## Folder Structure

emptycup-frontend/
├── assets/ # Icons and images
├── index.html # Main HTML file
├── style.css # Stylesheet
├── script.js # JavaScript for interactivity
├── listings.json # Static data file for listings
└── README.md # This file


---

## Contact

For any questions, feel free to reach me at: himanshusingh83683@gmail.com

