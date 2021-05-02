import API from "./API";
import Star from "../models/Star";
import {getUniverse, getUniversesSorted} from "./Universes";

export async function getStars(universeId : number|null = null): Promise<Star[]> {
    const data = await API.get("stars", {
        params: universeId !== null ? {universeId} : {}
    });

    if (universeId === null) {
        // to reduce API calls I load all universes and filter them based on ID
        const universes = await getUniversesSorted();

        for (const star of data.data as Star[]) {
            star.universe = universes[star.universeId];
        }
    }

    return data.data;
}

export async function deleteStar(starId: number) {
    await API.delete(`stars/${starId}`);
}

export async function createStar(name: string, color:string, universeId: number): Promise<Star> {
    // we should check if the universe has already max size reached
    const universe = await getUniverse(universeId);
    universe.stars = await getStars(universe.id);

    if (universe.maxSize > universe.stars.length) {
        const data = await API.post("stars", {
            name,
            color,
            universeId
        });
        return data.data;
    } else {
        throw new Error("Max Stars in Universe reached.")
    }
}
