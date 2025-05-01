# mj
vanilla js mahjong game, for my js-learning friend


# instructions

---

#### Prerequisites

- [ ] Download the Code Runner extension by Jun Han
- [ ] Read the [Javadoc](#Javadoc) section
- [ ] Familiarize yourself with this repo: [README.md](#instructions) contains lessons,
      [/answers](./answers) contains answer keys to the lessons
- [ ] Make an index.js file in the root of your project. You will make your changes here.
- [ ] Complete lesson 0


## lesson 0: setup variables

---

Welcome to the course. This lesson isn't reallllly a lesson, but it will set you
up for coding. 

#### 0.1: Lay of the Land

First, brainstorm what categories of tiles there are. Here's what I came up with: 
<details>
<summary>Attempt</summary>

1. Bamboo, Circles, and Characters are all numerical tiles
2. Dragons and Winds are honour tiles
</details>

#### 0.2: Converting to Constants

Next, we want to turn these categories into constants. If there are any other
noteworthy restraints/boundaries of mahjong tiles, we also want those turned
into constants. 

Why all the constant-ifying? This link explains it well, especially the "Why
Refactor?" and "Benefits" section:
https://refactoring.guru/replace-magic-number-with-symbolic-constant

Alright. Now that we know why, here's what I did:
Note: this is very flawed, we will make improvements starting in lesson 1. 
That is okay. You might have some constants I missed. That is great.

<details>
<summary>Attempt:</summary>

```js
const MIN_NUMBER = 1
const MAX_NUMBER = 9
const SUITS = ['bamboo', 'characters', 'circles']
const WINDS = ['north', 'south', 'east', 'west']
const DRAGONS = ['red', 'green', 'white']
```
</details>

#### 0.3: Prep For Tile Generation

Finally, we want to make an empty array variable to hold all the tiles we
will create in lesson 1. 

```js
const allTiles = []
```

You are now ready to start lesson 1!

_Reminder that lesson answers are stored in the [/answers](./answers) folder._

<br />

## lesson 1: create deck of tiles

---

#### 1.1: Generate Regular Tiles
> 1) Start an empty function called `generateRegularTiles()`.
> 2) For every suit, loop through every number. Print the suit and number as a string.
>     - ex. loop through string array: `for (let food in foods) { console.log(food) }`
>     - ex. loop through range of numbers: `for (let i = startNum; i < endNum; i++ ) { ... }`
> 3) Now make it print the suit and number in an object instead.
>     - ex. Making an object: `const plushie = { name: "bunnini", age: 3 }`
> 4) Instead of logging the object, push it to allTiles instead.
>     - ex. Pushing to an array: `myArr.push("fuwa")`
> 5) We realize we need 4 sets of each tile, but the current code only makes 1 set.
>    We will move what we currently have to a new function named `generateRegularTileSet()`
>    which makes 1 set, and call this function 4 times in `generateRegularTiles()`.
> 6) We realize that of those 4 sets, only 1 contains red fives. But right now, `generateRegularTiles()`
>    creates 4 identical sets of tiles! How do we tell it to make one special? See step 7 for the answer.
> <details> 
> <summary>7. Generate Red Fives</summary>
>
> 7) I think we should pass a parameter `isRed`. That way, if the parameter is true and the number
>    is 5, then it's red. This will be a new property in the tile object.
>    - ex. Setting new property of object: `plushie.colour = "beige"` (this makes printed objs more readable)
>    - ex. Creating object with optional property: `const light = { needsAAA: batteryType === 'AAA' }` (common in industry)
> </details>
> 
> 8) Now we want to verify our work. Any ideas how to do that? 
>    <details>
>    <summary>Suggested solution</summary>
>    
>    ```js
>    generateRegularTiles()
>    console.log(allTiles)
>    ```
>
>    Then, press the play button at the top right of your screen. This uses the code runner extension.
> </details>
>
> 9) Oh, no! Looks like the suits aren't working: `{ suit: '0', number: 1, isRedFive: false }`. 
>    That's because I forgot that the `x` in `for (let x in arr)` actually is an index, instead of
>    being the value itself. So if x is the index, and arr is the array, how do we get the suit to
>    be the value we want?
>    - ex. Accessing the 5th item of a 0-indexed array: `arr[4]`
> 10) Once that is fixed, run your code again and check the output. 
> 
> Congrats, you have completed this section. 

<br />

#### 1.2: Generate Honour Tiles

> WORK IN PROGRESS

#### 1.3: Pretty-print Tiles

So... we've been reading tile objects so far, but it's not very easy to skim, nor is
it concise in any manner. We're going to do a QOL fix now, to print tiles concisely.

> WORK IN PROGRESS

<br />

#### Bonus Challenges

_Keywords are bolded._

- Instead of printing out every tile, can you **filter** for character tiles only? Shiny tiles only? Honour tiles only?
- What about printing out a tile only if the winds **includes** it?

<br>

## lesson 1.5: shuffle tiles

---

<br>

## lesson 2: distribute tiles 

---

In this section we will be setting up the wall, dora, and player hands. 
Lots of arrays coming up, get prepared!

<br>

## lesson 3: draw and discard

---

## lesson 4: resiliency

---

What if the player discards a tile they don't have? Try it out. 

The app crashes, gg. 

This also goes for if their syntax is wrong. 

In this lesson, we will work on writing instructions for the player, and also catch errors while adding
helpful text if they put the wrong thing. 

## lesson 5: checking for win condition

---

<br />

# Readings

## Javadoc

While you are doing this lesson, I want you to add a 1-sentence comment to every function you make.
This sentence should **describe what the function is for**.

For example:
```js
/**
 * Bolds the given sentence.
 */
function boldify(sentence) {
    return `**${sentence}**`
}
```

The `/**` syntax is called javadoc, and is commonly used for describing functions.
You won't see this level of verbosity in industry, but it is very common in school projects where you
have to explain or aid yourself in recalling what the code is all about.

It is also good for training you to write good function names, since function names are really just
functional summaries.

<details> 
<summary>Digression: my Javadoc has @'s! </summary>

If you add the `/**` above an existing function and press enter, you might notice it ends up like this:
```js
/**
 * 
 * @param sentence
 * @returns {string}
 */
```

Sometimes people write descriptions for parameters (e.g. what variable type) and return values.
You can keep em or delete em, doesn't really matter.
</details> 

Finally, if you want to add a pithy comment describing the function or you want to link a source,
you can also do that in the javadoc.