export function env(key: string): string {
    const value = process.env[key];
    if (typeof value == "string") {
        return value;
    }
    throw Error(`${key} not found in environment.`);
}