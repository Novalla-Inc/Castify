import styled from 'styled-components';

import './create-node.scss';
import CLIENT from '../../../client';
import { addItem } from '../../../ts/storage';

/** Use for Overall Categories */
const Heading = styled.span`
    font-size: 1.5rem;
    font-style: bold;
    font-family: 'Roboto', sans-serif;
`;

/** Use for Node Catagories. */
const Subheading = styled.span`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
`;

// ________________ Node Source __________________________

/** Node Source Default Container for each of the nodes */
const NodeSource = styled.button`
    width: auto;
    height: 4rem;
    border: 1px solid black;
    border-radius: .25rem;
    padding: .25rem;
`;

/** Node Source Text */
const NodeSourceText = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
`;

/** Node Source Icon */
const NodeSoureIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;

/** Source Spacer */
const NodeSourceSpacer = styled.div`
    padding: .25rem;
`;

// _______________________________________________________

/** Create Node Window for adding a source to the scene. */
function CreateNode() {
    // TODO: Fix the scrollbars 

    const createNode = (nodeName: string) => {
        CLIENT.mutation(['sceneCreateNode', ['Test', nodeName]]).then((res) => {
            addItem("Nodes", res);
        });

        console.log(getItem("Nodes"));
    };

    return ( 
        <div className='relative top-1 z-10 w-[18rem] h-[18rem] border-transparent rounded-md bg-[#6175789E] p-2 overflow-y-scroll scrollbar'>
            <Heading>Scene Nodes</Heading>
            <div className='flex flex-row'>
                {/* TODO: Create Nodes */}
                <NodeSource className='active:bg-green-300 active:text-white' onClick={() => createNode("Chat Node")}>
                    <NodeSourceText>
                        Chat Node
                    </NodeSourceText>
                </NodeSource>
                <NodeSourceSpacer />
                <NodeSource className='active:bg-green-300 active:text-white'>
                    <NodeSourceText>
                        Camera Node
                    </NodeSourceText>
                </NodeSource>
                <NodeSourceSpacer />
                <NodeSource className='active:bg-green-300 active:text-white'>
                    <NodeSourceText>
                        Text Node
                    </NodeSourceText>    
                </NodeSource>
            </div>
        </div>
    );
}

export default CreateNode;

function getItem(arg0: string): any {
    throw new Error('Function not implemented.');
}
