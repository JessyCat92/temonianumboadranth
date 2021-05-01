import API from "./API";
import Universe from "../models/Universe";
import {getStars} from "./Stars";

export async function getUniverses(loadStars = true): Promise<Universe[]> {
    const data = await API.get("universes");

    if (loadStars) {
        for(const universe of data.data as Universe[]) {
            // get stars of universe
            universe.stars = await getStars(universe.id);
        }
    }

    return data.data;
}

export async function getUniversesSorted(): Promise<{[universeId: number]: Universe}> {
    const universes = await getUniverses(false);
    const sortedUniverses: {[universeId: number]: Universe} = {};

    for (const universe of universes) {
        sortedUniverses[universe.id] = universe;
    }

    return sortedUniverses;
}