import React from 'react';
import {getStars} from "./Stars";
import {mocked} from "ts-jest/utils";
import Star from "../models/Star";
import Universe from "../models/Universe";
import API from "./API";

jest.mock('./API');

const starsTestData = [
    {
        id: 1,
        color: "RED",
        name: "TestStar1",
        universeId: 1
    },
    {
        id: 2,
        color: "YELLOW",
        name: "TestStar2",
        universeId: 2
    },
];

const universeTestData = [
    {
        id: 1,
        maxSize: 3,
        name: "TestUniverse1"
    },
    {
        id: 2,
        maxSize: 3,
        name: "TestUniverse2"
    }
];

const mockedAxios = mocked(API, true);

describe("services/stars", () => {
    beforeEach(() => {
        mockedAxios.get.mockImplementation((path, config): any => {
            if (path === "stars") {
                if (config?.params.universeId) {
                    return {data: [starsTestData[1]] as Star[]};
                } else {
                    return {data: starsTestData as Star[]};
                }
            }
            if (path === "universes") {
                return {data: universeTestData as Universe[]};
            }
        });
    });

    it("get all stars", async () => {
        const stars = await getStars();

        expect(stars).toMatchObject( [
                {
                    id: 1,
                    color: 'RED',
                    name: 'TestStar1',
                    universeId: 1,
                    universe: { id: 1, maxSize: 3, name: 'TestUniverse1' }
                },
                {
                    id: 2,
                    color: 'YELLOW',
                    name: 'TestStar2',
                    universeId: 2,
                    universe: { id: 2, maxSize: 3, name: 'TestUniverse2' }
                }
            ]
        );
    });

    it("get stars from second universe only", async () => {
        const stars = await getStars(2);

        expect(stars).toMatchObject( [
                {
                    id: 2,
                    color: 'YELLOW',
                    name: 'TestStar2',
                    universeId: 2
                }
            ]
        );
    });
});




