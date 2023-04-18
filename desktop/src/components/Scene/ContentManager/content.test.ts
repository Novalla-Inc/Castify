import { test, expect } from "vitest";
import CLIENT from "../../../client";


test('make sure node data is returning correctly', () => {
    let data: any = [];
    
    CLIENT.query(['sceneGetAllNodes', 'Test']).then((res) => {
        data = res;
    });

    expect(data.length() > 1);
});