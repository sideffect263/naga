import dynamic_ui_img from './images/dynamic_ui_img.png';
import ctf_zone_img from './images/ctf_zone_img.png';
import liftfinder_img from './images/liftfinder_img.png';
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
import ai_story from './images/ai_story.png'

const projects = [
  {
    name: 'Mood-Based UI',
    slug: 'mood-based-ui',
    description: 'A dynamic site that adapts its user interface based on the user\'s mood, determined by analyzing mouse data usage patterns and applying machine learning models.',
    extendedDescription: `A cutting-edge web application that dynamically adapts its user interface based on the user's emotional state and interaction patterns. This innovative system uses real-time analysis of mouse movements, click patterns, and interaction timing to infer the user's current mood and engagement level.`,
    image: dynamic_ui_img,
    url: 'https://mood-based-ui.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/mood-based-ui',
    categories: ['web', 'machine learning', ],
    technologies: ['React', 'Machine Learning', 'CSS', 'JavaScript', 'TensorFlow.js', 'Emotion Recognition'],
    dateCreated: '2022-08-15',
    relatedKeywords: [
      'adaptive user interface',
      'emotional ui design',
      'mouse pattern recognition',
      'machine learning ui',
      'user interaction analysis',
      'mood detection algorithm',
    ],
   },
  {
    name: 'M33t',
    slug: 'm33t',
    description: 'A social platform designed to connect individuals with similar interests and facilitate event planning.',
    extendedDescription: `M33t is a comprehensive social networking platform specifically designed to help people discover others with shared interests and seamlessly organize in-person and virtual gatherings. Unlike traditional social networks that focus on existing relationships, M33t prioritizes interest-based connections and facilitates the transition from online interaction to real-world meetups.`,
    image: m33t_img,
    url: 'https://m33t.webflow.io/',
    gitHubUrl: 'https://github.com/sideffect263/M33t-social_Map',
    categories: ['web', 'social', 'frontend'],
    technologies: ['WebFlow', 'JavaScript', 'Social API', 'Google Maps API', 'NoSQL Database'],
    dateCreated: '2022-06-10',
    relatedKeywords: [
      'social event platform',
      'interest-based networking',
      'event planning application',
      'meetup organization tool',
      'community building platform',
      'location-based social network',
      'event discovery app'
    ]
  },
  {
    name: 'Ofek Lift Order System',
    slug: 'ofek-lift-order',
    description: 'A comprehensive web system for renting various types of lifts, including scissor lifts, boom lifts, and forklifts.',
    image: ofekliftstore_img,
    url: 'https://ofek-lift-order.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/ofek-lift-order-system',
    categories: ['web', 'e-commerce', 'rental'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    dateCreated: '2021-11-22',
    relatedKeywords: [
      'equipment rental platform',
      'lift rental system',
      'construction equipment booking',
      'online lift ordering',
      'industrial equipment rental',
      'scissor lift reservation',
      'boom lift rental application'
    ]
  },
  {
    name: 'Stellar Spectacle',
    slug: 'stellar-spectacle',
    description: 'An interactive visual demonstration of complex space phenomena, providing an educational experience.',
    image: space_img,
    url: 'https://skyone.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/stellar-spectacle',
    discordUrl: 'https://discord.gg/AM9V3m7U',
    categories: ['web', 'educational', 'data', 'visualization'],
    technologies: ['Three.js', 'WebGL', 'JavaScript', 'Physics Engine'],
    dateCreated: '2022-03-05',
    relatedKeywords: [
      'space visualization',
      'astronomy education platform',
      'interactive solar system',
      'cosmic phenomena simulation',
      '3D universe exploration',
      'educational astronomy application',
      'WebGL space visualization'
    ]
  },
  {
    name: 'Capture The Flag Zone',
    slug: 'ctf-zone',
    description: 'A cyber playground offering capture the flag challenges, designed to enhance cybersecurity skills.',
    image: ctf_zone_img,
    url: 'https://ctf-django.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/ctf-django',
    categories: ['cyber', 'educational', 'security'],
    technologies: ['Django', 'Python', 'Docker', 'Web Security'],
    dateCreated: '2021-09-18',
    relatedKeywords: [
      'CTF platform',
      'cybersecurity training',
      'ethical hacking challenges',
      'security learning platform',
      'hacking practice environment',
      'cybersecurity education',
      'penetration testing practice'
    ]
  },
  {
    name: 'Machine Learning Model Trainer',
    slug: 'ml-model-trainer',
    description: 'An application for creating and visualizing decision trees, enabling users to upload datasets and train models.',
    image: public_trainer_img,
    url: 'https://decision-tree-app.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/decision-tree-app',
    categories: ['data', 'machine learning', 'visualization'],
    technologies: ['Python', 'scikit-learn', 'D3.js', 'Node.js', 'Express'],
    dateCreated: '2022-01-30',
    relatedKeywords: [
      'decision tree visualization',
      'machine learning training platform',
      'model visualization tool',
      'interactive ML model builder',
      'data science education tool',
      'predictive modeling platform',
      'ML algorithm visualization'
    ]
  },
  {
    name: 'Lift Finder',
    slug: 'lift-finder',
    description: 'A tool for finding and comparing lift equipment for various industrial and construction purposes.',
    image: liftfinder_img,
    url: 'https://lift-finder.netlify.app/',
    gitHubUrl: 'https://github.com/sideffect263/lifter-web',
    categories: ['web', 'tool', 'comparison'],
    technologies: ['React', 'Firebase', 'Material-UI'],
    dateCreated: '2021-08-05',
    relatedKeywords: [
      'construction equipment comparison',
      'lift equipment finder',
      'industrial lift selector',
      'equipment rental comparison',
      'construction tool finder',
      'aerial work platform guide',
      'equipment specification comparison'
    ]
  },
  {
    name: 'TheBoxTivon Fitness Hub',
    slug: 'theboxtivon',
    description: 'A website for TheBoxTivon fitness hub, providing information about classes, trainers, and booking options.',
    image: theboxtivon_img,
    url: 'https://theboxtivon.netlify.app/',
    gitHubUrl: 'https://github.com/sideffect263/theboxtivon-v2',
    categories: ['web', 'business', 'booking'],
    technologies: ['React', 'Netlify', 'Booking API', 'CSS'],
    dateCreated: '2022-04-12',
    relatedKeywords: [
      'fitness center website',
      'gym class booking system',
      'fitness trainer profiles',
      'exercise class scheduling',
      'workout program registration',
      'fitness membership management',
      'gym website template'
    ]
  },
  {
    name: 'NetViz Dashboard',
    slug: 'netviz-dashboard',
    description: 'A Node.js server that analyzes domains and IPs, returning valuable information about network topology and security assessments.',
    extendedDescription: `NetViz Dashboard is a sophisticated network visualization and security assessment tool that provides comprehensive insights into network infrastructure, topology, and potential vulnerabilities. The system serves as the backend processing engine for the NetScan360 frontend interface, delivering powerful analysis capabilities through a scalable Node.js architecture.

    The dashboard collects, processes, and analyzes vast amounts of network data to generate meaningful visualizations and actionable security insights. It can map complex network topologies, identify unusual traffic patterns, detect potential security breaches, and provide detailed information about connected devices and their relationships.

    Key features include domain and IP reputation checking, network path visualization, DNS analysis, port scanning capabilities, and vulnerability assessment. The system integrates with multiple security intelligence feeds to provide real-time threat information and contextual alerts about potentially malicious activities.

    NetViz Dashboard is designed for network administrators, security professionals, and IT teams who need to maintain comprehensive visibility into their network infrastructure while proactively identifying potential security issues before they can be exploited.`,
    image: netviz_img2,
    url: 'https://netviz-dashboard.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/netViz_backend',
    categories: ['cyber', 'network', 'security', 'tool'],
    technologies: ['Node.js', 'Express', 'Network Analysis', 'Security API', 'MongoDB', 'Socket.io'],
    dateCreated: '2022-02-20',
    relatedKeywords: [
      'network topology visualization',
      'security assessment dashboard',
      'network mapping tool',
      'cybersecurity visualization',
      'network monitoring dashboard',
      'threat detection system',
      'IT infrastructure analysis',
      'network security scanner'
    ],
    
  },
  {
    name: 'NetScan360',
    slug: 'netscan360',
    description: 'The front-end interface for NetViz, providing comprehensive network topology analysis and visualization.',
    extendedDescription: `NetScan360 is an advanced network visualization tool that serves as the front-end interface for the NetViz Dashboard system. This powerful web application transforms complex network data into intuitive, interactive visualizations that enable IT professionals to understand network topology, identify security vulnerabilities, and troubleshoot connectivity issues with unprecedented clarity.

    The application features a sophisticated graph-based visualization engine that renders network nodes, connections, and traffic patterns in real-time. Users can interact with the visualization through an intuitive interface that supports zooming, filtering, and focusing on specific network segments or devices. The system automatically identifies important network elements and potential security concerns, highlighting them visually for immediate attention.

    NetScan360 integrates seamlessly with the NetViz Dashboard backend to provide comprehensive network analysis capabilities. Users can drill down into detailed information about any network device, connection, or traffic pattern with a simple click. The application supports both real-time monitoring and historical analysis, allowing for trend identification and anomaly detection across different timeframes.

    With its responsive design, NetScan360 works effectively on devices ranging from large SOC displays to tablets used by field technicians. The application emphasizes usability without sacrificing analytical depth, making complex network visualization accessible to IT professionals at all skill levels.`,
    image: netviz_img1,
    url: 'https://netscan.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/netViz',
    categories: ['cyber', 'network', 'visualization', 'security'],
    technologies: ['React',  'Network Visualization', ],
    dateCreated: '2022-02-28',
    relatedKeywords: [
      'network topology mapping',
      'interactive network visualization',
      'cybersecurity visualization tool',
      'IT infrastructure diagram',
      'network monitoring interface',
      'security visualization dashboard',
      'network traffic analysis',
      'D3.js network graph'
    ]
  },
  {
    name: 'NetSecDev',
    slug: 'netsecdev',
    description: 'A browser-based security scanning tool that leverages the Chrome DevTools Protocol and other browser APIs to analyze websites for common security vulnerabilities.',
    image: netviz_img3,
    gitHubUrl: 'https://github.com/sideffect263/netsecdev',
    categories: ['cyber', 'security', 'browser', 'tool'],
    technologies: ['JavaScript', 'Chrome DevTools Protocol', 'Security Analysis'],
    dateCreated: '2022-05-10',
    relatedKeywords: [
      'browser security scanner',
      'website vulnerability assessment',
      'Chrome DevTools security',
      'web application security testing',
      'client-side security analysis',
      'frontend security scanner',
      'XSS detection tool'
    ]
  },
  {
    name: 'NewsWorld',
    slug: 'newsworld',
    description: 'A Node.js backend API and full web system for a global news and data aggregation platform, collecting, processing, and serving news articles from various sources worldwide.',
    image: newsworld_img,
    url: 'https://newsworld.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/newsWorld',
    categories: ['web', 'data', 'news', 'api'],
    technologies: ['Node.js', 'MongoDB', 'Express', 'News API'],
    dateCreated: '2021-10-15',
    relatedKeywords: [
      'news aggregation platform',
      'global news collection system',
      'content curation API',
      'news data processing',
      'media aggregation service',
      'international news feed',
      'real-time news platform'
    ]
  },
  {
    name: 'Random Cat Facts',
    slug: 'cat-facts',
    description: 'A React web application that displays random facts about cats, providing a fun and educational experience for cat enthusiasts.',
    image: catfacts_img,
    url: 'https://cat-facts-p44a.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/cat-facts',
    categories: ['web', 'educational', 'fun'],
    technologies: ['React', 'API Integration', 'CSS'],
    dateCreated: '2021-07-05',
    relatedKeywords: [
      'cat information application',
      'feline facts generator',
      'educational pet app',
      'random animal facts',
      'cat trivia platform',
      'pet education resource',
      'feline information database'
    ]
  },
  {
    name: 'Live Threat Map in 3D',
    slug: 'live-threat-map',
    description: 'A 3D map visualizing live cyber attacks around the globe, offering insights into global cybersecurity threats.',
    extendedDescription: `The Live Threat Map in 3D is an immersive cybersecurity visualization platform that transforms complex global attack data into an intuitive, interactive 3D globe representation. This cutting-edge tool provides real-time visualization of cyber attacks as they occur worldwide, offering security professionals and organizations unprecedented insight into the global threat landscape.

    The system aggregates attack data from multiple sources including honeypots, security sensors, threat intelligence feeds, and partner networks to create a comprehensive view of current cyber attack patterns. Each attack is rendered as an animated trajectory on the 3D globe, with color coding representing attack types and intensity indicating volume.

    Users can interact with the globe to explore attack origins, destinations, methods, and trends. The platform includes powerful filtering capabilities to focus on specific attack types, geographic regions, or time periods. An integrated timeline feature allows for historical analysis and pattern recognition across different timeframes.

    Beyond its visual appeal, the Live Threat Map offers practical security applications including early warning of emerging attack campaigns, identification of compromised infrastructure, and strategic intelligence on attacker methodologies and targeting patterns.`,
    image: hackermap_img,
    url: 'https://hacker-attack-map-radware.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/hacker-attack-map-radware',
    categories: ['cyber', 'visualization', 'security', 'data'],
    technologies: ['Three.js', 'WebGL', 'Real-time Data', 'Security Feed', 'WebSockets', 'D3.js'],
    dateCreated: '2022-03-15',
    relatedKeywords: [
      'cybersecurity attack visualization',
      '3D threat intelligence map',
      'global cyber attack monitoring',
      'real-time security visualization',
      'interactive threat map',
      'cyber attack tracking system',
      'security operations center display',
      'WebGL security visualization'
    ]
  },
  {
    name: 'Quantum Computing Interface',
    slug: 'quantum-computing',
    description: 'An interface exploring quantum computing and cryptography, providing educational resources and interactive tools.',
    image: quantum_img,
    url: 'https://quantum-computing-interface.onrender.com/',
    gitHubUrl: 'https://github.com/sideffect263/Quantum-Computing-Interface',
    categories: ['web', 'educational', 'quantum', 'crypto', 'diffie-hellman key exchange'],
    technologies: ['React', 'Quantum Libraries', 'Interactive Visualization'],
    dateCreated: '2022-01-10',
    relatedKeywords: [
      'quantum computing education',
      'quantum cryptography platform',
      'quantum algorithm visualization',
      'quantum programming interface',
      'quantum mechanics learning tool',
      'quantum computing simulation',
      'interactive quantum education'
    ]
  },
  {
    name: 'AutoData',
    slug: 'autodata',
    description: 'An automatic data analysis and visualization platform, enabling users to upload datasets and generate insightful visualizations.',
    image: autodata_img,
    url: 'https://autodata.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/autodata',
    categories: ['data', 'visualization', 'analysis', 'tool'],
    technologies: ['Python', 'D3.js', 'node.js', 'Machine Learning', ],
    dateCreated: '2021-12-05',
    relatedKeywords: [
      'automated data visualization',
      'data analysis platform',
      'business intelligence tool',
      'data visualization generator',
      'data insights application',
      'chart generation system',
      'visual data analysis'
    ]
  },
  {
    name: 'AI Story Teller',
    slug: 'ai-story-teller',
    description: 'A browser-based AI storytelling app that generates dynamic, procedural narratives using a small GPT model and Transformers.js. Users can co-create data stories in real time.',
    image: ai_story,
    url: 'https://ai-story-teller.ofektechnology.com/',
    gitHubUrl: 'https://github.com/sideffect263/ai-story-telling',
    categories: ['web', 'ai', 'nlp', 'interactive'],
    technologies: ['Transformers.js', 'GPT Model', 'React', 'WebAssembly'],
    dateCreated: '2022-07-25',
    relatedKeywords: [
      'AI narrative generation',
      'procedural storytelling app',
      'browser-based GPT model',
      'interactive story creation',
      'transformers.js application',
      'collaborative AI writing',
      'natural language generation'
    ]
  },
];

export default projects;
