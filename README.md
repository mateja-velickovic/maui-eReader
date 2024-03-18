# ReadME - Mobile EPUB Reading Application

## Description
ReadME is a mobile application developed as part of the second-year project at ETML. The aim of this application is to popularize reading by providing a user-friendly platform for reading books in EPUB format. The project is carried out for the client MMN/JMY, in collaboration with ETML apprentices.

## Features

### Application Mockup
Before starting development, a mockup of the application was created to visualize each screen and the interactions between them. The mockup is available in the provided PDF document.

### Backend
The application's backend was developed to store EPUB content along with the insertion date. It also handles tags associated with books.

### Reader
The reader supports EPUB files up to version 3.3, offering free display of content. It remembers the last displayed page and automatically resumes reading from that point. Navigation between pages is facilitated by intuitive buttons.

### Book Management
The application allows listing books sorted by addition date, with miniature cover page display. Users can also create tags and associate them with books to facilitate management and filtering.

### EPUB Import
An SQL script was developed to import EPUB files into the application's database.

### Testing
Manual tests were conducted according to scenarios defined in a PDF document. Additionally, unit tests were implemented to validate the application's business logic.
