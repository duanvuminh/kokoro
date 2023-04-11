export function validator(str: string): boolean {
    return !/[^\u0000-\u00ff]/g.test(str);
}