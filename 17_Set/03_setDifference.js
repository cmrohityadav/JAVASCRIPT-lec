function setDifference(setA, SetB){

    return new Set([...setA].filter(el=>!SetB.has(el)))
}