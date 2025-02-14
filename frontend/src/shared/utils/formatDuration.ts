export function formatDuration(hours: number): string {
    if (hours === 1) {
        return `${hours} час`;
    } else if (hours >= 2 && hours <= 4) {
        return `${hours} часа`;
    } else {
        return `${hours} часов`;
    }
}