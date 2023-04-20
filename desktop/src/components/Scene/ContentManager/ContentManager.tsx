import { useEffect, useRef, useState } from "react";
import CLIENT from "../../../client";
import CreateNode from "../Nodes/CreateNode";
import { getItem } from "../../../ts/storage";

type CManagerProps = {
    projectName?: string;
    nodeData?: any;
};

/** The name of a node is globally editable inside the this node render
 *  All you need to is click the name and you start to edit it.
 */
function NodeName({ name }: { name: string }) {
    const [click, setClick] = useState(false);
    const [returnName, setReturnName] = useState('');

    const inputRef: any = useRef(null);

    // TODO: Make sure the save file gets changed on edit of the node name.
    // TODO: Focus input when it opens.

    const handleSave = () => {
        alert(`Are you sure about the name: ${returnName}`);

        // Change the data after the user presses confirm
        setTimeout(() => {
            let req_data = {
                project_name: "Test",
                node_id: "6b21537e-b39d-483d-8f73-62320a2ea74e",
                new_node_name: `${returnName}`
            };
    
            CLIENT.mutation(["sceneUpdateNode", [req_data.project_name, req_data.node_id, req_data.new_node_name]]).then((res) => {
                console.log(res);
            });
        }, 2000);
    }

    const handleOpenClick = ( ) => {
        setClick(true);

        inputRef.current.focus();        
    }

    return ( 
        <div>
           {click ? 
                ( 
                <div className='flex p-0.5'>
                    <input 
                        type='text' 
                        value={returnName}  
                        onChange={(e: any) => setReturnName(e.target.value)} 
                        className='p-1 border border-transparent bg-transparent rounded-md active:border-none' 
                        placeholder={name}
                        ref={inputRef}
                    />
                    <div className='p-1' />
                    <button className='w-12 bg-stone-200 border rounded-md' onClick={() => { setClick(false); handleSave();}}>test</button>
                </div> 
                )
                : (
                    <div className='p-1'>
                        <span 
                            className='p-2 text-2xl hover:cursor-pointer hover:text-green-600 hover:underline' 
                            onClick={handleOpenClick}
                        >
                                {returnName != '' ? returnName : name} 
                        </span> 
                    </div> 
                )  
            }
        </div>
        
    );
}

/** Default template size for the content drawer items. */
function NodeContainer({ children, key }: { children: React.ReactNode, key: any }) {
    return <div key={key} className='h-10 p-0 w-full bg-stone-300 border border-stone-300 rounded-md shadow-md'>{children}</div>;
}

/** Space between the nodes in the Manager. */
function NodeSpacer() {
    return <div className='p-0.5'></div>
}

/** Tooltip Component for hovering over-things */
function Tooltip({ text }: { text: string }) {
    return (
        <div>{text}</div>
    )
}

/** Allows the user to manage the cotent of a given scene. */
function ContentManager({ ...props }: CManagerProps) {
    const [nodes, setNodes] = useState([]);
    const [open, setOpen] = useState(true);

    // TODO: Store all nodes globally in local storage, then just get them
    // get all of the nodes.
    useEffect(() => {
        setTimeout(() => {  
            let data = JSON.parse(getItem("Nodes")!);
            setNodes(data); 
        }, 8000);
        
        return () => {
            console.log(nodes);
        }
    }, [nodes, 0]);

    return (
        <div className='fixed bottom-[1rem] left-[11rem] border border-white rounded-md p-2 shadow-md w-[61rem] h-[22rem]'>
            <div className='flex flex-row'>
                <div className='bg-green-200 w-[32%] h-[21rem] border rounded-md shadow-md p-2'>
                    <div className='flex flex-row'>
                        <span className='text-2xl'>Sources</span>
                        <NodeSpacer />
                        <button 
                            className='w-4 h-4 bg-red-200 p-4 border-transparent rounded-full hover:bg-red-100 active:bg-green-100'
                            onClick={() => setOpen(!open)}>
                        </button>
                    </div>
                    {open == false ? 
                    (
                        <div>
                            {nodes.map((item: any) => {
                                return (
                                    <div className='overflow-scroll'>
                                        <NodeContainer key={item.id}>
                                            <NodeName name={item.name} />
                                        </NodeContainer>
                                        <NodeSpacer />
                                    </div>
                                )
                            })}
                        </div>
                    ) : 
                    (
                        <CreateNode />
                    )}
                    
                </div>
                <div className='p-1' />
                <div className='bg-green-200 w-[33%] h-[21rem] border rounded-md shadow-md p-2'>
                    <span className='text-1xl'>Chat</span>
                    {/* TODO: Render Chat here!!! */}
                </div>
                <div className='p-1' />
                <div className='bg-green-200 w-[33%] h-[21rem] border rounded-md shadow-md p-2'>
                    <span className='text-2xl'>Audio</span>
                    {/* Figure out the audio component */}
                </div>
            </div>
        </div>
    )
}

export default ContentManager;