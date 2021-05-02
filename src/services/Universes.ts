import API from "./API";
import Universe from "../models/Universe";
import {getStars} from "./Stars";

export async function getUniverses(loadStars = true): Promise<Universe[]> {
    const data = await API.get("universes");

    if (loadStars) {
        for(const universe of data.data as Universe[]) {
            // get stars of universe
            universe.stars = (await getStars(universe.id)).data;
        }
    }

    return data.data;
}

export async function getUniverse(id: number): Promise<Universe> {
    const data = await API.get("universes", {
        params: {
            id
        }
    });

    return data.data[0] as Universe;
}

export async function getUniversesSorted(): Promise<{[universeId: number]: Universe}> {
    const universes = await getUniverses(false);
    const sortedUniverses: {[universeId: number]: Universe} = {};

    for (const universe of universes) {
        sortedUniverses[universe.id] = universe;
    }

    return sortedUniverses;
}

export async function createUniverse(name: string, maxSize: number) {
    const data = await API.post("universes", {
        name,
        maxSize
    });
    return data.data;
}