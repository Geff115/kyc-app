# KYC Form Application

## Project Overview

The KYC Form Application is a multi-step, responsive form designed to collect and validate
user information as part of a Know Your Customer (KYC) process. It includes features like
file uploads, date selection, and dynamic field validation, providing an intuitive and
seamless user experience.

The project adheres to modern development practices and utilizes tools like Next.js and
Tailwind CSS for high performance and maintainability.


## Features

- Multi-Step Form Navigation: Smooth transition between form steps with state persistence.
- Dynamic Form Validation: Real-time validation of user inputs with descriptive error messages.
- File Upload: Allows users to upload documents (e.g., ID Proof, Proof of Address).
- Date Picker: Includes a custom date picker for selecting the date of birth.
- Summary Review: Displays all user inputs for review and editing before submission.
- Responsive Design: Optimized for both desktop and mobile devices.


## Technologies Used

- Framework: [Next.js](Next.js)
- Styling: Tailwind CSS
- State Management: Context API
- Validation: React Hook Form
- Date Picker: React-Datepicker
- Image Handling: Next.js Image Component
- Deployment: Vercel


## Getting Started

## Prerequisites

- Node.js installed on your machine.
- A package manager like npm or yarn.


## Installation

Clone the repository and install dependencies:

    - git clone https://github.com/Geff115/kyc-app.git
    - cd kyc-app
    - npm install

## Run Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Vercel

This application is deployed using Vercel. You can access the live application here:


## To deploy your own version

1. Push your code to a Github repository.
2. Connect your repository to Vercel.
3. Deploy with a single click.


## Assignment Requirements

The following requirements were implemented as part of the development process:

1. Multi-step Form: Three steps with validation and state persistence.
2. Input Types: Text fields, dropdowns, file uploads, and date pickers.
3. Validation: Real-time feedback for errors.
4. Summary and Editing: Users can review and edit data before submission.
5. Responsive Design: Fully optimized for mobile and desktop.
6. Deployment: Application deployed on Vercel and accessible via a live link.


## Future Improvements

1. Integration with a backend API for submitting and storing user data.
2. Enhanced accessibility features for a broader user base.
3. Localization support for multiple languages.


## License

This project is licensed under the MIT License.