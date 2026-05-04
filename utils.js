
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-EN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}

export const getLast6Months = () => {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const label = date.toLocaleString('default', { month: 'short' });
        const key = `${date.getFullYear()}-${date.getMonth()}`;

        months.push({ label, key });
    }

    return months;
};