import CLIENT from '../../client';
import { getItem } from '../../ts/storage';
import Hover from '../General/Hover';
import { ChatNode, CameraNode, TextNode } from './Nodes/NodeTemplates';
import { useEffect, useState } from 'react';
 
/** Render of the core scene, this will hold nodes that the user will add / remove from the node template data. */
function SceneRender() {
    const [nodes, setNodes]: any = useState([]);
    const [items, setItems] = useState(0); // Current max with the size is 10.

    useEffect(() => {
        // Get data from the local file where it is saved
        // once every 5 seconds.
        setTimeout(() => {
            let data = JSON.parse(getItem("Nodes")!);   
            setNodes(data);
        }, 5000);
        
        // On return print the data from the local file.
        return () => {
            console.log(nodes);
        };
     }, [nodes, 0]);    
    
     const onDragStart = (e: any) => {};

     const onDrag = (e: any) => {   };

     const onDragEnd = (e: any) => {};

    return (
        <div 
            className='w-[61rem] h-[30rem] flex flex-col align-middle text-left border border-green-300 p-2 rounded-md shadow-md'
            onDrag={onDrag}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            draggable
        >
            <div className='grid grid-flow-col grid-cols-4 grid-rows-2 gap-20 max-w-[58rem] max-h-[28rem]'>
                {nodes.map((node: any) => {
                    return (
                        <div key={node.id} className='z-10'>
                            {/* TODO: Check for max number of items in a snene. */}
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
            <Hover text='This is the scene, you can add nodes to it.'>
                <SceneRender />
            </Hover>
        </div>
    )
}

export default SceneView;
