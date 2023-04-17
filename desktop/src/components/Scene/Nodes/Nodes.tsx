import styled from 'styled-components';

type NodeProps = {
    name?: string;
    color?: string;
    ref?: any;
};

interface TextNodeProps extends NodeProps {
    text: string;
};

// Base Node  Template
const Node = styled.div`
    width: 10rem;
    height: 10rem;
    padding: .25rem;
    background-color: white;
    color: white;
    border: 1px solid white;
    border-radius: .25rem; 
`;

const NodeTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
`;

const NodeBody = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: black;
`;

/// -------------- Templates for rendering the nodes -----------------

const ChatNodeTemplate = styled(Node)<{ color: string }>`
    background-color: blue;
    color: ${props => props.color || 'black'}
`;

const CameraNodeTemplate = styled(Node)<{ color: string }>`
    background-color: red;
    color: ${props => props.color || 'black'}
`;

const TextNodeTemplate = styled(Node)<{ color: string }>`
    background-color: red;
    color: ${props => props.color || 'black'}
`;

////  ---------------------------------------------------------------

/** Camera Node for the scene Render */
function CameraNode ({ ...props }: NodeProps) {
    return (
        <CameraNodeTemplate color={''} ref={props.ref}>
            <NodeTitle>{props.name}</NodeTitle>
            <NodeBody>Chat Node</NodeBody>
        </CameraNodeTemplate>
    )
} 

/** Text Node Takes in some text and renders it on the screen. */
function TextNode ({ ...props }: TextNodeProps) {
    return (
        <TextNodeTemplate color={''} ref={props.ref}>
            <NodeBody>{props.text}</NodeBody>
        </TextNodeTemplate>
    )
} 

/** Chat Node for the scene Render  */
function ChatNode ({ ...props }: NodeProps) {
    return (
        <ChatNodeTemplate color={''} ref={props.ref}>
            <NodeTitle>{props.name}</NodeTitle>
            <NodeBody>Chat Node</NodeBody>
        </ChatNodeTemplate>
    )
}

export { ChatNode, CameraNode, TextNode };