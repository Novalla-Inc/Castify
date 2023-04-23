import { useEffect } from 'react';
import type { CProps, CSettings } from "./types/nodes.types";

/**
 *  The way the specific Chat message is rendered
 * 
 * TODO: MODERATOR, STREAMER, NORMAL CHATTER different colors.
 */
const Chat =  (props: CSettings) => {
    return (
        <span
            key={props.key}
            style={{
                'fontFamily': `${props.font_family}` || 'Roboto',
                'fontSize': `${props.font_size}` || '1rem',
            }}
            className={`bg-[${props.normal_chatter_color} || #8bb09566]`}
        >
            {props.text}
        </span>
    )
}

/** Chat Node Rendered for any view of the current live chat. */
function ChatNode ({ ...props }: CProps) {
    // TODO: Get messages from the users live stream of choice chat.
    useEffect(() => {

    }, []);

    const messages = 5;

    return (
        <div 
            className={`w-[${props.default_x_size} || 22rem] h-[${props.default_y_size} || 12rem] overflow-scroll`}
            style={{
                'maxHeight': '30rem',
                'minHeight': '12rem',
                'maxWidth': '22rem',
                'minWidth': '20rem',
            }}
        >
            {/* TODO: Remove this... */}
            {Array.from(Array(messages).keys()).map((_, i) => (
                <Chat
                    key={i}
                    text='Hello World'
                />
            ))}
        </div>
    )
}

export default ChatNode;
