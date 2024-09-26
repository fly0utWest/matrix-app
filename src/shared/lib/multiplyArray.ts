export const multiplyArray = (colors: string[], pairsNeeded: number): string[] => {
  const selectedColors = colors.slice(0, pairsNeeded);
  return [...selectedColors, ...selectedColors];
};