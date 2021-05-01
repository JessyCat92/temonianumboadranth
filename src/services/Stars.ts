import API from "./API";
import Star from "../models/Star";
import {getUniversesSorted} from "./Universes";

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