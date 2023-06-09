## Introduction

 As you work on websites with high image usage you encounter load time issues. You will probably try to reduce the load time by:
 - Optimizing the code, and images. 
 - Minifying CSS.
 - Server Side Rendering etc
 
 But still there will be something missing. I provide solutions for that something .

**Introducing Images Optimizing by Lazy Loading and Blur Image showing until the original loads techniques.**

 1. *Clone the project.*
 2. *Preferably use Node version 16.17.1*
 3. run command:
 `yarn`
 or
 `npm install`
 
 4. *Run the project:*
 `yarn dev`
 or
 `npm run dev`
 
 5. *Uncomment the different solutions to see their working in the App.jsx file.*
 6. *Inspect -->  Network --> Set Throttling to Fast 3G and select img filter.*

> **Note: By default Solution One is shown.** 
> 
> ****Don't forget to give a star*** ⭐️*

## Solution One

**This is implemented using custom JSX, CSS, and JS.**
**This is flexible and can be customised any way seen fit.**

 1.  By default images have loading attribute set to *eager*. You can change this to `loading='lazy'` to trigger the lazy loading on images. (Yes, it is as simple as that).
 2. Generate a blur version of the images to be used.
 3. Stacked the blur image on top of the original. Original image is hidden and only shows when it is completely loaded. Then this is shown instead of the blur image.
 5. Custom js is written to check for the loading of images and apply custom css.
 6. Shows a pulse animation and fade effect when image is loaded.
 7. use this commad to generate blur images: 
`ffmpeg -i imageName.jpg -vf scale=10:-1 imageNameSmall.jpg`
**scale** = *number tells the pixels*
**-1** tells to *maintain the aspect ratio*

> You can set the scale to however you see fit or use any other approach to generate a blur version of the original image.
> 
> For **mac** users you can get the ffmeg by using **brew**.
> For **windows** and **linux** follow **online guidelines**.

## Solution Two

> **This Solution uses the blur hash technique**

 1. For each image generate blur hash from the [blur hash website](https://blurha.sh/) or use their encoder and decoder.
 2. Store the image URL/path and blur hash in an object together
 3. Install blurhash react package and use it to decode the blur hash.
 4. When the original image is loaded show original image instead of blur hash image.


> There are draw backs to this approach.
>
> Although it is very convenient to have the URL and blur hash in the database and simply fetching and displaying them but **the blur image does not perfectly align with the actual image**
>
> On different screens this issue can be seen so the only solution to this is:
>
> **Set width and height for different screen sizes and match it with the blurhash width and height**

## Solution Three

**This solution uses the lazysizes library**
> 
> The best way to describe this library is that they use the same approach as the solution one.
>
>It is highly optimised and cross browser compatible.
>
**Check their doc to learn more [lazysizes](https://www.npmjs.com/package/lazysizes/v/5.3.2)**

## Other Solutions

1. **This solution uses the React Lazy Load Image Component **

> https://www.npmjs.com/package/react-lazy-load-image-component


**Note: Width and height on images are required for the browser to be able to calculate the viewport**