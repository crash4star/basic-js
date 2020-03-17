const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string' || hasLetters(sampleActivity) || invalidRange(sampleActivity)) {
        return false;
    }

    const actualActivity = parseFloat(sampleActivity);
    const age = Math.log(MODERN_ACTIVITY / actualActivity) / k;

    return Math.ceil(age);
};

function hasLetters(str) {
    return /[A-Za-z]/.test(str)
}

function invalidRange(activity) {
    const float = parseFloat(activity);

    return float <= 0 || float >= MODERN_ACTIVITY;
}
