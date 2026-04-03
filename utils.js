
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-EN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}