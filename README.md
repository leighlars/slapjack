# Slapjack
Mod 1 Solo Final Project
### Developer
- [Leigh Larson](https://github.com/leighlars)
### Project Manager
- [Leta Keane](https://github.com/letakeane)
### Project Links
- [Repo](https://github.com/leighlars/slapjack)
- [Deployed Page](https://leighlars.github.io/slapjack/)
- [Project Spec](https://frontend.turing.io/projects/module-1/slapjack.html)

## Set-up
- Fork the repo and clone down into terminal
- Open in text editor
- Read the README
- In terminal, run command "open index.html" to interact with app.
- You can also interact with the app by opening the app via the Deployed Pages link above.

## Overview & Learning Goals
For the mod 1 solo final project, I will build an application that enables two users to use one keyboard to play the card game of Slapjack. See Gameplay section below for instructions on gameplay.

I will demonstrate my skills and understanding of semantic HTML, clean and organized CSS styles, DRY and organized JS, DOM and data model manipulation, event bubbling/delegation, and persisting data over refreshes using local storage.

My estimated schedule is as follows:
- **6/4-5/2020** Set up repo, Slack channel, DTR, project board, ReadMe. Wireframe HTML/CSS, review project rubric and spec and pseudocode basic outline of what elements are needed and what functionality to be implemented.Set up JS class files with properties and methods. Initiate crude construct of semantic HTML & organized CSS.
- **6/6/2020** Begin JS implementation.
- **6/7/2020** Continue JS.
- **6/8/2020** If there is time, add local storage functionality to project. If not, spend the time refactoring and making sure all teammates comprehend the code.
- **6/9/2020** Polishing, refactoring of code and ReadMe. Add screenshots/gifs to ReadMe and files.

## Gameplay

**Player 1’s keyboard controls**
- q to deal a card
- f to slap

**Player 2’s keyboard controls**
- p to deal a card
- j to slap

**Deck**
- 52 cards
- No wild card
- 4 suits of 13 cards (Ace=1 through King=13)

**Instructions**

- Players alternate turns playing cards face-up into the central pile (ex a player can’t deal twice in a row)
- Any player can slap at any time, with several outcomes:
- **The entire central pile is added to the player’s hand, and their hand is shuffled automatically when:**
- A Jack is slapped on top of the central pile, 
- A Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is slapped on top of central pile, 
- A Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile.
- Otherwise, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.
- **If one player loses all their cards (sudden death mode):**
- The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!). If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
- Sandwiches, doubles, and badslap conditions are no longer in effect. 
- If the player with cards slaps on a jack, or player without cards slaps on a non-jack, the player with cards wins and it's game over. 
- If the player without cards slaps on a jack, or the player with cards slaps on a non-jack, the central pile goes to the player without cards, and the game resumes as normal.

## Progression

<p align="center">Image of Desktop View </br>
  <img width="460" height="300" src="./readme-images/desktop-view.png" alt="Screenshot of Desktop View">
</p>

6/4: This was initial setup day. Set up repo, Slack channel, DTR, project board, ReadMe. Wireframe HTML/CSS, review project rubric and spec and pseudocode basic outline of what elements are needed, and what functionality to be implemented. Set up JS class files with properties and methods. Initiate crude construct of semantic HTML & organized CSS. I added the properties and most of the methods for Player and Game classes for console play with the data model. I also added localStorage functions to Player but they are not invoked. It's possible some of my data model functionality may have a bug when events occur, but I'll fix that problem after I add event functionality / listeners. 

6/5: Created functionality for the following items: key handler to handle all key controls, reset game, change header on DOM based on gameplay, slap conditions, and deal() onload listener. I modified the deck compiler method to get arrays of each type of  and deal method for each player to get equal cards on load. I modified names in HTML, CSS, and in JS files for specificity. I cleaned up HTML for screen readers. I added a CSS class to style the central pile border shadow based on the player who added the card in that turn.

6/6: I added the card images as an array to a separate data file and then connected the array throughout the JS files for card play on the DOM. I refactored many functions and addressed some bugs, but am continuing to have a an issue changing the centerPile deck to display the playedCard. I also am having a bug issue figuring out the logic of a bad slap. 

6/7: I deleted a redundant function checkEmptyHand() and added a function to display/hide the hand depending on if the hand is empty. The bugs from yesterday are still present and I aim for those to be resolved in the next day. 

6/8: Today was all about squashing bugs. The app now works in its entirety, shy of a bug that updates the header incorrectly if the losing player slaps on a non-jack. I added localStorage, and refactored lots of code, changed the hidden class in CSS to visibility for a smooth transition. I spent a great deal of time refactoring the code and making things dynamic. The slap condition functions have multiple helper functions, as does the playCard function. 

6/9: I increased the size of the font of the gameplay header text, resolved the last bug, and refactored code. Game is fully functional and localStorage is implemented.

## Gameplay Video

<p align="center">Gifs of Gameplay</p> </br>
  
![gif of general gameplay](/readme-images/gameplay.gif)
*Gif of general gameplay* 

![gif of win and autorestart](/readme-images/winautorestart.gif)
*Gif of win and autorestart* 

![gif of losing player redemption](/readme-images/lossredemption.gif)
*Gif of losing player redemption* 

## Reflection

If I were to do this project all over again, I would include a drop down section or pop-up window that listed the game conditions. I would also add more header conditions in the sudden death mode to display "sudden death" and "normal game resumes". 
