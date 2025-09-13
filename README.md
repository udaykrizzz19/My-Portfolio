<div align="center">

# Uday Krishna's Canvas

### An Immersive Portfolio Experience

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)

</div>

<div align="center">

<img src="https://static.wixstatic.com/media/6cef79_2ed14995a4104c3ab61566bce9992255~mv2.gif" alt="Project Demo" width="250" height="250">

</div>

<br>


**[✨ View Live](https://portfolioo-six-gamma.vercel.app/)**
## 📖 Table of Content

- [About The Project](#-about-the-project)
- [🚀 Key Features](#-key-features)
- [🛠️ Architecture & Tech Stack](#️-architecture--tech-stack)
- [⚙️ Local Development Setup](#️-local-development-setup)
- [📜 License](#-license)

## 🎨 About The Project

Welcome to my Digital Canvas—a modern, interactive, and animated personal portfolio designed not just to list my skills, but to showcase them in an immersive environment. This project blends sleek design with cutting-edge web technologies to create a memorable user experience.

The core philosophy was to build more than a static page; it was to create a space that reflects my passion for both design and development, featuring fluid animations, 3D elements, and a user-centric interface.

## 🚀 Key Features

-   **🎨 Themed Experience:** A beautiful theme toggle between **Dark & Light Mode**. User preference is automatically saved in their browser for a consistent experience on return visits.
-   **🎬 Fluid & Animated UI:** Powered by **Framer Motion**, the interface features seamless page transitions and subtle, delightful micro-interactions on all interactive elements.
-   **🔮 Interactive 3D Worlds:** Engaging `FloatingGeometry` elements built with **Three.js** add a layer of depth and interactivity to each section, making the experience dynamic and unique.
-   **📱 Fully Responsive Design:** A mobile-first approach ensures the site looks and functions flawlessly across all devices, from small mobile screens to large desktop monitors.
-   **📫 Seamless Communication:** A fully functional contact form integrated with **EmailJS** delivers messages directly to my inbox, providing a reliable line of communication.
-   **📄 One-Click CV Access:** A prominent "Download CV" button allows recruiters and visitors to easily access my professional resume.

## 🛠️ Architecture & Tech Stack

This project is built with a modern, performance-oriented stack chosen for its efficiency, scalability, and exceptional developer experience.

| Category           | Technology                                                                                             |
| :----------------- | :----------------------------------------------------------------------------------------------------- |
| **Core Framework** | [React](https://reactjs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling**        | [Tailwind CSS](https://tailwindcss.com/)                                                               |
| **Animation**      | [Framer Motion](https://www.framer.com/motion/)                                                        |
| **3D Graphics**    | [Three.js](https://threejs.org/)                                                                       |
| **Icons**          | [Lucide React](https://lucide.dev/)                                                                    |
| **Services**       | [EmailJS](https://www.emailjs.com/)                                                                    |



> [!WARNING]
> **Important Notice**
>
> This repository is for demonstration and educational purposes only. You are welcome to clone it and run it on your **local environment** to see how it works.
>
> **However, you are strictly prohibited from publishing, hosting, or re-distributing this code or any of its assets as your own work.** All rights are reserved.

<br>

## ⚙️ Local Development Setup

To get a local copy up and running, please follow these steps.

### **Prerequisites**

Ensure you have [Node.js](https://nodejs.org/) (version 16 or later) and `npm` installed

### **Installation & Setup**

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/udaykrizzz19/My-Portfolio.git
    ```

2.  **Navigate to the Project Directory**
    ```bash
    cd My-Portfolio
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

### **Environment Variables**

For the contact form to work, you must set up your own **EmailJS** account for this.

1.  Create a `.env.local` file in the project's root directory.
2.  Add your EmailJS credentials as follows:
    ```.env
    # Get your keys from https://dashboard.emailjs.com/admin
    VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
    ```

### **Running the Server**

Start the development server with:

```bash
npm run dev
