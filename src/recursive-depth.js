module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        let depths = [];

        for (let el of arr) {
            if (!Array.isArray(el)) {
                continue;
            }

            depths.push(this.calculateDepth(el, depth + 1));
        }

        return Math.max(depth, ...depths);
    }
};
