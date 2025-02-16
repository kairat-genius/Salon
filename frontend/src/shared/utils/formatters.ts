export function formatDuration(hours: number): string {
    if (hours === 1) {
        return `${hours} час`;
    } else if (hours >= 2 && hours <= 4) {
        return `${hours} часа`;
    } else {
        return `${hours} часов`;
    }
}


export const formatExperience = (experience: number): string => {
    if (experience === 1) {
        return `${experience} год`;
    } else if (experience >= 2 && experience <= 4) {
        return `${experience} года`;
    } else {
        return `${experience} лет`;
    }
};