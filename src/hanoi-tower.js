module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 2 ** disksNumber - 1; // Formula number of carry

    return {
        turns,
        seconds: turns / (turnsSpeed / 3600)
    }
};
