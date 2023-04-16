// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "getConfigData", input: string[], result: string } | 
        { key: "getContentDrawerData", input: string, result: any } | 
        { key: "getStreamKey", input: never, result: string } | 
        { key: "sceneGetAllNodes", input: string, result: any } | 
        { key: "sceneversion", input: never, result: string } | 
        { key: "version", input: never, result: string },
    mutations: 
        { key: "createProject", input: string[], result: null } | 
        { key: "saveData", input: string[], result: null } | 
        { key: "sceneCreateNode", input: string[], result: any },
    subscriptions: never
};
