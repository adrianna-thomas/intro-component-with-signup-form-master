# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshots/desktop-screenshot.png)
![](./screenshots/desktop-screenshot-active.png)
![](./screenshots/mobile-screenshot.png)
![](./screenshots/mobile-screenshot-active.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-HkJUWINHq)
- Live Site URL: [Github Page](https://adrianna-thomas.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use variables and a for loop to perform the Javascript instead of writing out each line separatedly.

```js
const form = document.querySelector(".box-2 form");
const inputs = document.querySelectorAll(".box-2 form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
    }
  });
});
```

### Continued development

Refine using Javascript to display error classes.

### Useful resources

- [Box Shadow Resource](https://getcssscan.com/css-box-shadow-examples) - This helped me for decide which box shadow to use.
- [Pixels to REM Converter](https://www.ninjaunits.com/converters/pixels/pixels-rem/) - Useful for converting pixel to rem.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/adrianna-thomas)

## Acknowledgments

1. [WEB CIFAR's Youtube](https://www.youtube.com/watch?v=HD4qiSU1CBQ&ab_channel=WEBCIFAR) - Helped me with approaching the Javascript.
