# Nory Inventory Management App

## Overview

This is an inventory management application designed for the fictional restaurant chain "Weird Salads". The application helps manage inventory more efficiently across multiple locations.

### Technology Choices

- **Next.js**: Chosen because it allows both API and UI to be developed in the same place, which is efficient when timelines are tight.
- **JavaScript**: Used for both front-end and back-end due to its versatility and my familiarity with it.
- **SQLite**: A relational database was chosen because the data was relational in nature.
- **Tailwind CSS**: Installed because I can work more quickly with it for styling.
- **Excalidraw**: Used for quick and rough designs due to its ease of use.

## Designs

### Initial Drawing

![Initial Drawing](designs/Landing-Page-Design.png)

### Redesigned Home Page

![Redesigned Home Page](designs/Redesign_of_landing_page_stock_and_deliveries.png)

## Getting Started

Follow these steps to set up and run the application:

### Prerequisites

Make sure you have the following software installed on your machine:

- **Node.js**
- **Git**

### Installation

1. **Clone the repo**:

   ```bash
   git clone https://github.com/yourusername/nory_inventory_app.git
   cd nory_inventory_app

   ```

2. **Install dependancies with npm**:

   ```bash
   npm install

   ```

3. **might need to update permissions for db for initial seed**:

   ```bash
   chmod +x seed_database.sh

   ```

4. **run the app**:
   ```bash
   npm run dev
   ```
