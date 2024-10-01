import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HammerModule } from '@angular/platform-browser';
import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

interface Project {
  title: string;
  category: string;
  image: string;
  videoSrc: string;
  type: string;
  description: string;
  link?: string;
  date: Date;
}

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [CommonModule, HammerModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'scale(0.95)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ])
      ])
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px) scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(10px) scale(0.95)' }))
      ])
    ])
  ]
})
export class CoreComponent {
  projects: Project[] = [
    { title: 'QR Code Generator', category: 'Angular', date: new Date('2024-08-01'), image: 'AngularImages/QRCodeGenerator/thumb.png', videoSrc: 'AngularImages/QRCodeGenerator/video.mp4' , type: 'Website', link: 'https://github.com/Zanvis/QRCodeGenerator', description: 'This QR Code Generator and Scanner application is a versatile Angular tool that allows users to easily create, scan, and manage QR codes. Key features include QR code generation and downloading, image-based QR code scanning, and a history log for generated and scanned codes. The app supports multiple languages and offers smooth animations for enhanced user experience. It also includes robust error handling and accessibility features, making it a comprehensive solution for all your QR code needs.' },
    { title: 'Collaborative Drawing App', category: 'Angular', date: new Date('2024-08-26'), image: 'AngularImages/DrawingApp/thumb.png', videoSrc: 'AngularImages/DrawingApp/video.mp4', type: 'Website', link: 'https://github.com/Zanvis/DrawingApp', description: 'This project involves the development of a modern and interactive canvas drawing application. The app allows users to create, edit, and navigate through multiple canvas pages, offering functionalities like drawing with custom colors, adjusting brush sizes, undo/redo actions, and toggling between drawing and erasing modes. Users can also upload images to the canvas, change background styles, and export their work as a PNG file.' },
    { title: 'Zip Code App', category: 'Angular', date: new Date('2024-05-30'), image: 'AngularImages/ZipCodeApp/thumb.png', videoSrc: 'AngularImages/ZipCodeApp/video.mp4' , type: 'Website', link: 'https://github.com/Zanvis/ZipCodeApp', description: 'This zip code lookup app requires you to select a country and then enter a zip code. Once you provide both pieces of information, the app fetches details about the location, including city, state (if applicable), and links to view it on Google Maps and OpenStreetMap.' },
    { title: 'Register and Login system', category: 'Angular', date: new Date('2024-06-12'), image: 'AngularImages/RegisterLoginSystem/thumb.png', videoSrc: 'AngularImages/RegisterLoginSystem/video.mp4', type: 'Website', link: 'https://github.com/Zanvis/RegisterLoginSystem', description: 'This project is a web application for user registration and login, featuring JWT-based authentication and session persistence. The frontend is built with Angular and Angular Material for a responsive UI. The backend uses Express.js and MongoDB for API endpoints and secure data storage. Key features include user registration, allowing new users to sign up; user login, authenticating existing users and JWT authentication for secure user sessions.' },
    { title: 'Discord music bot', category: 'Python', date: new Date('2023-01-27'), image: 'PythonImages/DiscordMusicBot/thumb.png', videoSrc: 'PythonImages/DiscordMusicBot/video.mp4', type: 'Bot', link: 'https://github.com/Zanvis/Discord-music-bot', description: 'This project is a Python-based Discord music bot that provides a variety of commands for music playback, user interactions, and fun activities. Key features include playing and managing music with commands like play, pause, resume, and queue management. Discord-related fun commands, functional utilities like polls and pairing, and recreational commands for jokes, advice, and showing images of animals and other objects. The bot enhances the Discord experience by combining entertainment with practical functionalities.' },
    { title: 'Recipes app', category: 'React', date: new Date('2023-12-08'), image: 'ReactImages/Recipes/thumb.png', videoSrc: 'ReactImages/Recipes/video.mp4', type: 'Mobile app', link:'https://github.com/Zanvis/Recipes-app', description: 'This project is a mobile application built with the Ionic Framework that enables users to manage their recipes efficiently. Users can save recipes along with photos, edit existing recipes, and delete those they no longer need. The app offers a variety of interactions to ensure a comprehensive recipe management experience, including categorizing recipes, adding notes, and sharing recipes with others. The interface is designed to be intuitive and visually appealing, making it easy to navigate and use. The application leverages the power of Ionic Framework, React, and TypeScript to provide a seamless and robust user experience.' },
    { title: 'Youtube Downloader', category: 'Python', date: new Date('2023-04-23'), image: 'PythonImages/YTDownloader/thumb.png', videoSrc: 'PythonImages/YTDownloader/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Youtube-Downloader', description: 'This project is a desktop application written in Python that allows users to download songs and videos from YouTube in various formats and qualities. It requires FFmpeg for converting and processing media files. The application provides a straightforward interface for users to easily download their favorite content from YouTube.' },
    { title: 'Youtube-like-website', category: 'React', date: new Date('2023-12-18'), image: 'ReactImages/YoutubeLikeWebsite/thumb.png', videoSrc: 'ReactImages/YoutubeLikeWebsite/video.mp4', type: 'School project', link: 'https://github.com/Zanvis/Youtube-like-website', description: 'This project is a school assignment that involves creating a website similar to YouTube, complete with backend functionality. It features a login system and allows users to upload videos. The frontend is built with React and Bootstrap for a responsive and modern user interface. The backend is developed using Django with SQL for database management, ensuring robust and secure data handling.' },
    { title: 'Out of Office', category: 'Angular', date: new Date('2024-06-24'), image: 'AngularImages/OutOfOffice/thumb.png', videoSrc: 'AngularImages/OutOfOffice/video.mp4', type: 'Website', link: 'https://github.com/Zanvis/Out-of-Office', description: 'This project is a web application for managing employees, built using Angular for the frontend, Express.js for the backend, and SQL for the database, with XAMPP as the local server environment. Key features include the ability to add, edit, and delete employee data. The application supports sorting by clicking on column headers and offers various filters for data management. It also includes a role-based system with persistent role selection, even after page refreshes. Additionally, the app allows users to submit leave requests and for administrators to approve or reject them.' },
    { title: 'Motto app', category: 'React', date: new Date('2023-09-27'), image: 'ReactImages/Motto/thumb.png', videoSrc: 'ReactImages/Motto/video.mp4', type: 'Mobile app', link: 'https://github.com/Zanvis/Motto-app', description: 'This project is a mobile application built with the Ionic Framework that displays a new daily motto. Users can also select a motto for the moment. All mottos can be saved, and saved mottos are added to a "Favorites" tab. The application supports both English and Polish language versions. Technologies used include Ionic Framework, React, and TypeScript.' },
    { title: 'Resize app', category: 'Python', date: new Date('2024-04-23'), image: 'PythonImages/ImageResizer/thumb.png', videoSrc: 'PythonImages/ImageResizer/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Resize-App', description: 'This project is a desktop application designed for image processing. It allows users to resize images and offers an additional feature to remove the background from images. The user interface is intuitive, with options to browse files or drag and drop images directly into the app for processing. Users can maintain the aspect ratio of the images during resizing and download the resized images. The application is user-friendly and efficient, providing essential image editing tools in a straightforward manner.' },
    { title: 'Humor app', category: 'React', date: new Date('2023-10-05'), image: 'ReactImages/Humor/thumb.png', videoSrc: 'ReactImages/Humor/video.mp4', type: 'Mobile app', link: 'https://github.com/Zanvis/Humor-app', description: 'This project is a mobile application built with the Ionic Framework designed to help users monitor their mood. Users can log their daily mood and track various statistics over time using interactive charts. The app allows users to mark unpleasant feelings and analyze trends in their mood patterns. This functionality can aid in understanding emotional triggers and improving mental well-being. The application supports a user-friendly interface and smooth performance, utilizing technologies such as Ionic Framework, React, and TypeScript.' },
    { title: 'Word counter', category: 'Java', date: new Date('2023-09-21'), image: 'JavaImages/WordCounter/thumb.png', videoSrc: 'JavaImages/WordCounter/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Word-Counter', description: 'This project is a Java application called Word Counter. It provides functionalities to count the number of words, count the number of characters, and count the number of characters excluding spaces in a given text. The application is designed to be simple and efficient, making it easy for users to quickly obtain these text metrics.' },
    { title: 'Filmweb Scraper', category: 'Other', date: new Date('2024-02-25'), image: 'OtherImages/FilmwebScraper/thumb.png', videoSrc: 'OtherImages/FilmwebScraper/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Filmweb-Scraper', description: 'This project is an application that functions as a search engine for Filmweb. Users can search for movies by name, and the application returns links to films with that title or similar ones. The interface includes a search bar where users can enter the movie name and a results section displaying the links. This tool simplifies finding movies on Filmweb by providing direct links to relevant movie pages based on the search query. The design is user-friendly, making it easy to quickly locate and access information about movies.' },
    { title: 'Graphics Editor', category: 'C#', date: new Date('2024-03-03'), image: 'CSharpImages/GraphicsEditor/thumb.png', videoSrc: 'CSharpImages/GraphicsEditor/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Graphics-Editor', description: 'This project is a graphic editor created as part of a school assignment. The application offers various tools for drawing and editing graphics. Users can draw lines, rectangles, circles, polygons, and fill shapes with selected colors. The editor also allows adjusting brush thickness and eraser size, enabling precise customization of tools according to user needs. The application is intuitive and easy to use, making it perfect for learning basic graphic techniques.' },
    { title: 'Game 15', category: 'Java', date: new Date('2024-05-13'), image: 'JavaImages/Game15/thumb.png', videoSrc: 'JavaImages/Game15/video.mp4', type: 'Mobile app', link: 'https://github.com/Zanvis/Game-15', description: 'This is a 15 Puzzle game written in Java. The game involves arranging numbered tiles in sequential order by sliding them into the empty space. The interface includes options to select the number of columns and rows for the puzzle grid. It also displays the current score and move count. A "New Game" button is available to start a new puzzle.' },
    { title: 'Rock Paper Scissors', category: 'Other', date: new Date('2024-04-20'), image: 'OtherImages/RockPaperScissors/thumb.png', videoSrc: 'OtherImages/RockPaperScissors/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Rock-Paper-Scissors', description: "This is a Rock-Paper-Scissors game featuring two language options: English and Polish. Players can choose their move by selecting one of the three buttons labeled 'Paper,' 'Rock,' or 'Scissors.' The game keeps track of the score for both players, and a 'Reset' button allows players to start a new game. The interface includes large, pixelated hand graphics representing each player's choice."},
    { title: 'Transform App', category: 'C#', date: new Date('2024-03-17'), image: 'CSharpImages/Transform/thumb.png', videoSrc: 'CSharpImages/Transform/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Transform-App', description: 'This is a school project written in C#. The application is designed to be a geometric transformation tool that allows users to create and manipulate polygons. Users can select the number of polygon sides, and the program generates the corresponding shape. The interface provides options for various transformations, including translation, rotation, rotation around a specific point, scaling, reflection (both X and Y axes), and shearing (both X and Y directions). The coordinates of the polygon vertices are displayed in a table on the left, and there are buttons to start the transformation and reset the shape.' },
    { title: 'Weight Converter', category: 'Java', date: new Date('2023-09-25'), image: 'JavaImages/WeightConverter/thumb.png', videoSrc: 'JavaImages/WeightConverter/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Weight-Converter', description: 'This project is a Java application called Weight Converter. It allows users to convert between different weight units including kilograms (kg), decagrams (dag), grams (g), pounds (lb), ounces (oz), and stones (st). The application is designed to be user-friendly, providing quick and accurate conversions for various weight measurements.' },
    { title: 'Calculator', category: 'Other', date: new Date('2023-06-15'), image: 'OtherImages/Calculator/thumb.png', videoSrc: 'OtherImages/Calculator/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Calculator', description: 'This is a simple web-based calculator created using HTML, JavaScript, and CSS. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator interface is designed to be user-friendly, with responsive buttons and a clear display for input and results. It serves as a handy tool for performing quick calculations directly in a web browser.' },
    { title: 'Reflex Game', category: 'Java', date: new Date('2023-09-17'), image: 'JavaImages/Reflex/thumb.png', videoSrc: 'JavaImages/Reflex/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Reflex-game', description: "This project is a Java application called Reflex Game, designed to test and improve users' reflexes. The game measures the time it takes for a user to respond to a visual cue, presenting the results in milliseconds. Players can track their performance over multiple attempts, aiming to improve their reaction times. The application features a simple yet engaging interface, making it accessible for users of all ages. The Reflex Game leverages Java's capabilities to ensure precise timing and smooth execution, providing an effective tool for reflex training and assessment." },
    { title: 'Animation', category: 'C#', date: new Date('2024-04-04'), image: 'CSharpImages/Animation/thumb.png', videoSrc: 'CSharpImages/Animation/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Animation', description: 'The Bouncing Balls Simulator is a C# application that simulates the movement of colored balls within a window. The balls bounce off the window edges and each other. Users can start, stop, and resume the animation, randomize the initial positions of the balls, and reset them to the starting position. The application also allows users to adjust the speed and number of balls in the simulation.' },
    { title: 'Chimp Game', category: 'Java', date: new Date('2024-04-21'), image: 'JavaImages/ChimpGame/thumb.png', videoSrc: 'JavaImages/ChimpGame/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Chimp-Game', description: 'This is a "Chimp Game" designed for a mobile device. The game involves randomizing the positions of numbers on a grid and then hiding them. Players must remember the positions of the numbers and select them in the correct order from memory. If a player wants to skip a number, they can press the "**" button. The interface includes options to draw and hide the numbers, display the game result, and start a new game. Users can also select the number of columns and rows for the grid.' },
    { title: 'Tic-Tac-Toe', category: 'Other', date: new Date('2024-04-27'), image: 'OtherImages/TicTacToe/thumb.png', videoSrc: 'OtherImages/TicTacToe/video.mp4', type: 'Desktop app', link: 'https://github.com/Zanvis/Tic-Tac-Toe', description: 'This is a Tic Tac Toe game made in Godot. When Player 1 wins, the board displays a message indicating that Player 1 has won and offers the option to play again. The same functionality applies when Player 2 wins.' },
    { title: 'Presentation of Geometric Solids', category: 'C#', date: new Date('2023-05-14'), image: 'CSharpImages/BrylyGeometryczne/thumb.png', videoSrc: 'CSharpImages/BrylyGeometryczne/video.mp4', type: 'School project', link: 'https://github.com/Zanvis/Prezentacja-figur-geometrycznych', description: 'This school project is a 3D geometric shape editor and viewer written in C#. It allows users to create, manipulate, and visualize various geometric solids, such as prisms, pyramids, sloping prisms, and sloping pyramids. Users can customize shape attributes like height, radius, polygon base degree, line thickness, tilt angle, line color, and style. The application includes features for adding and removing shapes, random repositioning, and controlling the visualization through a slideshow and rotation options. The interface displays the shapes in a central viewing area with a coordinate table, making it an educational tool for understanding geometry and transformations.' },
    { title: 'The Power Series Analyzer', category: 'C#', date: new Date('2022-11-21'), image: 'CSharpImages/AnalizatorSzeregow/thumb.png', videoSrc: 'CSharpImages/AnalizatorSzeregow/video.mp4', type: 'School project', link: 'https://github.com/Zanvis/Analizator-szeregow', description: 'The Power Series Analyzer is a C# application designed for analyzing and visualizing power series. It allows users to input parameters such as the independent variable 𝑋, accuracy 𝐸𝑝𝑠, and range bounds ( 𝑋𝑑 and 𝑋𝑔), and calculates the series value 𝑆(𝑋). The application displays the computed values in a table and provides graphical visualization of the series behavior over the specified range.' },
    { title: 'Geometric Figures Presentation', category: 'C#', date: new Date('2023-04-26'), image: 'CSharpImages/FiguryGeometryczne/thumb.png', videoSrc: 'CSharpImages/FiguryGeometryczne/video.mp4', type: 'School project', link: 'https://github.com/Zanvis/Prezentacja-figur-geometrycznych', description: 'This school project demonstrates the principles of encapsulation, inheritance, and polymorphism through the creation and manipulation of geometric figures. Developed in C#, the application allows users to select and draw various geometric shapes (e.g., points, lines, circles, polygons) and modify their attributes (e.g., color, line style, thickness). Users can move shapes, undo the last action, and visualize figures in automatic or manual display modes. The project enhances understanding of object-oriented programming concepts by providing a practical, interactive experience.' },
    { title: 'Geometric Figures Drawing', category: 'C#', date: new Date('2023-01-22'), image: 'CSharpImages/KreslenieFigur/thumb.png', videoSrc: 'CSharpImages/KreslenieFigur/video.mp4', type: 'School project', link: 'https://github.com/Zanvis/Kreslenie-figur-krzywych-i-linii-geometrycznych', description: 'This school project is an application that allows users to draw various geometric curves, shapes, and lines. Developed in C#, the interface provides options to select and draw different geometric figures such as rectangles, squares, ellipses, circles, Bezier curves, and cardinal curves. Users can also create filled shapes and adjust their properties. This project demonstrates practical skills in object-oriented programming and graphical user interface design.' },
    { title: 'Computer Animation of Power Series', category: 'C#', date: new Date('2023-03-23'), image: 'CSharpImages/AnimacjaSzeregu/thumb.png', videoSrc: 'CSharpImages/AnimacjaSzeregu/video.mp4', type: 'School project', link: 'https://github.com/Zanvis/Animacja-komputerowa-szeregu', description: 'This school project is a computer animation application that visualizes the path defined by the graph of a power series. Developed in C#, it allows users to visualize the power series values both in tabular and graphical formats. Additionally, it provides an animation feature that moves along the path determined by the power series. The project aims to enhance understanding of power series through interactive and dynamic visualization.' },
  ];
  filteredProjects: Project[] = this.projects;
  activeCategory: string = 'All';
  isModalOpen = false;
  selectedProject: any = null;
  currentImageIndex: number = 0;
  categories: string[] = ['All', 'Angular', 'Python', 'React', 'Java', 'C#', 'Other'];
  isMobileDropdownOpen = false;
  currentSortOrder: 'asc' | 'desc' | null = null;
  // filterProjects(category: string) {
  //   this.activeCategory = category;
  //   if (category === 'All') {
  //     this.filteredProjects = this.projects;
  //   } else {
  //     this.filteredProjects = this.projects.filter(project => project.category === category);
  //   }
  //   this.isMobileDropdownOpen = false;
  // }
  filterProjects(category: string) {
    this.activeCategory = category;
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
    this.isMobileDropdownOpen = false;
    // Re-apply the current sort order
    if (this.currentSortOrder) {
      this.sortProjects(this.currentSortOrder);
    }
  }
  getLinkClass(category: string): string {
    return this.activeCategory === category ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-300';
  }
  openModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    this.currentImageIndex = 0;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  openLink(link: string) {
    window.open(link, '_blank');
  }
  // swipeImage(direction: 'left' | 'right') {
  //   if (direction === 'left') {
  //     this.changeImage(this.currentImageIndex + 1);
  //   } else {
  //     this.changeImage(this.currentImageIndex - 1);
  //   }
  // }

