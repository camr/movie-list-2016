// Converts the release date to a localized string.
// Assumes date format "YYYY-MM-DD" otherwise returns the original string.
export const formatReleaseDate = (dateString: string): string => {
    const dateRegex = /(\d+)-(\d+)-(\d+)/;
    try {
        const matches = dateString.match(dateRegex);
        if (!matches || matches.length < 4) {
            return dateString;
        }

        const year = parseInt(matches[1], 10);
        const month = parseInt(matches[2], 10) - 1;
        const day = parseInt(matches[3], 10);

        const d = new Date(Date.UTC(year, month, day));

        return d.toLocaleString("en-US", {
            timeZone: "UTC",
            month: "long",
            day: "2-digit",
            year: "numeric",
        });
    } catch (err) {
        return dateString;
    }
};
