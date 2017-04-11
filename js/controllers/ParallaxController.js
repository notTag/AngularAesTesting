angular.module('app').controller('ParallaxCtlr', function ($scope) {
    $scope.whitePaper = 'img/white_folded_paper.png';
    $scope.bluePaper = 'img/blue_folded_paper.png';
    $scope.triangles = 'img/triangles.jpg';
    $scope.scaleneTriangles = 'img/scaleneTriangles.jpeg';

    $scope.technicalSkills = ["Java", "Python", "Javascript", "JQuery", "AngularJs", 
                              "HTML / CSS", "Data Structures", "Algorithm Design", 
                              "RESTful Services", "Object Oriented Design", "Loosely coupled design"];
                          
    $scope.questionAndAnswer = [
        {question: "What have I Worked on?", answer: "Production cross-browser web apps to provide mental health facilities with tools and solutions to effectively reach their needs. This may be replacing their already existing paper system with software or creating new use-cases for them to be more productive with their clients."},
        {question: "What keeps me inspired?", answer: "Breaking down seemingly large obstacles and complex problems. Working with individuals that are passionate, intelligent and forward thinking."},
        {question: "What am I really good at?", answer: "Problem solving, working as a team member, being a leader, self-motivation, organization."},
        {question: "How would I describe myself?", answer: "At my core, I am a leader. An inherent ability to lead pulls the best skills out of the people you work with. Sometimes I am working with a team of engineers to develop an efficient and scalable product. Sometimes I am working solo where I need to draw my best self out for the task. Either way the targeted goals are met and progress is made. I am in constant pursuit to best my best by putting myself in situations where that is possible. I am looking for a company where I can utilize my current skills and at the same time push them to the next level."},
//        {question: "Side Projects", answer: "Physique Progress Tool (working title :) ). Creates and utilizes tools I use everyday to update and track my fitness progress. Examples: record weight, track caloric deficit or caloric surplus based on Basal metabolic rate, analyze progress."},
        {question: "What am I looking to do next?", answer: "Work with like minded, inspired, driven engineers who build software that is more than just readable, reusable, maintainable and efficient. A company where the heart of the engineers pour out through their work."}
    ];
    
    $scope.sideProject = [
        {header: "A side project in detail", answer: ""},
        {header: "High-Level", description: "Built and designed a robotic system to analyze a video feed for elements based off of high-dimensional data. A camera overlooking the robot and the environment provided the high-dimensional data to the robot. The data is then processed to compute coordinates for the robot's current position and the colored object. The two sets of coordinates allow the robot to identify its current location and relocate itself to the colored element."},
        {header: "Algorithm", description: "My system extrapolated the y and x coordinates from each element to create an origin for the robot to position itself against. Between the robot, the colored element and our origin a triangle has been constructed. Once my triangle was created I computed the angle to move the robot. Utilizing Pythagoreans theorem, the system is able to generate the length of the robot's path."},
        {header: "Tech Stack", description: "The system was written in python with NumPy and openCV. In order to write for the robot in python the firmware needed to be updated and patched."},
        {header: "Challenges", description: "Low quality camera produced a lot of noise in the video feed. This made it difficult to identify the objects (robot and goal position). I compensated for this by allowing for a greater ranges of colors to be identified. "}
    ];
    
//    Languages: Java, Python, JavaScript
//    Object Oriented Design, MVC, HTML5, CSS, SOAP, REST, SQL, XML Library: JQuery, Highcharts, NumPy, OpenCV
//    Framework: AngularJs

});


