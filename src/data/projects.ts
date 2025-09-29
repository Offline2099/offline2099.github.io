import { ProjectData } from '../app/types/project-data.interface';

export const PROJECTS: ProjectData[] = [
  {
    id: 'photo-gallery',
    name: 'Photo Gallery',
    numberOfImages: 6,    
    description: {
      summary: 'An image gallery with hundreds of photos taken by me while living in Thailand over the recent several years. The same interface can possibly be used for organizing and displaying a collection of any other photo albums or image sets.',
      features: [
        'The main idea of this project is designing a convenient UI for viewing a large amount of images with some data attached to them. The data is used both for organizing the photos and for providing additional context.',
        'All photos are sorted into galleries by when and where they were taken. Each image also has several tags, which may include the weather, time of day, or some features present in the photo. Pictures can be automatically grouped into galleries by each of these tags.',
        'Each image has a caption. Those are mostly boring, but explain what exactly is shown in the photo. Such notes can provide additional interesting info in some cases.',
        'The user can always switch between several different ways of viewing the same gallery. Each image can also be easily viewed in full size or downloaded.',
        'There are some experimental features, such as the no-click mode that allows to switch between images by simply hovering over the preview.',
        'The UI is not cluttered with unnecessary junk, such as like counters or social buttons. Many of the existing features (such as captions and tags) can also be completely hidden.'
      ]
    }
  },
  {
    id: 'history-of-earth',
    name: 'Geologic History of Earth',
    numberOfImages: 6,
    description: {
      summary: 'A brief summary of the Earth\'s geologic history. Shows the structure of the geologic time scale in a simple interactive way. Gives a basic understanding of the key features and events that characterize each time interval.',
      features: [
        'The core idea is to display the Earth\'s geologic history in a way that is both informative and visually enjoyable, providing a meaningful overview without going into too much detail.',
        'Nested collapsible blocks offer a compact and intuitive layout for viewing and navigating the timeline structure, also making it easier to remember.',
        'The timeline can be displayed in either direction: chronologically (starting from the formation of the planet) or inversely (diving from the present into older periods and epochs).',
        'There is a quick navigation panel on the right that allows the user to jump to any specific timeline division with a single click.',
        'The app utilizes Angular components recursively. This approach allows to display a fairly large structure with relatively little code.'
      ]
    }
  },
  {
    id: 'solar-system',
    name: 'Solar System',
    numberOfImages: 2,
    description: {
      summary: 'An overview of the Solar System with basic information about the Sun, planets, and other celestial objects. Made in a futuristic sci-fi style.',
      features: [
        'Each region of the Solar System, as well as each celestial body, is shown as a neat collapsible block filled with relevant data.',
        'Each data property has a hint that appears on hover and explains what it means in a brief and concise way. Values also have hints that show them converted to other measurement units, if applicable.',
        'The design is intended to look futuristic, inspired by various fictional UI often seen in sci-fi movies. At the same time, it is rather minimalistic and not overloaded with useless visual clutter.',
        'All elements are responsive and work smoothly on tablets or mobile screens.',
        'This project can be potentially expanded to include more detailed information about each planet, as well as moons, dwarf planets, asteroids, comets, and other parts of the Solar System.'
      ]
    }
  },
  {
    id: 'raidy-raidy',
    name: 'Raidy-Raidy',
    site: 'raidy-raidy.com',
    repo: null,
    numberOfImages: 9,
    description: {
      summary: 'A website that explains strategies for a popular multiplayer video game, along with providing various other related information.',
      features: [
        'Arguably, the best available website on this particular topic. The content may be of no interest to the general public, but it receives mostly positive reactions from people familiar with the game.',
        'The site also serves as a polygon for experimenting with design, animations, various ways of organizing and presenting complex information, implementing some algorithms, new features of the framework, etc.',
        'The total volume of data is quite large. The site has hundreds of pages and utilizes dynamic routing. Nested collapsible blocks are used extensively to display each portion of the data in a well-structured and easily accessible way.',
        'Strategies are presented in the form of nested lists. This also demonstrates how nested lists can be used to convey a description of a complex process and show its structure in a more convenient and intuitive way than traditional text written as a sequence of paragraphs.',
        'Another notable part of the site is the lists of rewards for each fight, called \'loot tables\'. These tables contain a large number of items with multiple parameters. The items can be sorted, grouped, or filtered in a variety of ways, depending on the user\'s needs and preferences.'
      ]
    }
  },
  {
    id: 'calendar',
    name: 'Calendar App',
    numberOfImages: 4,
    description: {
      summary: 'A simple yet powerful application that displays the calendar for any year between 20,000\xa0BC (ice age) and 20,000\xa0AD (deep future) and some additional info.',
      features: [
        'Has a simple and intuitive UI for selecting any year within multiple millennia. The interface adapts smoothly to small screens of mobile devices.',
        'The calendar grid for each selected year is generated automatically on the fly.',
        'There is a menu to choose which weekday should be treated as the first day of the week (and works for any possible weekday).',
        'For any day in the calendar grid it shows how many years and how many days have passed since that date or how far it is in the future. If close to the current date, also displays the number of weeks and months.',
        'Includes a brief summary of how the commonly used Gregorian calendar works and some basic facts about it.',
        'While this project looks very simple from the user\'s perspective, it has a lot of underlying complexity.'
      ]
    }
  },
  {
    id: 'periodic-table',
    name: 'Periodic Table',
    numberOfImages: 2,
    description: {
      summary: 'An interactive periodic table with some basic information and sample images for each chemical element. Designed to work conveniently on large and small screens.',
      features: [
        'The user can hover over any element to see the sample or click on the element to see larger images and basic data. It is also possible to click through the elements in a manner similar to turning pages in a book.',
        'The periodic table remains comfortably usable on narrow screens and mobile devices, providing an additional interface to navigate it.',
        'A randomized animation with dynamically generated items runs in the background.',
        'This project can possibly be expanded into a larger educational website filled with more detailed information about the periodic table and each chemical element.'
      ]
    }
  },
  {
    id: 'colors',
    name: 'Color Converter',
    numberOfImages: 4,
    description: {
      summary: 'An easy-to-use color converter. Can also be viewed as a demonstration for explaining color spaces (RGB, HSL, and CMYK). Includes multiple input notations for each color space. Can be used as a color picker.',
      features: [
        'Allows multiple ways to input the color: with sliders for any of the three available color spaces, or as text in multiple notations (such as arithmetic, percentages, hexadecimal).',
        'Automatically outputs the color converted to all three color spaces (RGB, HSL, CMYK) in all the most commonly used notations.',
        'Provides an interactive visual demonstration of how changing a color in one format affects the representation of that color in other formats.',
        'Includes a complex step-by-step validation for text input with the use of regular expressions. Shows exactly what is wrong in case of an error. Provides warnings for valid but odd input.',
        'Contains a separate tab with a brief summary of how the human eye recognizes and distinguishes colors, along with a simple explanation of how color spaces are constructed.',
        'Can possibly be upgraded to work with more rare and exotic color spaces or color notations.'       
      ]
    }
  },
  {
    id: 'drag-and-drop',
    name: 'Drag-and-Drop Demo',
    numberOfImages: 4,
    description: {
      summary: 'A demo project that utilizes the native drag-and-drop API to create lists and tables with draggable UI elements which can be easily moved or swapped by the user.',
      features: [
        'Demonstrates drag-and-drop functionality for elements arranged in a simple vertical list, elements in multiple groups, a two-dimensional table, and a nested list with an unlimited nesting depth.',
        'All possible actions are smoothly animated, providing a quick and unambiguous visual feedback to the user.',
        'There are options that allow or prevent certain actions, which result in slightly different behaviors. The lists of elements can be easily reset or shuffled.',
        'Currently, the demo is only designed for desktop devices. However, it can be expanded to include mobile and touchscreen devices.'    
      ]
    }
  }
];