import styled from 'styled-components';

import './create-node.scss';

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
const NodeSource = styled.button``;

/** Node Source Text */
const NodeSourceText = styled.span``;

/** Node Source Icon */
const NodeSoureIcon = styled.img``;

/** Source Spacer */
const NodeSourceSpacer = styled.div``;

// _______________________________________________________

/** Create Node Window for adding a source to the scene. */
function CreateNode() {
    // TODO: Fix the scrollbars 

    return ( 
        <div className='relative top-1 z-10 w-[18rem] h-[18rem] border-transparent rounded-md bg-[#6175789E] p-2 overflow-scroll scrollbar'>
            <Heading>Scene Nodes</Heading>
            <div className='flex flex-row'></div>
        </div>
    );
}

export default CreateNode;