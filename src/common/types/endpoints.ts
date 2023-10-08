export interface Endpoints {
    [key: string]: {
        url: string | ((query: string) => string);
        method: string;
    };
}