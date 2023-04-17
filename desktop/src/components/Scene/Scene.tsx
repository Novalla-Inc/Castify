import CLIENT from '../../client';
import CreateNode from './CreateNode';
import { ChatNode, CameraNode, TextNode } from './Nodes/Nodes';
import { useEffect, useState } from 'react';
 
/** Render of the core scene, this will hold nodes that the user will add / remove from the node template data. */
function SceneRender() {
    const [nodes, setNodes]: any = useState([]);

    useEffect(() => {
        // Get data from the local file where it is saved
        // once every 5 seconds.
        setTimeout(() => {
            CLIENT.query(['sceneGetAllNodes', 'Test']).then((res: any) => {
                setNodes(res);
            });
        }, 5000);
        
        // On return print the data from the local file.
        return () => {
            console.log(nodes);
        };
     }, [nodes, 0]);

    return (
        <div className='w-[61rem] h-[30rem] flex flex-col align-middle text-left border border-green-300 p-2 rounded-md shadow-md'>
            <div className=''>
                {nodes.map((node: any) => {
                    return (
                    <div key={node.id}>
                        {node.node_type === 'CHAT' && <ChatNode name={node.name} />}
                        {node.node_type === 'TEXT' && <TextNode text={node.name} />}
                        {node.node_type === 'CAMERA' && <CameraNode name={node.name} />}
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
