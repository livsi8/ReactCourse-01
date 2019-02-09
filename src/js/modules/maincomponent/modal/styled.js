import styled from "styled-components";

export const CloseModalButton = styled.button`
        font-weight: bold;
        height: 30px;
        color: darkslateblue;
`;

export const DeleteUser = styled.button`
        font-weight: bold;
        height: 30px;
        color: darkslateblue;
`;

export const DeleteAllBtn = styled.button`
        font-weight: bold;
        height: 30px;
        color: darkslateblue;
`;

export const EditUser = styled.button`
        font-weight: bold;
        height: 30px;
        color: darkslateblue;
`;

export const UsersLi = styled.li`
           color: ${props => props.color};
           font-weight: ${props => props.fontWeight};
           //width: 120px;
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
