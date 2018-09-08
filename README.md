# testAngularjs
This is my solution for a test required during the hiring process of a company I am applying for.

Explanation of my choices:
The architecture is a simplified version of AngularJS's latest build's seed application. This architecture was also mixed with new good practices (The separated components as their own modules) allowing an easy upgrade to Angular2 if ever required.
It then follows an MVC structure mixed with a component structure altogether.  
The external libraries (bootstrap, jquery - only used because of bootstrap dependency - and angularjs) are commited only because this is for a test in which I wanted to make sure we would use the same version. They are located in the "libs" directory.
I am using the ngRoute module to handle the navigation between the different views of the application.

The list of repositories:
I decided not to use "ng-bind" between the text input and the update of the list in order to limit calls to the external API. Type your keyword in and press enter or the "Search" button.

The list of issues for a selected repository:
After a search is performed, click on the "View issues" button to be taken to the "issue list view" for that specific repository.
