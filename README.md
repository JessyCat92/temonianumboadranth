# Tasks
## Tags for the tasks
Tasks are tagged with Task-1 ...

## how to run "backend"
I added a shortcut for this. It can be started with `npm run server` - It will start on Port 3001.

## how to run app
- As all Tasks are created with react (typescript) and as css framework bootstrap, it is required to install all 
  dependencies with `npm i`
- you can start the project via `npm start` (will be started at default port http://localhost:3000)
- or create a build (`npm build`) and run it on any webserver that is configured accordingly.

## Some words to the tasks:
### Task 1/general:
I decided after reading all tasks to go with react directly as all tasks will be built on top of each other.
As I was allowed to take my favorite frameworks, I decided to go with react, typescript, scss and bootstrap.

To start the project as fast as possible, I started with create-react-app and template typescript.

As the task is to show a index.html with a js and a css file - I was not sure if this approach could be a bit 
misleading - but at least after running react is already doing this. At this step the Stars only shows an 
Headline (h1) with Hello World as required.

### Task 2
I added here the 3 pages and added the Menu at the top as only 3 navigation points can be fulfilled there.
As I was not sure about "Implement multiple designs" - I left this out for now. To implement here multiple 
designs at least for coloring classes can be changed as bootstrap delivers that. To move the Nav to the side 
(which doesn't make sense with only three pages in my mind) - we could do this by simply overwriting bootstrap
classes with other flex values. 

I added also a basic Imprint - as here was nothing in the tasks I added an imprint about myself.
I added here also my Github Account and also my Community Github Organisation - Most of the stuff there
is created by myself - be aware most of that is already old or was atg times I started different new frameworks
and had also not too much time - but maybe if you are interested it will give you some more coding impressions 
about me.

### Task 3

### Task 4
- _Use a CSS-Preprocessor to generate your CSS:_ As I decided already from earlier state to use SCSS/SASS 
  I have this already in place. This is already supported by react-scripts - so it is not necessary to do 
  changes here. 
- _Minify your CSS and JS and use the minified version in your application:_ react-scripts already minifies 
  css and js during build via `npm build` - which should be the version that is used in productive environments
- _Use a build tool or task runner to automate the build of your application:_ this is also already part of 
  react-scripts. React-scripts uses webpack for this.
  
### Task 5
I added Tests for the Stars Service (see services/Stars).

### Task 6 
As json-server generates the id via automatic incrementation ID of Star and Universe is in my case always 
unique. So I did not add an additional check on this.