import React from 'react';
import { HideChatBtn, HideChatBtnWrapper } from './styled'

export const HideChatButton = props => {
    return (
        <HideChatBtnWrapper>
            <HideChatBtn onClick={props.toggleChat}>╳</HideChatBtn>
        </HideChatBtnWrapper>
    );
};
