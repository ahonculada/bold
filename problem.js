const Problems = require('./problems.json');

// min included, max excluded
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndProblem() {
    const base_dir = 'https://leetcode.com/problems/';
    while (true) {
        let rnd_num = getRndInteger(1, 2397);
        ending = Problems['stat_status_pairs'][rnd_num]
        if (ending === undefined) {
            continue
        }
        return base_dir + Problems['stat_status_pairs'][rnd_num]['stat']['question__title_slug'];
    }
}

module.exports = { getRndProblem };
