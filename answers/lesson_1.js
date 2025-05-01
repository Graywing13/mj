/**
 * ==[ LESSON 1: CREATE DECK OF TILES ]=================================================================================
 */

const NUM_SETS = 4
const MIN_NUMBER = 1
const MAX_NUMBER = 9
const RED_FIVE_NUMBER = 5
const SUITS = ['bamboo', 'characters', 'circles']
const WINDS = ['north', 'south', 'east', 'west']
const DRAGONS = ['red', 'green', 'white']
const HONOUR_TYPE = {
    WINDS: 'winds',
    DRAGONS: 'dragons',
}

const allTiles = []

/**
 * Generate all number tiles
 */
function generateRegularTiles() {
    const redFiveIdx = 0
    for (let i = 0; i < NUM_SETS; i++) {
        generateRegularTileSet(i === redFiveIdx)
    }
}

/**
 * Generate one copy of number tiles
 * @param isRed - boolean. If true, will generate red fives in this set.
 */
function generateRegularTileSet(isRed) {
    for (let suit in SUITS) {
        for (let num = MIN_NUMBER; num <= MAX_NUMBER; num++) {
            const tile = {suit: SUITS[suit], number: num, isRedFive: isRed && num === RED_FIVE_NUMBER}
            allTiles.push(tile)
        }
    }
}

/**
 * Verification code for step 1.1
 */
generateRegularTiles()
console.log(allTiles)

function generateHonourTiles() {

    // 1. start a for loop and tile
    // 2. Decide on object and realize it's better to have a const
    // 3. make tile with properties
    // 4. push tile
    // 5. repeat for winds
    for (let dragon in DRAGONS) {
        const tile = {honourType: HONOUR_TYPE.DRAGONS, value: DRAGONS[dragon].number}
        allTiles.push(tile)
    }
}