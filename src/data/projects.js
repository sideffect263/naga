import dynamic_ui_img from './images/dynamic_ui_img.png';
import ctf_zone_img from './images/ctf_zone_img.png';
import m33t_img from './images/m33t_img.jpeg';
import ofekliftstore_img from './images/ofekliftstore_img.png';
import public_trainer_img from './images/public_trainer_img.png';
import theboxtivon_img from './images/theboxtivon_img.png';
import space_img from './images/space_img.png';
import netviz_img1 from './images/netviz_img1.png';
import netviz_img2 from './images/netviz_img2.png';
import netviz_img3 from './images/netviz_img3.png';
import newsworld_img from './images/newsworld_img.png';
import catfacts_img from './images/catfacts_img.png';
import hackermap_img from './images/hackermap_img.png';
import quantum_img from './images/quantum_img.png';
import autodata_img from './images/autodata_img.png';
import ai_story from './images/ai_story.png';

const projects = [
  {
    name: 'Mood-Based UI',
    slug: 'mood-based-ui',
    description: 'An adaptive UI system that analyzes mouse movement patterns to detect user mental state and dynamically adjusts the interface accordingly.',
    extendedDescription: `A dynamic web application that adapts its interface based on user interaction patterns. By analyzing mouse movements with machine learning algorithms (KNN), the system classifies user behavior into three distinct patterns and adjusts UI elements in real-time. The front-end responds by changing colors, element positions, sizes, and layouts tailored to the user's detected mental state. 
    
    The system works by sending mouse usage data from the front-end to the server, which uses a trained algorithm to predict the user's mental state and returns appropriate UI adjustments. Many users report they don't even notice the subtle UI changes while using the application, creating a seamless experience.`,
    image: dynamic_ui_img,
    url: 'https://mood-based-ui.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/mood-based-ui',
    categories: ['web', 'machine learning'],
    technologies: ['React', 'Node.js', 'Express', 'Machine Learning', 'KNN Algorithm'],
    dateCreated: '2022-08-15',
    relatedKeywords: [
      'adaptive user interface',
      'mouse pattern analysis',
      'behavior-based UI',
      'dynamic interface adjustment',
      'real-time UI adaptation',
      'user experience enhancement',
    ],
  },
  {
    name: 'M33t',
    slug: 'm33t',
    description: 'A mobile app built with Expo and React Native that shows users on a map and helps connect like-minded people.',
    extendedDescription: `M33t is a social platform developed as a mobile application using Expo and React Native. The app was published for testing on Google Play. While still in development, the current version allows users to create profiles and view other users' live locations on an interactive map.
    
    The core concept is to connect like-minded individuals based on geographic proximity, though features for adding events to the map and more advanced matching functionality are still in development.`,
    image: m33t_img,
    url: 'https://m33t.webflow.io/',
    gitHubUrl: 'https://github.com/sideffect263/M33t-social_Map',
    categories: ['mobile', 'social', 'mapping'],
    technologies: ['Expo', 'React Native', 'Google Maps API', 'User Authentication'],
    dateCreated: '2022-06-10',
    relatedKeywords: [
      'location-based social network',
      'user mapping platform',
      'proximity-based connections',
      'social discovery app',
      'interactive user map',
      'mobile social platform'
    ]
  },
  {
    name: 'Ofek Lift Order System',
    slug: 'ofek-lift-order',
    description: 'A specialized system that helps users select the most appropriate and cost-effective lift vehicle for specific job requirements.',
    extendedDescription: `The Ofek Lift Order System addresses a common problem in the industrial lift sector: choosing the right lift equipment for specific jobs. Users often select vehicles that are either unsuitable (like missing 4x4 capabilities for off-road jobs) or unnecessarily expensive.
    
    This React-based application serves as both a selection tool and knowledge system for companies, helping them optimize their equipment choices and reduce operational costs. The system focuses on matching job requirements with appropriate vehicle specifications to ensure efficiency and cost-effectiveness.`,
    image: ofekliftstore_img,
    url: 'https://ofek-lift-order.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/ofek-lift-order-system',
    categories: ['web', 'industrial', 'tool'],
    technologies: ['React'],
    dateCreated: '2021-11-22',
    relatedKeywords: [
      'lift equipment selection',
      'industrial vehicle matching',
      'cost optimization tool',
      'lift job requirements',
      'equipment specification system',
      'industrial knowledge base'
    ]
  },
  {
    name: 'Stellar Spectacle',
    slug: 'stellar-spectacle',
    description: 'A space exploration game prototype with free-roam capabilities, moving toward becoming an MMO PVP experience.',
    extendedDescription: `Stellar Spectacle is an evolving game development project aimed at creating a free-roam space exploration MMO with PVP elements. Currently, it offers a single-player experience that allows users to freely explore a rendered space environment.
    
    Built using React, Node.js, Express, WebSocket, and Three.js, this prototype demonstrates the core mechanics and visual experience while laying the groundwork for expanded multiplayer functionality in future iterations.`,
    image: space_img,
    url: 'https://skyone.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/stellar-spectacle',
    discordUrl: 'https://discord.gg/AM9V3m7U',
    categories: ['game', 'space', 'simulation'],
    technologies: ['React', 'Node.js', 'Express', 'WebSocket', 'Three.js'],
    dateCreated: '2022-03-05',
    relatedKeywords: [
      'space exploration game',
      'free-roam space simulator',
      'space MMO prototype',
      '3D space environment',
      'web-based space game',
      'interactive space simulation'
    ]
  },
  {
    name: 'Capture The Flag Zone',
    slug: 'ctf-zone',
    description: 'A web-based cybersecurity challenge platform focused on web vulnerabilities and hidden flag discovery.',
    extendedDescription: `Capture The Flag Zone is a cybersecurity training platform built with Flask that focuses primarily on web-related security challenges. The system features various challenges where users must discover hidden keys embedded throughout the files and components of web applications.
    
    This hands-on approach helps cybersecurity enthusiasts develop practical skills in identifying and exploiting web vulnerabilities, understanding file structure security issues, and implementing secure coding practices.`,
    image: ctf_zone_img,
    url: 'https://ctf-django.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/ctf-django',
    categories: ['cyber', 'educational', 'security'],
    technologies: ['Flask', 'Python', 'Web Security'],
    dateCreated: '2021-09-18',
    relatedKeywords: [
      'CTF challenges',
      'web security training',
      'hidden flag discovery',
      'cybersecurity practice',
      'web vulnerability exercises',
      'security learning platform'
    ]
  },
  {
    name: 'Machine Learning Model Trainer',
    slug: 'ml-model-trainer',
    description: 'An application that allows users to upload numerical datasets to train and visualize linear regression and decision tree ML models.',
    extendedDescription: `The Machine Learning Model Trainer is a tool designed to make machine learning more accessible by allowing users to upload datasets with numerical columns and apply either linear regression or decision tree models. Users can train these models directly in the application and instantly see their performance scores.
    
    Built using Node.js, Python, and React, this application bridges the gap between data analysis and machine learning implementation, providing an intuitive interface for users to understand model performance without needing extensive programming knowledge.`,
    image: public_trainer_img,
    url: 'https://decision-tree-app.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/decision-tree-app',
    categories: ['data', 'machine learning', 'tool'],
    technologies: ['Node.js', 'Python', 'React', 'Machine Learning'],
    dateCreated: '2022-01-30',
    relatedKeywords: [
      'ML model training',
      'decision tree visualization',
      'linear regression tool',
      'data analysis platform',
      'model performance scoring',
      'accessible machine learning'
    ]
  },
  {
    name: 'TheBoxTivon Fitness Hub',
    slug: 'theboxtivon',
    description: 'A landing page for a fitness center featuring an integrated booking system for class scheduling.',
    extendedDescription: `TheBoxTivon Fitness Hub is a focused landing page for a fitness center that integrates an iframe connected to the center's appointment scheduling system. The site provides a clean interface for users to view and book fitness classes.
    
    The primary feature is the seamless connection to the training center's fitness appointments, allowing users to see availability and make bookings without leaving the site.`,
    image: theboxtivon_img,
    url: 'https://theboxtivon.netlify.app/',
    gitHubUrl: 'https://github.com/sideffect263/theboxtivon-v2',
    categories: ['web', 'business', 'booking'],
    technologies: ['React', 'Netlify', 'Iframe Integration'],
    dateCreated: '2022-04-12',
    relatedKeywords: [
      'fitness center website',
      'class booking integration',
      'gym landing page',
      'appointment scheduling',
      'fitness class calendar',
      'gym website template'
    ]
  },
  {
    name: 'NetViz Dashboard',
    slug: 'netviz-dashboard',
    description: 'A backend server providing APIs for comprehensive domain and IP scanning, including security information and DNS analysis.',
    extendedDescription: `NetViz Dashboard serves as the backend server for the NetScan360 front-end application. It provides robust APIs that enable users to search and scan domains or IP addresses, retrieving comprehensive information including:

    - IP address data and available Shodan information
    - DNS records (MX, NS, TXT records)
    - WHOIS information
    - CDN details
    - Security vulnerability information
    
    The system aggregates data from multiple sources to deliver a complete picture of a domain or IP's network footprint and security posture.`,
    image: netviz_img2,
    url: 'https://netviz-dashboard.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/netViz_backend',
    categories: ['cyber', 'network', 'security', 'api'],
    technologies: ['Node.js', 'Express', 'Network Analysis', 'Security API'],
    dateCreated: '2022-02-20',
    relatedKeywords: [
      'domain information API',
      'IP scanning service',
      'DNS record analysis',
      'network security assessment',
      'WHOIS information retrieval',
      'security data aggregation'
    ]
  },
  {
    name: 'NetScan360',
    slug: 'netscan360',
    description: 'A polished front-end interface for scanning domains and IPs, visualizing security and network information from the NetViz Dashboard.',
    extendedDescription: `NetScan360 is the front-end component for the NetViz Dashboard system, providing an intuitive and visually appealing interface for users to scan domains or IP addresses and receive comprehensive information about them.
    
    The application allows users to easily explore network data and security information through an elegant web interface, making complex network intelligence accessible and understandable. It communicates with the NetViz Dashboard backend to retrieve and display detailed domain and IP information.`,
    image: netviz_img1,
    url: 'https://netscan.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/netViz',
    categories: ['cyber', 'network', 'visualization', 'security'],
    technologies: ['React', 'Network Visualization'],
    dateCreated: '2022-02-28',
    relatedKeywords: [
      'domain scanning interface',
      'network information visualization',
      'IP intelligence dashboard',
      'security data presentation',
      'network analysis frontend',
      'domain investigation tool'
    ]
  },
  {
    name: 'NetSecDev',
    slug: 'netsecdev',
    description: 'A Chrome extension for detecting known CVEs and cross-referencing them with appropriate severity grades and fixes.',
    extendedDescription: `NetSecDev was developed as a learning project for creating Google Chrome extensions. The tool specializes in detecting known Common Vulnerabilities and Exposures (CVEs) and cross-referencing them with their appropriate severity grades and available fixes.
    
    This browser-based security tool leverages the Chrome DevTools Protocol to provide insights into potential security issues, helping developers and security professionals identify and address vulnerabilities in web applications.`,
    image: netviz_img3,
    gitHubUrl: 'https://github.com/sideffect263/netsecdev',
    categories: ['cyber', 'security', 'browser', 'tool'],
    technologies: ['JavaScript', 'Chrome Extensions', 'CVE Database'],
    dateCreated: '2022-05-10',
    relatedKeywords: [
      'vulnerability detection extension',
      'CVE identification tool',
      'security fix reference',
      'browser security scanner',
      'vulnerability grading system',
      'Chrome security extension'
    ]
  },
  {
    name: 'NewsWorld',
    slug: 'newsworld',
    description: 'A news aggregation platform that collects articles from RSS feeds and performs sentiment analysis, geolocation, and keyword extraction.',
    extendedDescription: `NewsWorld is a comprehensive news aggregation platform that currently collects articles from RSS feeds, with plans to integrate additional APIs and web scrapers in the future. The system performs advanced data analysis on each article, including:

    - Sentiment grading
    - Geolocation
    - Keyword extraction (for locations, people, and general themes)
    - Story creation by grouping related articles
    
    The platform has already collected and analyzed over 3,500 articles, creating a rich database of categorized news content. This organized approach allows for powerful search capabilities and trend identification across news sources.`,
    image: newsworld_img,
    url: 'https://newsworld.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/newsWorld',
    categories: ['web', 'data', 'news', 'analysis'],
    technologies: ['Node.js', 'RSS Feed Integration', 'Natural Language Processing', 'Data Analysis'],
    dateCreated: '2021-10-15',
    relatedKeywords: [
      'news aggregation',
      'sentiment analysis',
      'article categorization',
      'news data extraction',
      'content relationship mapping',
      'RSS feed processing'
    ]
  },
  {
    name: 'Random Cat Facts',
    slug: 'cat-facts',
    isEmbed: 'https://cat-facts-p44a.onrender.com/embed',
    description: 'A simple React app created in 30 minutes to demonstrate rapid development with AI assistance, displaying random facts from a cat facts API.',
    extendedDescription: `Random Cat Facts is a minimalist web application built in just 30 minutes with the help of Cursor AI. The project was created as a demonstration of how quickly a functional web app can be developed with AI assistance and creative thinking.
    
    The development process was split into three 10-minute phases:
    1. Conceptualization - deciding what to build and how to present it
    2. Data source research - finding and selecting the cat facts API
    3. Implementation - using Cursor AI to rapidly develop the React application
    
    The result is a simple but fully functional app that fetches and displays random facts about cats from an external API.`,
    image: catfacts_img,
    url: 'https://cat-facts-p44a.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/cat-facts',
    categories: ['web', 'AI-assisted', 'demonstration'],
    technologies: ['React', 'API Integration', 'Cursor AI'],
    dateCreated: '2021-07-05',
    relatedKeywords: [
      'rapid development demo',
      'AI-assisted coding',
      'API consumption example',
      'minimal viable product',
      'quick build demonstration',
      'Cursor AI showcase'
    ]
  },
  {
    name: 'Live Threat Map in 3D',
    slug: 'live-threat-map',
    description: 'A Three.js visualization of real-time cyber attacks worldwide, using data proxied from the Radware threat map.',
    extendedDescription: `The Live Threat Map in 3D is a sophisticated visualization tool that displays real-time cyber attacks occurring around the world. The application uses a proxy server to capture data from the actual Radware threat map and feeds it to a Three.js-powered front-end display.
    
    Users can observe genuine cyber attacks as they happen globally, presented in an immersive 3D environment that makes complex attack patterns more intuitive and understandable. The visualization helps security professionals and interested observers gain a better understanding of the volume, origin, and targets of current cyber threats.`,
    image: hackermap_img,
    url: 'https://hacker-attack-map-radware.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/hacker-attack-map-radware',
    categories: ['cyber', 'visualization', 'security', 'data'],
    technologies: ['Three.js', 'WebGL', 'Proxy Server', 'Real-time Data'],
    dateCreated: '2022-03-15',
    relatedKeywords: [
      'real-time attack visualization',
      '3D cyber threat map',
      'global attack monitoring',
      'security data visualization',
      'Radware data integration',
      'three-dimensional threat display'
    ]
  },
  {
    name: 'Quantum Computing Interface',
    slug: 'quantum-computing',
    description: 'An educational platform demonstrating quantum computing capabilities, comparing classical versus quantum approaches to breaking the Diffie-Hellman key exchange.',
    extendedDescription: `The Quantum Computing Interface is an educational platform that demonstrates the power of quantum computing by comparing classical and quantum approaches to cryptographic challenges, particularly the Diffie-Hellman key exchange. The interface showcases how a quantum computer can potentially break this widely-used encryption protocol, highlighting the significant security implications of quantum computing advancements.
    
    Beyond this core demonstration, the platform includes additional pages with metrics and data about quantum computing capabilities, along with an interactive playground where users can create and experiment with their own quantum circuits. These circuits can be run on IBM's quantum computers, giving users hands-on experience with real quantum systems.`,
    image: quantum_img,
    url: 'https://quantum-computing-interface.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/Quantum-Computing-Interface',
    categories: ['web', 'educational', 'quantum', 'cryptography'],
    technologies: ['React', 'IBM Quantum Integration', 'Quantum Circuit Simulation'],
    dateCreated: '2022-01-10',
    relatedKeywords: [
      'quantum cryptography',
      'Diffie-Hellman key exchange',
      'quantum circuit playground',
      'IBM quantum integration',
      'quantum computing education',
      'cryptographic vulnerability demonstration'
    ]
  },
  {
    name: 'AutoData',
    slug: 'autodata',
    description: 'An intelligent data analysis platform that automatically cleans data, identifies relationships between columns, and suggests appropriate visualizations.',
    extendedDescription: `AutoData is an advanced data visualization platform that streamlines the analysis process through automation. Users can simply drag and drop their datasets to begin analysis. The system then:

    1. Automatically analyzes and cleans the data
    2. Identifies straightforward relationships (numerical-to-numerical or category-to-category) and applies relevant charts
    3. Performs smart searching using advanced mathematical functions like KNN and other eleventh functions to detect connections between any columns
    4. Provides visualization suggestions based on the detected relationships
    
    Users can explore these relationships through five different 2D chart types or three different 3D chart options, making complex data patterns immediately visible and accessible without requiring advanced data science expertise.`,
    image: autodata_img,
    url: 'https://autodata.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/autodata',
    categories: ['data', 'visualization', 'analysis', 'automation'],
    technologies: ['Python', 'D3.js', 'Node.js', 'Machine Learning'],
    dateCreated: '2021-12-05',
    relatedKeywords: [
      'automated data visualization',
      'intelligent chart suggestion',
      'data relationship detection',
      'self-analyzing datasets',
      'KNN data analysis',
      'automated insight generation'
    ]
  },
  {
    name: 'AI Story Teller',
    slug: 'ai-story-teller',
    description: 'An experimental browser-based application running a local GPT-2 model to generate interactive fantasy stories with user choice branches.',
    extendedDescription: `AI Story Teller is an experimental project exploring the capabilities of running GPT-2 models directly in the browser. The application generates random fantasy stories and prompts users to choose between two options as the narrative progresses, creating a branching, interactive storytelling experience.
    
    As a technical experiment, the application demonstrates what's possible with local language models without requiring server-side processing. However, due to the constraints of running complex models in the browser, response times can range from 10 to 40 seconds for each generation.`,
    image: ai_story,
    url: 'https://ai-story-teller.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/ai-story-telling',
    categories: ['web', 'ai', 'nlp', 'interactive'],
    technologies: ['GPT-2', 'Browser-based AI', 'Interactive Fiction'],
    dateCreated: '2022-07-25',
    relatedKeywords: [
      'browser-based GPT-2',
      'interactive storytelling',
      'choice-based narratives',
      'local language model',
      'fantasy story generator',
      'client-side AI processing'
    ]
  },
];

export default projects;

