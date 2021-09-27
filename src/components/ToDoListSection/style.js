import styled ,{css}from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 0;
`;


export const Categories = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:15px;
`;

export const Option = styled.button`
    background:transparent;
    border:0;
    border-bottom:2px solid transparent;
    height:38px;
    margin: 0 10px;
    color: hsl(228, 34%, 66%);
    font-weight:600;
    font-size:16px;
    cursor:pointer;

    &.onFocus{    
      color:hsl(0, 0%, 100%);
      border-color: hsl(0, 0%, 100%);      
    }
`;

export const ListSection = styled.div`
  
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-wrap:wrap;
  border-radius:5px;
  padding:10px 15px;
  margin-right:20px;
  
`;

export const Label = styled.label`
  position: relative;
  opacity: ${props => props.important ? '100%' : '0%'};
  left: ${props=> props.important ? '-40px': '-20px'};
  color : ${props=> props.important ? 'hsl(356, 69%, 56%)': '#E1EFE6'};
  transition: 0.3s;
  padding-right:5px;
  cursor:pointer;
  
  &:hover{
    color: hsl(356, 69%, 56%);
    
  }
`;

export const ButtonsBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  opacity: 0%;
  transition: 0.3s;
  left:-20px;
`;

export const  TodoBox  = styled.div`
  background-color: hsl(228, 28%, 20%);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  margin-right:40px;
  margin-bottom:15px;
  height: 180px;
  width:200px;
  padding:10px;
  border-radius:3px 3px 2px 2px;
  border-top:3px solid;
  font-weight:600;
  color: hsl(0, 0%, 100%);
  cursor:pointer;

  &.sports{
    border-color:#2BC016;
  }
  &.home{
    border-color:#FDCA40;
  }
  &.work{
    border-color:hsl(203, 89%, 53%);
  }
  &:hover{
    background-color: #333a56;
  }
  &:hover ${ButtonsBox}{
    left: -55px;
    opacity: 100%;
  }
  &:hover ${Label}{
    left: -40px;
    opacity: 100%;
  }  
`;

export const ImportantCheck = styled.input`
  display:none;
`;

export const EditInput = styled.textarea`

  position:absolute;
  top:5px;
  height:150px;
  font-size:16px;
  width:180px;
  text-decoration:none;
  background-color:transparent;
  border:0;
  color:white;
  
  outline:none;
  
  &.element::-webkit-scrollbar { width: 0 !important };
  &.element { overflow: -moz-scrollbars-none; };
  &.element { -ms-overflow-style: none; };
`;
export const TodoContent = styled.p`
  position:relative;
  left: -20px;
  word-break:break-all;
`;
const buttons = css`
  background-color : transparent;
  border: 0;
  color: hsl(0, 0%, 100%);
  padding:0 15px;

  cursor:pointer;
  &:hover{
    color : ${props=> props.hoverColor}
  }
`
export const RemoveButton = styled.button`
  ${buttons}
`;
export const ConfirmEdit = styled.button`
  ${buttons}
`;
export const CancelEdit = styled.button`
  ${buttons}
`;
export const EditButton = styled.button`
  ${buttons}
`;


export const Box = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  position:relative;
  
  
`;