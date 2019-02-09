import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const PageWrapper = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
`;

export const Header = styled.div`
    height: 80px;
    display: flex;
    background-color: green;
`;

export const Main = styled.div`
    display: flex;
    flex: 1;
    overflow: auto;
`;

export const Footer = styled.div`
    height: 100px;
    display: flex;
    background-color: blue;
`;

export const SettingBtn = styled.button`
    background: blanchedalmond url("https://img.icons8.com/ios/50/000000/settings.png") no-repeat;
    background-size: contain;
    margin-right: 5px;
    margin-top: 5px;
    margin-left: auto;
    width: 30px;
    height: 30px;
`;

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
 }
`;
