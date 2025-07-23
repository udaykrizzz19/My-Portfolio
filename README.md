# Uday Krishna's Digital Canvas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

A modern, animated, and interactive personal portfolio built to showcase my skills and projects. This project features a sleek dark-first design, smooth animations, and a functional contact form.

<div align="center">

**[✨ View] ([My Folio ](https://portfolioo-six-gamma.vercel.app/))**

</div>

## 🚀 Features

This portfolio is packed with modern features to provide a great user experience:

*   **Dark & Light Mode:** A beautiful theme toggle with a default to dark mode, saving the user's preference in their browser.
*   **Smooth Animations:** Seamless page transitions and subtle animations on interactive elements, powered by Framer Motion.
*   **Interactive 3D Backgrounds:** Engaging `FloatingGeometry` elements built with Three.js that add depth to each section.
*   **Fully Responsive Design:** A mobile-first approach ensures the site looks and works perfectly on all devices, from phones to desktops.
*   **Functional Contact Form:** A working contact form integrated with **EmailJS** to send messages directly to my inbox.
*   **Downloadable CV:** A quick and easy way for visitors to download my resume.
*   **Clean UI:** A custom-hidden scrollbar for a clean, uninterrupted browsing experience.
*   **Detailed Sections:** Clearly laid out sections for my biography, skills, education timeline, and projects.


## 🛠️ Tech Stack

This project leverages a modern and efficient tech stack to deliver high performance and a great developer experience.

| Category          | Technology                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Frontend**      | [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)     |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)                                                                    |
| **Animation**     | [Framer Motion](https://www.framer.com/motion/)                                                             |
| **3D Graphics**   | [Three.js](https://threejs.org/)     |
| **Icons**         | [Lucide React](https://lucide.dev/)                                                                         |
| **Services**      | [EmailJS](https://www.emailjs.com/)                                                    |


## ⚙️ Running the Project Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 16 or later) and `npm` installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/udaykrizzz19/My-Portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd My-Portfolio
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Environment Variables

For the contact form to function, you need to set up your own EmailJS account and provide the necessary credentials.

1.  Create a `.env.local` file in the root of the project.
2.  Add your EmailJS credentials to the file as shown below:
    ```.env
    # Get your keys from https://dashboard.emailjs.com/admin
    VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
    ```

### Running the Development Server

Once the dependencies are installed and the environment variables are set, you can run the development server:

```bash
npm run dev
