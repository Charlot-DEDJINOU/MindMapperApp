export function formatDate(dateStr) {
    const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    let date = new Date(dateStr);
    let day = daysOfWeek[date.getUTCDay()];
    let dayOfMonth = String(date.getUTCDate()).padStart(2, '0');
    let month = months[date.getUTCMonth()];
    let year = date.getUTCFullYear();
    let hours = String(date.getUTCHours()).padStart(2, '0');
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${day} ${dayOfMonth} ${month} ${year} ${hours}:${minutes}`;
}