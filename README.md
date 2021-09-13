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
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot
![image](https://user-images.githubusercontent.com/76195521/133163409-32ab2e9b-2da0-4c23-aca5-f26cbf3f1ca8.png)
![image](https://user-images.githubusercontent.com/76195521/133163587-73c6a98f-fdee-47e5-91ab-d83107cc8e79.png)


### Links

- Solution URL: [Github Pages](https://t4r0taro.github.io/introSignUpForm/?firstname=&lasname=)
- Live Site URL: [Github Repo](https://github.com/T4R0TARO/introSignUpForm)

## My process
1. Structure HTML for postitioning 
2. Create Media Querey for Desktop Style positioning
3. Begin Mobile Styles 
4. Begin Desktop Styles
5. Refine margin and positioning for both styles

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS vanilla


### What I learned
Soo simple but finding out that setting the opacity to a element you want to hide without collapsing other elements was lightbulb moment for me 😂
```css
  .errorMsg {
    color: var(--error-red);
    font-size: 12px;
    margin: 0 0 18px 90px;
    opacity: 0; /*🧠🔺*/
  }

```
Error message checks if input if left empty. 
```js
function firstNameValidation() {
    const fnameInput = document.querySelector('.fname').value;
    const fnameIcon = document.querySelector('.fnameIcon');
    const fnameError = document.querySelector('.fnameError');
    const fnameBorder = document.querySelector('.fname');

    if ( fnameInput !== "" ){

    } else {
        fnameIcon.style.opacity = "1";
        fnameError.style.opacity = "1";
        fnameBorder.style.borderColor = "red";
    }
}
```


### Continued development
Probably refactor my js since I notice that I am reapting myself but not sure how I can simplify it further 😓



## Author

- Website - [Joshua Manansala](https://github.com/T4R0TARO)
- Frontend Mentor - [@T4R0TARO](https://www.frontendmentor.io/profile/T4R0TARO)


