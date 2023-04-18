import { useEffect, useRef, useState } from "react";
import CLIENT from "../../../client";

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

/** Allows the user to manage the cotent of a given scene. */
function ContentManager({ ...props }: CManagerProps) {
    const [nodes, setNodes] = useState([]);

    // TODO: Store all nodes globally in local storage, then just get them
    // get all of the nodes.
    useEffect(() => {
        setTimeout(() => {  
            CLIENT.query(["sceneGetAllNodes", props.projectName!]).then((res) => {
                setNodes(res);
            });
        }, 8000);
        
        return () => {
            console.log(nodes);
        }
    }, [nodes, 0]);

    return (
        <div className='fixed bottom-[1rem] left-[11rem] border border-white rounded-md p-2 shadow-md w-[61rem] h-[22rem]'>
            <div className='flex flex-row'>
                <div className='bg-green-200 w-[32%] h-[21rem] border rounded-md shadow-md p-2'>
                    <span className='text-2xl'>Content</span>
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