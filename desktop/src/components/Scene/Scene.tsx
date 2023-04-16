import CLIENT from '../../client';
import CreateNode from './CreateNode';
import { ChatNode, CameraNode } from './Nodes/Nodes';
import { useEffect, useState } from 'react';
 
/** Render of the core scene, this will hold nodes that the user will add / remove from the node template data. */
function SceneRender() {
    const [nodes, setNodes]: any = useState([]);

    useEffect(() => {

        // let node_data = CLIENT.query(["sceneGetAllNodes", "test"]);
        let nodes = [
            {
                id: 1,
                name: 'Chat Node',
                type: 'CHAT',
                x: 0,
                y: 0,
            },
            {
                id: 2,
                name: 'Camera Node',
                type: 'CAMERA',
                x: 0,
                y: 0,
            }
        ];


        setNodes(nodes);
     }, [0]);

    return (
        <div className='w-[61rem] h-[30rem] flex flex-col align-middle text-left border border-green-300 p-2 rounded-md shadow-md'>
            <div className=''>
                {nodes.map((node: any) => {
                    return (
                    <div key={node.id}>
                        {node.type === 'CHAT' && <ChatNode name={node.name} />}
                        {node.type === 'CAMERA' && <CameraNode name={node.name} />}
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

/** Scene Global view when it comes to the page */
function SceneView() {
    return (
        <div className='w-full h-full'>
            <CreateNode />
            <SceneRender />
        </div>
    )
}

export default SceneView;