  changeImage(newIndex: number): void {
    if (newIndex >= 0 && newIndex < this.selectedProject.images.length) {
      this.currentImageIndex = newIndex;
    }
  }
  toggleMobileDropdown() {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  categoryIcons: { [key: string]: string } = {
    'All': 'icons/all-icon.svg',
    'Angular': 'icons/angular-icon.svg',
    'Python': 'icons/python-icon.svg',
    'React': 'icons/react-icon.svg',
    'Java': 'icons/java-icon.svg',
    'C#': 'icons/csharp-icon.svg',
    'Other': 'icons/other-icon.svg'
  };

  sortProjects(order: 'asc' | 'desc') {
    this.currentSortOrder = order;
    this.filteredProjects.sort((a, b) => {
      if (order === 'asc') {
        return a.date.getTime() - b.date.getTime();
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    });
  }

  api!: VgApiService;

  onPlayerReady(api: VgApiService) {
    this.api = api;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.api && this.api.getDefaultMedia()) {
      switch(event.code) {
        case 'Space':
          this.togglePlayPause();
          event.preventDefault();
          break;
        case 'ArrowLeft':
          this.seekBackward();
          event.preventDefault();
          break;
        case 'ArrowRight':
          this.seekForward();
          event.preventDefault();
          break;
        case 'ArrowUp':
          this.increaseVolume();
          event.preventDefault();
          break;
        case 'ArrowDown':
          this.decreaseVolume();
          event.preventDefault();
          break;
      }
    }
  }
  
  increaseVolume() {
    if (this.api.volume < 1) {
      this.api.volume += 0.1;
      this.api.volume = Math.min(this.api.volume, 1);
    }
  }
  
  decreaseVolume() {
    if (this.api.volume > 0) {
      this.api.volume -= 0.1;
      this.api.volume = Math.max(this.api.volume, 0);
    }
  }

  togglePlayPause() {
    if (this.api.state === 'playing') {
      this.api.pause();
    } else {
      this.api.play();
    }
  }

  seekBackward() {
    const currentTime = this.api.currentTime;
    this.api.seekTime(currentTime - 5);
  }

  seekForward() {
    const currentTime = this.api.currentTime;
    this.api.seekTime(currentTime + 5);
  }
}
