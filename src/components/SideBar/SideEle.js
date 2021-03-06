import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from'react-icons/fa'

export const SideBarContainer=styled.aside`
position:fixed;
z-index:999;
width: 100%;
height:100%;
background:black;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? '100%' : '0')}; 
 top: ${({isOpen})=>(isOpen?  '0' : '-100%')};


`;

export const SideBarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align:center;

@media screen and (max-width:968px)
{

}

`;
export const CloseIcon=styled(FaTimes)`
color:white;
`;

export const Icon=styled.div`
position: absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SideBarWrapper=styled.div`
color:white;
`;

export const SideBarLink=styled(LinkS)
`
display:flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition:  0.2s ease-in-out;
color:white;
cursor:pointer;

&:hover{
    color:#01bf71;
;
    transition:0.2s ease-in-ease-out;
}
`;


export const SideBtn=styled.div`
display: flex;
justify-content: center;
`;



export const SideBarRoute=styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding:  16px 64px;
color:#010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: 0.2s all ease-in-out ;
    background:white ;
    color:#010606;
}
`;