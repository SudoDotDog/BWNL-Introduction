/**
 * @author WMXPY
 * @namespace Intro
 * @description Util
 */

export const hexToRGB = (hex: string, alpha?: number): string => {

    const parsed: string = hex.length === 7 ? hex.slice(1, 7) : hex;

    if (parsed.length !== 6) {
        return hex;
    }

    const r: number = parseInt(parsed.slice(0, 2), 16);
    const g: number = parseInt(parsed.slice(2, 4), 16);
    const b: number = parseInt(parsed.slice(4, 6), 16);

    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
        return `rgba(${r}, ${g}, ${b}, 1)`;
    }
};
