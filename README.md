# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Intro section with dropdown navigation solution](#frontend-mentor---intro-section-with-dropdown-navigation-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot](./images/snap%20by%20edward%20-%20desktop.png)


### Links

- Solution URL: [Here](https://github.com/edward-frans/frontend-mentor-challenge-intro-section-dropdown) <!-- Github -->
- Live Site URL: [Here](https://edward-frans.github.io/frontend-mentor-challenge-intro-section-dropdown/) <!-- Github Pages -->
 
## My process

### Built with

- HTML5
- CSS
- JavaScript

### What I learned

During the development process of this project, I learned many things:

1. Reviewing the page of Discord, i realized that they have 2 containers, one for desktop and the other for mobile. Then, when i have a mobile, i view that the page change to the other div,  kwoning this, i have a more amplied vision of what i have to do for this project. So i did the same, i did 2 divs, one for desktop and one for mobile. 
Discover this make me save a lot of time, beacuse i spended 2 or 3 weeks researching how to do this. 
I know that is so dumb of me, because i could simply asking for someone help, but, i dont know, asking something like this, it feels kind of embarrasing, and most of the people maybe will say things like "you have to study this before" or "you dont know THIS?! 

1. While i did the dropdown, i realized that, it will be more easy if i have a guide, like a wireframe, so i remerbered that in the past i used figma for things like that.
So before wasting time trying to do the dropdwon with no idea of how. I did the wireframe, or at least a guide to know how to do not only the dropdown, but all the page. Including the mobile view. 
But i forgot one of the most important things, the "mobile first". And i payed the cost of that error.
Fotunately, i was able to fix it in time.

3. Something important that i learned, is how i hided the menu in the mobile view.
Is hard to explain, but for this i did a div, and one day, watching videos in youtube, i clicked on one video of Bedimcode, of course i did not watched all the video, it was 7 or 8 hours and i only wanted to know how hide the menu. But finally, i did it, and it was more simple that i tought. 
In resume, i use the property "right" in css to show and hide the menu, with 0 to show and -100% to hide.
Then with some of javascript i finished it.


```js
let featuresMob = document.getElementById("features-mob");
let companyMob = document.getElementById("company-mob");

let arrowFeaturesMob = document.getElementById("arrow-features-mob");
let arrowCompanyMob = document.getElementById("arrow-company-mob");

let srcArrowUp = "/images/icon-arrow-up.svg";
let srcArrowDown = "/images/icon-arrow-down.svg";

function showFeatures() {
  ...

  if (featuresMob.style.display == "none") {
    featuresMob.style.display = "inherit";
    arrowFeaturesMob.src = srcArrowUp

  } else {
    featuresMob.style.display = "none";
    arrowFeaturesMob.src = srcArrowDown
  }
}
```

4. Also of that video, i learned how to apear the menu with a click, that was simply Javascript, but i forgot it. I ashamed of that, but at least, this time i will not forget it again.

### Continued development

Something that i want to add, is transitions. For some reason i tried but is not worked.

Now, i will use scss for this kind of things.

I knowed this before, but because of time, i did a lot of divs just for finalize this project as soon as posible.  
I will change that, later.

And finally, i know that the code, could be optimized, i will be working on that later.

### Useful resources

- [Video of Bedimcode](https://youtu.be/YzRDHxbw1RU) - This helped me for hide the menu in the mobile view.

## Author

- Website - [Soon](https://www.your-site.com)
- Frontend Mentor - [@edward-frans](https://www.frontendmentor.io/profile/edward-frans)
- Twitter - [@3dward_frans](https://twitter.com/3dward_frans)
