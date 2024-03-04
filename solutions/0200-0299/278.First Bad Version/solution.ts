/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

type IsBadVersion = (version: number) => boolean;

const solutionTS = (isBadVersion: IsBadVersion) => {
    return (n: number): number => {
        let min: number | null = null;
        let start: number = 1;
        let end: number = n;

        while (start <= end) {
            const mid: number = Math.floor((start + end) / 2);

            if (isBadVersion(mid)) {
                min = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return min as number;
    };
};