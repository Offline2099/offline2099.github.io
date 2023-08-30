import { WebsiteData } from './interfaces';

export const Intro: string[] = [
  'If you are looking at this page, you have probably seen one of my websites and got curious to see more. Or maybe you are already looking at my resume and considering to hire me for your project.',
  'I know how to build neat and well-functioning websites, and I enjoy doing that. I can talk about my work for hours, but I\'m not really good at convincing people, nor do I enjoy the process of persuading someone. The easiest way for me is to show some examples, so anyone could just see and decide whether it fits their expectations.',
  'For a web developer, especially a freelancer, it is not a trivial task to build a reliable portfolio. People pay for their new website, then their business fails for some reason, and they end up shutting down the website after a year. The work disappears without a trace.',
  'To combat this annoying issue, I rely on using my personal projects as a proof of my skills. This way I can also be sure that no unexpected changes will appear on those websites, no legal restrictions or NDAs will apply, and no questionable ideas implemented by others will be attributed to me.',
  'I have also created a number of mini-projects, mostly for the demonstration purposes, and I will probably add more of such projects here later. Enjoy having a look at the list below.'
];

export const Websites: WebsiteData[] = [
  {
    name: 'Photo Gallery',
    url: 'offline2099.github.io/photo-gallery',
    repoUrl: 'github.com/Offline2099/gallery-app',
    images: {
      name: 'photo-gallery',
      n: 6
    },
    description: {
      summary: 'An image gallery with hundreds of photos taken by me while living in Thailand over the last several years. The same interface can be possibly used to organize and display a collection of galleries of any other images.',
      features: [
        'The main idea of this project is designing a comfortable interface for viewing a large amount of images with some data attached to them. The data is used both for organizing the photos and for providing additional context.',
        'All photos are sorted into galleries by the years and months they were taken and by the locations where they were taken. Each image also has several tags, which may include the weather, time of day, or some features present in the photo. Pictures can be grouped into galleries by these tags.',
        'Each image has a caption. Those are mostly boring, but explain what exactly the user is looking at. This information may be valuable in some cases.',
        'There are several ways to view the same gallery, and the user can easily switch between those. Each image can also be easily viewed in full size or downloaded.',
        'There are some experimental features, such as the no-click mode that allows to switch between images just by hovering over the preview.',
        'The interface is not cluttered with unnecessary junk, such as likes or social buttons. Most of the existing features (such as captions and tags) can also be completely hidden.'
       ]
    }
  },
  {
    name: 'Raidy-Raidy',
    url: 'raidy-raidy.com',
    images: {
      name: 'raidy-raidy',
      n: 9
    },
    description: {
      summary: 'A website that contains strategies for a popular multiplayer video game, along with various other related information.',
      features: [
        'Arguably, the best available website on this particular topic. The content may be of no interest to the general public, although it receives mostly positive reactions from people familiar with the game.',
        'The site also serves as a polygon for experimenting with design, visual effects, various ways of organizing and presenting complex information, implementing some algorithms, new features of the framework, etc.',
        'The total volume of data is quite large. The site has hundreds of pages and utilizes dynamic routing. Nested collapsible blocks are used extensively to display the information in a well-structured and easily accessible way.',
        'Raid strategies are presented in the form of nested lists. This also demonstrates how nested lists can be used to convey a description of a complex process in a more convenient form than traditional text written as paragraphs could achieve.',
        'Another notable part of the site is the lists of rewards for each fight, called "loot tables". These tables contain a large number of items with multiple parameters. The items can be sorted, grouped, or filtered in a variety of ways, depending on the user\'s needs or preferences.'
      ]
    }
  },
  {
    name: 'Geologic History of Earth',
    url: 'offline2099.github.io/history-of-earth',
    repoUrl: 'github.com/Offline2099/earth-app',
    images: {
      name: 'history-of-earth',
      n: 6
    },
    description: {
      summary: 'A brief summary of the Earth\'s geologic history. Shows the structure of the geologic time scale in a simple interactive way. Gives a basic understanding of the key features and events that characterize each time interval.',
      features: [
        'The core idea is to display the Earth\'s geologic history in a way that is both informative and visually enjoyable, while maintaining a reasonable balance between providing a meaningful overview and going into too much detail.',
        'Nested collapsible blocks offer a compact and intuitive layout for viewing and navigating the timeline structure, also making it easier to remember.',
        'The timeline can be viewed in either direction: chronologically (starting from the formation of the planet) or inversely (diving from the present into older and older epochs).',
        'There is a quick navigation panel on the right that allows the user to jump to any specific timeline division with a single click.'
      ]
    }
  },
  {
    name: 'Calendar App',
    url: 'offline2099.github.io/calendar',
    repoUrl: 'github.com/Offline2099/calendar-app',
    images: {
      name: 'calendar',
      n: 4
    },
    description: {
      summary: 'A simple yet powerful application that displays the calendar for any year between 20,000\xa0BC (ice age) and 20,000\xa0AD (deep future) and some additional info.',
      features: [
        'Has a simple and intuitive interface for selecting any year within multiple millennia. The interface adapts smoothly to small screens and mobile devices.',
        'Has a menu to choose which weekday should be treated as the first day of the week (and works for any possible weekday).',
        'For any day in the calendar grid it shows how many years and how many days have passed since that date (or how far it is in the future). If close to the current date, also displays the number of weeks and months.',
        'Includes a brief summary of how the commonly used Gregorian calendar works and some basic facts about it.'
      ]
    }
  },
  {
    name: 'Periodic Table',
    url: 'offline2099.github.io/periodic-table',
    repoUrl: 'github.com/Offline2099/periodic-table-app',
    images: {
      name: 'periodic-table',
      n: 2
    },
    description: {
      summary: 'An interactive periodic table with some basic information and sample images for each chemical element. Designed to work comfortably on small screens.',
      features: [
        'Hover over any element to see the sample. Click on any element to see the larger image and basic data. The user can also click through the elements, in a manner similar to turning pages in a book.',
        'The periodic table remains conveniently usable on narrow screens and mobile devices, providing an additional interface to navigate it.',
        'This project can possibly be expanded into a larger educational website with more detailed information about the periodic table and each chemical element.'
      ]
    }
  },
  {
    name: 'Color Converter',
    url: 'offline2099.github.io/colors',
    repoUrl: 'github.com/Offline2099/colors-app',
    images: {
      name: 'colors',
      n: 4
    },
    description: {
      summary: 'An easy-to-use color converter. Works with RGB, HSL, and CMYK color spaces. Includes multiple formats for each color space. Can also be used as a color picker.',
      features: [
        'Allows multiple ways to input the color: with sliders for any of the three color spaces, or as text in multiple notations (including percentage and hexadecimal).',
        'Automatically outputs the converted color in all three color spaces (RGB, HSL, CMYK) in all the most commonly used notations.',
        'Provides an interactive visual demonstration of how changing a color in one format affects the representation of that color in other formats.',
        'A complex step-by-step validation for text input. Shows exactly what is wrong in case of an error. Provides warnings for valid but odd input.',
        'Contains a separate tab with a brief summary of how the human eye recognizes and distinguishes colors, along with a simple explanation of how color spaces are constructed.',
        'Can possibly be upgraded to work with more rare and exotic color spaces.'        
      ]
    }
  }
];
