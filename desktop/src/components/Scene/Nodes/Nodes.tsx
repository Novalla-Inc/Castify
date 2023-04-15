import styled from 'styled-components';

const Node = styled.div`
    width: 10rem;
    height: 10rem;
    background-color: white;
    color: white;
    border: 1px solid white;
    border-radius: .25rem; 
`;

const ChatNode = styled(Node)<{ name: string }>`
    background-color: blue;
    color: ${props => props.name || 'black'}
`;

const CameraNode = styled(Node)<{ name: string }>`
    background-color: red;
    color: ${props => props.name || 'black'}
`;

export { ChatNode, CameraNode };