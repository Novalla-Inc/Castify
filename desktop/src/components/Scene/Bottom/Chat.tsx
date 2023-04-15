import { useState } from 'react';
import styled from 'styled-components';

import '../scene.scss';

enum Role {
	ADMIN,
	MOD,
	USER,
}

type ChatProps = {
	username?: String;
	role?: Role;
};

const Username = styled.div`
	color: ${(props) => props.color || 'white'};
`;

function Chat({ ...props }: ChatProps) {
	const [scroll, setScroll] = useState(false);

	return (
		<div
			className="w-full h-full overflow-y-scroll"
			onScroll={() => {
				setScroll(true);
			}}
		>
			{/* 
                Overflow scroll animation, fade out.
                Usernames may have a different color. 
            */}
			<Username color="red">{props.username || 'testusername'}</Username>
		</div>
	);
}

export default Chat;
