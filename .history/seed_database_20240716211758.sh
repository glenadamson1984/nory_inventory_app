#!/bin/bash

DATABASE="database.sqlite"

# Create tables
sqlite3 $DATABASE <<EOF
CREATE TABLE locations (
  location_id INTEGER PRIMARY KEY,
  name TEXT,
  address TEXT
);

CREATE TABLE menus (
  recipe_id INTEGER PRIMARY KEY,
  location_id INTEGER,
  price REAL,
  modifiers TEXT
);

CREATE TABLE modifiers (
  modifier_id INTEGER PRIMARY KEY,
  name TEXT,
  option TEXT,
  price REAL
);

CREATE TABLE recipes (
  recipe_id INTEGER PRIMARY KEY,
  name TEXT,
  quantity REAL,
  ingredient_id INTEGER
);

CREATE TABLE ingredients (
  ingredient_id INTEGER PRIMARY KEY,
  name TEXT,
  unit TEXT,
  cost REAL
);

CREATE TABLE staff (
  staff_id INTEGER PRIMARY KEY,
  name TEXT,
  dob TEXT,
  role TEXT,
  iban TEXT,
  bic TEXT,
  location_id INTEGER
);
EOF

# Import CSV files
sqlite3 $DATABASE <<EOF
.mode csv
.import 'csv/locations.csv' locations
.import 'csv/menus.csv' menus
.import 'csv/modifiers.csv' modifiers
.import 'csv/recipes.csv' recipes
.import 'csv/ingredients.csv' ingredients
.import 'csv/staff.csv' staff
.quit
EOF
