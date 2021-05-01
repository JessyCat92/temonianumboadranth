import Universe from "./Universe";

export default interface Star {
    id: number;
    color: string;
    name: string;
    universeId: number;
    universe?: Universe;
}