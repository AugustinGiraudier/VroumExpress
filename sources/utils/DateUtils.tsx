
export const getDay = (date : string = "") => {
    let dd = date === "" ? new Date() :  new Date(date);
    dd.setHours(0,0,0,0);
    return dd;
}