# EvoGymFitnessApp

![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/madhur-taneja/README-Template)

Open and view the Project using the `.zip` file provided or at my [GitHub Repository]

The project is also hosted on [Official Site]

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

* `master` contains aggregate code of all branches

```
EvoGymFitnessApp
	├── README.md
	├── package-lock.json
	├── package.json
	├── postcss.config.js
	├── prettier.config.js  
	├── tailwind.config.js
	├── tsconfig.json
	├── tsconfig.node.json
	├── vite.config.js
	├── index.html
	├── licence
	├── .gitignore
	└── src
		├── assets
		│	└── ...
		├── scenes
		│	├── benefits
    		│       │	└── ...  
		│	├── contactUs
    		│       │	└── ...      
		│	├── footer
    		│       │	└── ...      
		│	├── home
    		│       │	└── ...      
		│	├── navbar   
     		│       │	└── ...     
		│	└── ourClasses
    		│       │	└── ...      
		├── hooks
		│	└── ...
		├── shared
		│	├── ActionButton.tsx
		│	├── HText.tsx
		│	└── types.ts
		├── App.tsx
		├── index.css  
		└── main.tsx
```

### Tools Required

* Any web development IDE can be used, but I would recommend Visual Code.
* React, TypeScript, Tailwind CSS, Framer-Motion, React Hero-Icons, React Hook-Forms and React Anchor-Link-Scroll.
* Third Party Tools: Vite JS.


### Installation

The initial installation was done using Vite.
Note: All installations are done using npm.

* Initial Instalation
  ```
    npm create vite@latest
  ```
  Then type in the name of the project.
  After that, select React, then TypeScript.

* Installing Tailwind CSS (Note: Installed through app creation using Vite JS)
  ```
	npm create vite@latest
  ```

* Installing Framer-Motion
  ```
	npm i framer-motion
  ```

* Installing React Hero-Icons
  ```
	npm i @heroicons/react
  ```
  
* Installing React Hook-Forms
  ```
	npm i react-hook-form
  ```

* Installing React Anchor-Link-Scroll (Specific Version)
  ```
	npm i react-anchor-link-smooth-scroll@1.0.12
  ```

After the above, you have to specifically install some packages as we are using TypeScript.
* Installing Dependencies
  ```
	npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node
  ```
  

## Running the App
There are two ways in running the app:

* First Way (Recommended):
  ```
    npm run dev
  ```

## Deployment

The app is deployed on **Netlify**.

### Steps in Deploying App

1. Create Netlify account.
2. Go to *Sites*.
3. Click on *Add New Site*.
4. Select *Import an existing project*.
5. Use any of the Git Providers (Note: I'll continue with GitHub as it's the most common used)
6. After connecting to your GitHub account, choose the existing repositiry you would like to deploy.
7. Click on *Deploy Site*.
8. Wait for site to build and deploy.

## Authors

#### Omar Adam Mostafa
* [GitHub]
* [LinkedIn]

## License

`EvoGymFitnessApp` is open source software [licensed as MIT][license].

## Acknowledgments

* This app was developed through a tutorial on YouTube called **Build a Complete Typescript React Fitness Application for Beginners | Responsive** by EdRoh.

[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/OmarAdamMostafa/EvoGymFitnessApp
[Official Site]: https://evogym-fitness-app-omar-adam.netlify.app/

[GitHub]: https://github.com/OmarAdamMostafa
[LinkedIn]: https://www.linkedin.com/in/omar-adam-mostafa-a445a3259/

[license]: https://github.com/OmarAdamMostafa/EvoGymFitnessApp/blob/main/licence
