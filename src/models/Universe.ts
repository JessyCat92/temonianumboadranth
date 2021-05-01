import Star from "./Star";

export default interface Universe {
    id: number;
    maxSize: number;
    stars?: Star[];
    name: string;
}