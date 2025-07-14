# Web Development Project 5 - *Museum Collection Viewer: Cooper Hewitt Edition*

Submitted by: **Soluchi Fidel-Ibeabuchi**

This web app: **This web app displays a dynamic gallery list of works currently on display at the Cooper Hewitt Smithsonian Design Museum. The app fetches data from the Cooper Hewitt public API and presents it in a searchable, filterable dashboard. Users can browse through a list of objects, view summary statistics (such as the most common start date and medium), search for works by title, and filter the list by medium. The interface is designed for quick exploration and easy access to detailed information about each object, including direct links to the museum's collection entries.**

Time spent: **3** hours spent in total

<!--
## Project Overview

**CH Gallery List** is a responsive web application that provides an interactive dashboard for exploring works currently on display at the Cooper Hewitt Smithsonian Design Museum. Leveraging the Cooper Hewitt public API, the app fetches and displays a dynamic list of gallery objects, allowing users to easily browse, search, and filter through the museum’s collection.

Key features include:
- **Live Data Fetching:** Retrieves up-to-date information about objects on display directly from the museum’s API.
- **Search Functionality:** Users can search for works by title, with results updating in real time as they type.
- **Category Filtering:** A dropdown filter enables users to restrict the displayed list by medium, making it easy to focus on specific types of works.
- **Summary Statistics:** The dashboard highlights key statistics, such as the total number of works on display, the most common start date, and the most common medium.
- **Detailed Object Information:** Each item in the list displays essential details and provides a direct link to the full object entry on the museum’s website.
- **User-Friendly Interface:** The app is designed for quick exploration, with a clean layout and responsive design for accessibility on various devices.

This project demonstrates proficiency in React, asynchronous data fetching, state management, and UI/UX best practices for data-driven applications.

-->

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - *Number of Objects on Display*
    - *Most Common Start Date*
    - *Most Common Medium*


- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] N/A

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='museum-walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright 2025 Soluchi Fidel-Ibeabuchi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.