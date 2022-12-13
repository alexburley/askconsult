export const seconds = (num: number) => 1000 * num;
export const minutes = (num: number) => num * seconds(60);
export const hours = (num: number) => num * seconds(60);
export const days = (num: number) => num * hours(24);
export const weeks = (num: number) => num * days(7);
export const years = (num: number) => num * weeks(52);
