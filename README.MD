## Overview
App that uses the Google Maps API to generate 2 randomly located markers for a user and company. Markers are clickable to display a text box.

## Purpose
- To explore the basics of TypeScript
- How to work with external libraries and declaring types for them
- Private modifiers
- Restricting access with interfaces

## Concepts
- Restrict api surface exposed to index.ts, 
  for example, an engineer: 
  - can only create an instance of a User, read its name and location properties
  - can only create an instance of a Company, reference it's name, catchphrase and location
  - can only create an instance of a Custom Map, and call the addMarker method.
  (Google map had a bunch of other properties, adding a private modifier makes the access limited to our specs)
- Interfaces 
  - Inverted dependicies, instead of CustomMap having dependicies to mappable entities such as user, company, carlot of park, we changed the setup, making other classes have instructions on how to be an argument to CustomMap's addMarker function
- Implement Cause (optional, but helps TypeScript show errors in the class file) 
  - setup Typescript to show errors better, for e.g. adding Class X implements Interface Y 

## To run app locally
- git clone https://github.com/jamesphongduong/googlemaps_typescript.git
- cd into project folder
- install node (if not installed)
- sudo npm -i -g parcel-bundler 
- npm i
- run parcel index.html
