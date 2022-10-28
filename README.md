# Challenge: Escapium

| Challenge Parameters | Challenge Details  |
| :------------------- | :----------------- |
| Repository           | `Escapium`         |
| Challenge type       | `Consolidation`    |
| Duration             | `5 days`           |
| Deadline             | `04/11/2022 17h00` |
| Deployment method    | `GitHub pages`     |
| Group composition    | `Trio`             |

## The journey continues...

So far we have seen many things... Not sure what we've seen? Here is a list!

- Git
- Markdown
- HTML
- CSS
- Sass
- B.E.M.
- JavaScript

At this point you should understand HTML & CSS well enough to create a stunning website for your clients!
If not... Practice, practice and practice..

> Practice means to perform, over and over again in the face of all obstacles, some act of vision, of faith, of desire. Practice is a means of inviting the perfection desired.
> \~ Martha Graham

## It's the end of a spooky month

![](https://thumbs.gfycat.com/DamagedConcreteIcefish-size_restricted.gif)

No better way to end with a topic that could be your biggest fear, being locked up. That's right, a website for an **Escape room**! You will work together with **_2 other developers_** to reach to end.

That's double the amount of work being done and double the amount of **_git conflicts_**. ⚡💀⚡

To solve this puzzle, prepare your work well. Once again make use of Trello and other tools, for example:

- Canva
- Figma

> 💡 Real life Tip: To avoid regular interruptions during your work, have latest 1 team meeting a day to show off the progress that has been made, and to give feedback / ask questions when stuck.

## Design looks easier

The following design looks easier and lighter than the previous Kabibi project, but that does not make it easier!
There are many pages that have to be finished, and we expect a complete project.

![Escapium overview](./resources/backgroundEscapium.png)

## Goals

- Pixel perfect design
- **Everything** responsive (no excuses)
- Have some dynamic components
- **Sass & B.E.M.** usage
- Smooth teamwork
- Solve algorithm

## Animations

You will quickly notice that there are some beautifull animations all over the website. Keep those for last.

The scroll animations can be easily done, by using available libraries. You don't have to re-invent the wheel.

## Pages

In total there 7 pages to realise, I will order all pages by importance. I will document a little about the most important parts. See the design for more information.

Make sure to first create everything statically ready, once the responsive design is done, you can focus on JavaScript.

> 🚨 Important! 🚨 Some parts of the project are having bonuses. We do not want you to work on the bonuses if the webpage is not statically finished + responsive + pixel perfect.

---

### Homepage

<details>
<summary>See details for the homepage</summary>

#### Hero

Don't be misslead, in the design the navbar is missing! I should still appear on top of the page.

The page start with a carousel that changes images every 10 seconds, unless the user clicks on one of the not selected lines on the right side of their screen.

#### Featured Rooms

A nice little overview of a few featured rooms.  
**Bonus**: The `"read more"` redirects to the single room with it's correct data injected.

#### Testimonials

An interactive carousel to see the testimonials from our clients, the arrows can be used to navigate, there is a smooth loop between the slides.

#### Latest posts

Here we will see the 3 latest blog post from our Escape room!
When you click on the "Browse all Posts" it will navigate you to the blogs page.

#### "Instagram Shots"

A small gallery of images from our clients in our escape rooms.

**Bonus**: When an image is selected, they will display bigger across the entire screen.

</details>

<br>

[See the video](https://youtu.be/ahtlXP5Hr0U)

---

### About page

<details>
<summary>See details for the about page</summary>

#### Video

There is a seperate section where the user can press the play video and watch our latest video.

#### What people say

An interactive carousel to see the testimonials from our clients, the arrows can be used to navigate, there is a smooth loop between the slides.

#### FAQs

An accordion menu that opens and closes when clicking on it. When one tab is open, and the user clicks on a new one, the old tab should collapse.

</details>

<br>

[See the video](https://youtu.be/QH7FtS8kOcg)

---

### Contact page

<details>
    <summary>See details for the contact page</summary>

#### Contact form

A form that does nothing, it will be the back-ends job to receive the information of the client. However, make sure that the E-mail input is a valid email address. If not display in any way an error.

**Bonus**: If the user did not fill in the form completely, make a red border appear on the input with an error message below telling the user what they forgot.

#### Google map

Add a google map with a pin point to the campus location or a real Escape room.

</details>

<br>

[See the video](https://youtu.be/K6KOD4G-Qsw)

---

### Single room

<details>
    <summary>See details for the rooms page</summary>

#### Hero

Instead of "Rooms - grid - 4 cols." name this title "All our rooms".

#### All rooms

An overview of all available rooms. When clicked on one of the rooms, it takes you to the room.html

**Bonus**: Use the `rooms.json` file to automatically display all the rooms by using JavaScript. Add a new room to the list, Halloween themed.

**Extra Bonus**: Make the filter buttons work.

</details>

<br>

[See the video](https://youtu.be/OaXYkpBMgGA)

---

### Room page

<details>
    <summary>See details for the rooms page</summary>

#### Details

Nothing special, just an overview of all details about the room.

**Bonus**: The calendar on this page is a **BIG bonus**. But as in, this should not be done until everything else is done on the website. Including all other bonuses. (Agendas are a pain.)

#### Other rooms

Show 3 random rooms.

</details>

<br>

[See the video](https://youtu.be/OaXYkpBMgGA)

---

### Blogs

<details>
    <summary>See details for the Blogs page</summary>

#### Left side

A list of all the blogs the owner has written for their clients.

#### Right side

You'll see filters and categories, those should not be functional. They should however be visible.
Recent posts should display in short the 4 most recent posts.

##### "Instagram"

Display a gallery of images.

##### Archives

These should not be functional, just visible

</details>

<br>

[See the video](https://youtu.be/As8wkJbbLCM)

---

### Single blog

<details>
    <summary>See details for the Single blog page</summary>

Make this page static at the beginning

#### Left side

Some information about the escape room.

at the very bottom, users can leave a comment behind. This should just be static.

</details>

<br>

[See the video](https://youtu.be/As8wkJbbLCM)

---

## Navigation menu

The client only wants the following interactive links:

- Home
- About
- Rooms
- blog
- contacts

The book now button should bring the user to the "Rooms page".
The search and sign in should be removed.

## Responsive Design

There are 3 versions of designs for each page:

- mobile (Taken on a screen width of 412 px.)
- tablet (Taken on a screen width of 768 px.)
- desktop (Taken on a screen width of 1920 px.)

## Resources

### Images

Are located in the `resource/images` folder.

### Fonts

- Headings: `Montserrat`.
- Paragraphs: `Hind`.

### colors

- Red: `#F60B0E`
- Darkest background: `#1B1B1B`
- Dark background: `#222222`
- White background: `#fefefe`

- Global font color: `#717171`
- Nav font color: `#777`

## After this project your reaction will be:

![](./resources/hamilton-king-george.gif)

# Good luck!
