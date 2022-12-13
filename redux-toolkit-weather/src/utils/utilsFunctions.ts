export const fahrenheitToCelciusConverter = (isCelsius:boolean, temp:number) => {
    const convertedTemp = isCelsius ? Math.round((temp - 32) * 0.5556) : temp;
    return convertedTemp;
};