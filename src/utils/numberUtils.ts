export const numberWithCommas = ((x: any) => {
    const xx= parseFloat(x).toFixed(3);
    return xx.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
