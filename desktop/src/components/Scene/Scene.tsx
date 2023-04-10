import CLIENT from "../../client";
import SceneFooter from "./SceneFooter";
import { useState, useEffect } from "react";

type NodeData = {
    id: string;
    name: string;
    node_type: string;
}

function Node({ ...props }: NodeData) {
    return (
        // TODO: Make it depend on node type
        <div className='w-24 h-12 p-2 bg-blue-300 rounded-md'>
            <span>{props.name}</span>
        </div>
    )
}

function SceneContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        let _args: any = ["793dff68-1185-444d-81c4-1ec934faa2c6", "Test"];

        CLIENT.query(["scenegetNodeById", _args]).then((res) => {
            setData(res);
        });
    }, [100])

    return (
        // TODO: W / H calculation
        // TODO: Center align
        <div className='w-96 h-96 border border-black rounded-lg p-2'>
            {/* @ts-ignore */}
            <Node id={data.id} name={data.name} node_type={data.node_type} />
        </div>
    );
}

/**
 * depends on other styles, cloud be in some kind of stuido Mode.
 */
function Scene() {
    return (
        <div className='w-full h-full border border-red-200'>
            <div className='p-4'>
                {/* Scene Cotainer */}
                <SceneContainer />
            </div>
            <SceneFooter />
        </div>  
    )
}

export default Scene;
