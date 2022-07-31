const getMeRandomElements = (sourceArray, neededElements) => {
    const result = { trueArray: [], falseArray: [], trueIndexes: [] };
    for (let i = 0; i < neededElements; i++) {
        let index = Math.floor(Math.random() * sourceArray.length);
        result.trueIndexes.push(index);
        result.trueArray.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    result.falseArray = [...sourceArray];
    return result;
}

module.exports = { getMeRandomElements };