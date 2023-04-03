export const formatDate = (str: string) => {
    const date = new Date(str); 
    const event = date.toDateString();

    return event.slice(0, -4);
};
