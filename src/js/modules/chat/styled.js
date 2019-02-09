import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 1000px;
  margin: 50px auto;
  display: flex;
  border: 1px solid #ccc;
`;

export const ChatWraper = styled.div`
  padding: 20px;
  flex: 1;
  max-height: 800px;
  overflow-y: auto;
`;

export const ChatUser = styled.div`
    font-weight: bolder;
    color: red;
    text-align: right;
`;

export const ChatInput = styled.input`
    margin-top: 50px;
    padding: 5px 10px;
    font-size:  20px;
    width: 60%;
`;

export const MessageDate = styled.span`
    color: grey;
    padding-right: 5px;
    font-size: 12px;
`;

export const MessageAutor = styled.span`
    font-weight: bold;
    padding-right: 5px;
`;

export const UsersTitle = styled.h3`
     border-bottom: 1px;
     text-align: center;
     text-transform: uppercase;
     padding-bottom: 15px;
`;

export const ChatMeseges = styled.div`
    margin-top: 0;
    margin-bottom: 10px;
    
    &:last-child {
		margin-bottom: 0;
	}
`;

export const UssersWrapper = styled.div`
      width: 300px;
      border-left: 1px solid #ccc;
      & button {
        display: block;
        margin: 20px auto;
      }
    
`;

export const UsersLi = styled.li`
           color: ${props => props.color};
           font-weight: ${props => props.fontWeight};
           width: 120px;
           cursor: pointer;
           &::before {
                content: '';
                width: 8px;
                display: inline-block;
                height: 8px;
                position: relative;
                top: -2px;
                border-radius: 100%;
                margin-right: 9px;
                background-color: green;
           }
`;

export const UsersUl = styled.ul`
          list-style-type: none;
          margin: 0 0 20px 40px;
          padding: 0;
`;
