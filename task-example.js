
const solution = (S, K) => {
    let separator = ' ';
    let splitedString = S.split(separator);
    let count = 0;
    let arrayOfSms = [''];

    let isItLastWord = index => index === (splitedString.length - 1);
    const newSplitedArray = []
    
    splitedString.forEach((el, index) => {
        if (!isItLastWord(index))
            newSplitedArray.push(el, separator)
        else newSplitedArray.push(el);
    });

    let canWeSendEveryWord = newSplitedArray.every(el => el.length <= K);
    if (!canWeSendEveryWord) return -1;

    let i = 0;
    newSplitedArray.forEach((el) => {
        if (count + el.length <= K) {
            arrayOfSms[i] += el;
        } else {
            count = 0;
            arrayOfSms.push('');
            arrayOfSms[++i] += el;
        }
        count += el.length;
    });
    return arrayOfSms.length;
}

module.exports = solution;