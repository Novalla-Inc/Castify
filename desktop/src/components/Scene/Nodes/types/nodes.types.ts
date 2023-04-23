/** Depending on the stream location certain things will need to happen on a backend level. */
export enum StreamLocation {
    Youtube,
    Twitch,
    Facebook
};

/**
 *  Credentials required to get the live chat from various platforms:
 * 
 * Twitch: Username, Password, Channelname,
 * 
 * Facebook: Access_Token,
 * 
 * Youtube: ClientID, ApiKey
 */
type UserCredentials = {
    username: string;
    passowrd: string;
}

/** General Style Change Settings for the Chat Node. */
export type CSettings = {
    text?: string;
    font_family?: string;
    font_size?: string;
    background_color?: string;
    // background_image?: string;
    normal_chatter_color?: string;
    mod_chatter_color?: string;
    new_chatter_color?: string;
    key?: number | string;
};

/** Types for the Rendering of the Chat Node Component */
export interface CProps {
    auth_key: string;
    default_x_size: string;
    default_y_size: string;
    stream_location: StreamLocation;
    credentials?: UserCredentials;
};