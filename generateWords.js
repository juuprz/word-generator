const generateWords = (str, words) => {
    const combinations = new Set();
    const chars = str.split('');
    const counter = {};
    for (const char of chars) {
        if (counter[char]) {
            counter[char]++;
        }
        else {
            counter[char] = 1;
        }
    }
    function dfs(combo, // the combination we are building
    remaining // the remaining characters available to continue building this combo
    ) {
        const candidate = combo.join('');
        if (combinations.has(candidate)) {
            // We could have duplicate paths in our tree structure because of duplicate letters
            // Conveniently, because we save all intermediate combos into combinations when building 
            // our candidate we can identify when we have entered a branch in our tree we have 
            // already processed
            return;
        }
        combinations.add(candidate);
        for (const char of chars) {
            // ensure the characters we build our combo with align with characters currently available to us
            // this serves as the base case as well since there will be no remaining characters once they have
            // all been considered in the current combo
            if (remaining[char] > 0) {
                // push the current character into our combo
                combo.push(char);
                remaining[char]--;
                // recurse
                dfs(combo, remaining);
                // backtrack so we can try other combinations
                combo.pop();
                remaining[char]++;
            }
        }
    }
    dfs([], counter);
    const includedInWords = [];
    for (const candidate of [...combinations]) {
        if (words.includes(candidate)) {
            includedInWords.push(candidate);
        }
    }
    return includedInWords;
};
export default generateWords;
