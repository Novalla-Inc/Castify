import { useEffect, useState } from "react";
import styled from "styled-components";

const CreateNodeHeading = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    color: #4E5559;
`;

const CreateNodeSubheading = styled.span`
    font-size: .8rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: #546965;
`;

const Spacer = styled.div`
    padding: 1rem;
`;

const CoreTemplate = styled.button`
    width: auto;
    height: auto;
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #e0e0e0;
    }
`;

function CreateNode () {
    const [active, setActive] = useState(false);

    // TODO: move this to a universal hook so that it can be used in other components.
    useEffect(() => {
		const getKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setActive(false);
			} else if (e.key === 'Control') {
				setActive(true);
			}
		};

		// add the event listeners
		window.addEventListener('keydown', getKeyDown);

		return () => {
			// remove the event listeners
			window.removeEventListener('keydown', getKeyDown);
		};
	}, [10000]);
    
    return (
        <div>
            {active && (
                <div className="w-[30rem] h-[22rem] flex flex-col bg-[#97B6A3BD] p-2 border-[#97B6A3BD] rounded-md shadow-md absolute">
                    <CreateNodeHeading>Create Node</CreateNodeHeading>
                    <CreateNodeSubheading>pick a template source and change the setting to your needs.</CreateNodeSubheading>
                    <div className='p-2' />
                    <div className='flex flex-row w-auto h-auto'>
                        <CoreTemplate>Chat Node</CoreTemplate>
                        <Spacer />
                        <CoreTemplate>Camera Node</CoreTemplate>
                        <Spacer />
                        <CoreTemplate>Text Node</CoreTemplate>
                    </div>
                </div>
            )}
        </div>
    );
}


export default CreateNode;