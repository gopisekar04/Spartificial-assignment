# Admin Dashboard Application

## Overview

This application is an admin dashboard built with React.js. It provides functionalities to manage users and posts with an easy-to-use interface. The dashboard includes a home page with key performance indicators (KPIs), and dedicated pages for listing users and posts.

## Features

1. **Home Page:**
   - Displays four KPI boxes:
     - Total Users
     - Total Posts
     - Users Active in the Last 24 Hours
     - Posts Published in the Last 24 Hours

2. **Users Listing Page:**
   - Shows two KPI boxes at the top:
     - Total Users
     - Users Active in the Last 24 Hours
   - Below the KPIs, a paginated list of users with columns:
     - User ID
     - Username
     - Name
     - Email
   - Each row includes control buttons:
     - Ban
     - Edit

3. **Post Listing Page:**
   - Functions similarly to the Users Listing Page.
   - Columns:
     - Post ID
     - Post Caption
     - Media URL
   - Each row includes control buttons:
     - Delete
     - Hide

4. **Navigation Bar:**
   - Located on the left side of all pages for easy navigation.

5. **Dummy Login Page:**
   - Includes email and password fields.
   - Accepts any set of credentials and navigates to the main admin dashboard upon successful login.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js (version 14 or later)
- npm or Yarn

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gopisekar04/Spartificial-assignment.git
   cd Spartificial-assignment
