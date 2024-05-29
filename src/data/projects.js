import howSickIsMyBaby from '../assets/howSickIsMyBaby.png';
import roboFriends from '../assets/roboFriends.png';
import backgroundGenerator from '../assets/backgroundGenerator.png';
import dateNightDecider from '../assets/dateNightDecider.png';
import cfgPython from '../assets/cfgPython.png';

export const projects = [
  {
    title: 'How Sick is my Baby?',
    about:
      'As a first time mum on maternity leave I found myself going down the Google rabbit hole late at night when support services were shut. I found a useful PDF but it was not accessible for sleep deprived caregiver’s. This app is designed to be user friendly, to assist in the decision of what level of medical care their baby needs. Uses cumulative scores that link to the relevant health advice suggested for the baby.',
    tech: ' Tech used in this project included JavaScript, HTML, CSS, React and GitHub',
    // tech: ['JavaScript', 'HTML', 'CSS','React, 'GitHub'],
    sourceCode: 'https://github.com/LauraPinckney/HowSickIsMyBaby',
    image: howSickIsMyBaby,
  },
  {
    title: 'Robo Friends',
    about: 'Developed as part of my React learning. Fun app that uses an API.',
    tech: ' Tech used in this project included JavaScript, HTML, CSS and GitHub',
    // tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    sourceCode: 'https://github.com/LauraPinckney/robofriends',
    image: roboFriends,
  },
  {
    title: 'CFG - Python Project',
    about:
      'Project to showcase skills learnt throughout the Code First Girls - Introduction to Python & Apps course',
    // tech: ['Python', 'GitHub'],
    tech: 'Tech used in this project included Python and GitHub',
    sourceCode: 'https://github.com/LauraPinckney/CFG--PythonTask',
    image: cfgPython,
  },
  {
    title: 'Background Generator',
    about:
      'Developed as part of my JavaScript learning. App that can create random background options.',
    tech: ' Tech used in this project included JavaScript, HTML, CSS and GitHub',
    // tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    sourceCode: 'https://github.com/LauraPinckney/BackgroundGenerator',
    image: backgroundGenerator,
  },
  {
    title: 'Date Night Decider',
    about:
      'Application created during the first hackathon of my bootcamp to decide on what to do for date night. Random selector of movie, cocktail and trivia to go through whilst the movie is loaded and cocktail is made. Used various APIs and worked in a team of two.',
    tech: ' Tech used in this project included JavaScript, HTML and CSS',
    // tech: ['Javascript', 'HTML', 'CSS'],
    sourceCode:
      'https://github.com/LauraPinckney/Team-8-The-Tech-Titans-plus-One/tree/main',
    image: dateNightDecider,
  },
];
