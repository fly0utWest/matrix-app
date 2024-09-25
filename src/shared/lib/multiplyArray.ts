export const multiplyArray = (colorsArray: string[], multiplier: number) => {
    const multipliedArray = [];
    
    for (let i = 1; i <= multiplier; i++) {
        multipliedArray.push(...colorsArray);
    }

    return multipliedArray;
}
