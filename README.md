# React-Nonogram
[Try it out right here](https://sundwalltanner.github.io/React-Nonogram/)

## Description
This is currently in the very early stages of development. I haven't created anything that warranted the use of [GitHub Pages](https://pages.github.com/) yet, so I thought I would try and remake [the Nonogram game I built in Rust](https://github.com/Sundwalltanner/Rust-Nonogram). I previously used JavaScript in [a Discord Idle RPG bot](https://github.com/Sundwalltanner/Dewie-RPG), but I've never used React before.

## Hopes and Dreams
By the end of development, I plan on implementing every feature from my original Nonogram game, and then some. The original game I made in Rust was limited by the game engine I was using to create it ([Piston](https://www.piston.rs/)). I hope to utilize React.js in order to overcome the challenges I faced with ```Piston``` and significantly improve upon my original creation.

## Current Status
At the moment, I have the very basics implemented:

* Mouse left and right clicks in order to fill and mark the board's squares.
* A timer keps track of the time that's elapsed since this instance of the page has been opened.
* An ```Undo``` button that travels reverts back to the board's state before the most recent action.
    * This is cool because this is already a feature I wanted to implement in the original game that I didn't get around to adding. This is based upon the basic [tic-tac-toe React tutorial](https://reactjs.org/tutorial/tutorial.html) in which the board states are saved in a ```history``` array.

This is what it looks like in its current state:

![Basic demonstration](https://i.imgur.com/lBr3BEK.gif)

## What are you still working on?
I'm still working on a bunch of stuff. Like I said, this is still in the very early stages of development.

### The basics
These are basically all the features I managed to implement in my Rust version. At the very least, I want to implement all of this:

* Win condition.
    * Randomly generated goal states.
    * Automatic check for win whenever board state is changed.
    * Win screen with stats.
* Hint numbers.
    * Generated alongside columns and rows based on win state.
    * Automatically crossed out based on current board state.
* Improved ```Undo``` button.
    * The current ```Undo``` button has no ```hover over``` animation. It should probably have this.
* Keyboard controls.
    * Currently only mouse controls are implemented.
    * Need to implement the basic controls I had in the original Rust version:
        * ```WASD``` - Move to a different square on the board.
        * ```J``` - Fill box if clear. Clear box if not clear.
        * ```K``` - Mark box if clear. Clear box if not clear.
        * ```R``` - Restart.
        * ```U``` - Undo action.
    * Menu for editing keybindings.
* Board dimensions dropdown selection box.
* Restart button.
* Save data.

### Stretch goals
Like with my Rust implementation, I've got a bunch of features I can add if I manage to hit all my basic goals:

* Allow image files to be read in and converted into a board goal state.
* Allow the user to play the color version as well. The ruleset of this is that there's basically more colors than black and white, hint numbers indicate color, and segments of different colors don't need whitespace to separate them. There's a lot more to it than that, and it would require quite a bit of work.