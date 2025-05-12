# Volleyball Events Website

## Project Overview
A responsive, modern web application for volleyball enthusiasts designed to showcase events, provide information about the organization, and allow users to contact event organizers. The site follows a "Unite. Play. Elevate" theme for volleyball players and fans.

## Technologies Used
- **HTML5** - Semantic markup for content structure
- **CSS3** - Custom styling with responsive design principles
- **Bootstrap 5.0.2** - Frontend framework for responsive layouts and components
- **JavaScript** - Used with Bootstrap for interactive elements like carousels and dropdown menus
- **Google Maps API** - Integration for location services

## Site Structure
The website includes several key pages:

### 1. Home Page (index.html)
- Jumbotron hero section with "Unite. Play. Elevate" tagline
- Information section introducing the purpose of the site
- Interactive cards linking to key site sections
- Responsive two-column layout that adapts to different screen sizes

### 2. About Us Page (about_us.html)
- Organization information and background
- Mission statement and team philosophy
- Full-width responsive content layout

### 3. Events Page (events.html)
- Card-based layout showcasing upcoming volleyball events
- Each card includes an image and button linking to detailed event information
- Responsive grid system for different device sizes

### 4. Event Detail Page (event_page.html)
- Image carousel showcasing the venue
- Event details including location, time, and host information
- "More Info" button for additional event details
- Multi-column responsive layout

### 5. Contact Page (contact.html)
- Contact form for user inquiries
- Form validation for data collection
- Responsive design for all device types

### 6. Additional Information Page (p1_more_info.html)
- Supplementary information about specific events or the organization

## UX/UI Features
- **Consistent Navigation Bar** - Fixed-top navigation with dropdown menu for mobile
- **Interactive Elements** - Hover effects on cards and navigation items
- **Image Carousel** - Bootstrap carousel for venue images
- **Responsive Design** - Mobile-first approach with breakpoints for different devices
- **Form Integration** - Contact form with proper input fields and validation
- **Dark Theme** - Dark-themed navigation and footer with contrasting content areas
- **Card Components** - Interactive cards with scale transformations on hover

## Responsive Design
The website implements a comprehensive responsive approach through:
- Media queries targeting different device sizes (mobile, tablet, desktop)
- Bootstrap grid system (col-12, col-md-6, etc.) for layout control
- Flexible images with img-fluid class
- Collapsible navigation for mobile views
- Adjustable font sizes and spacing for different screens
- Mobile-optimized footer
- Touch-friendly interactive elements

## Directory Structure
```
- /root/IS217/Anthony-Quispilaya---IS117-003-Project/
  ├── index.html              # Home page
  ├── about_us.html           # About page
  ├── events.html             # Events listing
  ├── event_page.html         # Event details
  ├── contact.html            # Contact form
  ├── p1_more_info.html       # Additional info page
  ├── css_styles/             # Custom CSS files
  │   ├── main.css            # Main styling
  │   ├── nav.css             # Navigation styling
  │   ├── about_us.css        # About page styling
  │   ├── contact.css         # Contact page styling
  │   ├── event_page.css      # Event detail styling
  │   ├── events.css          # Events page styling
  │   └── p1_more_info.css    # Additional info styling
  ├── css/                    # Bootstrap CSS files
  │   └── [Bootstrap files]   # Bootstrap framework files
  └── images/                 # Image assets
      ├── court1.jpg          # Volleyball court images
      ├── court2.jpg
      ├── court3.jpg
      ├── home_page.jpg
      ├── index.jpg           # Home page images
      └── logo.png            # Site logo
```

## Implementation Details

### CSS Architecture
- Modular CSS files organized by page function
- Global styles in main.css and nav.css
- Page-specific styles in separate files
- CSS variables for consistent theming
- Transition and transform effects for interactive elements

### Responsive Implementation
- Bootstrap breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px)
- Custom media queries for specific layout adjustments
- Mobile navigation toggle for small screens
- Adjustable content containers based on viewport size

### Interactive Components
- Navigation hover effects with scaling and background changes
- Card hover animations with transform effects
- Dropdown menu for contact options
- Bootstrap carousel with controls for image cycling
- Form input validation

## Future Enhancement Opportunities
- Backend integration for form submission processing
- User authentication for event registration
- Dynamic event creation and management
- Social media integration
- Event calendar functionality

## Developer Information
- **Developer:** Anthony Quispilaya
- **Course:** IS117-003
- **Semester:** Fall 2024

This project demonstrates modern web development practices including responsive design, component-based UI, and interactive elements while maintaining accessibility and user experience across devices.
