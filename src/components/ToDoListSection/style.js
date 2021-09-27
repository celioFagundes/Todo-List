import styled ,{css}from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 0;

  @media (max-width: 1024px){
    padding:15px 20px;
  }
`;

export const Categories = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:15px;
`;

export const Option = styled.button`
  height:38px;
  background:transparent;
  margin: 0 10px;
  color: hsl(228, 34%, 66%);
  font-weight:600;
  font-size:16px;
  border:0;
  border-bottom:2px solid transparent;
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
  padding:10px 15px;
  margin-right:20px;
  border-radius:5px;
  @media (max-width: 570px){
    margin-left:30px;
    margin-right:0;
    justify-content:center;
  }
  
`;

export const Label = styled.label`
  position: absolute;
  top:10px;
  left: ${props=> props.important ? '-30px': '-10px'};
  padding-right:5px;
  color : ${props=> props.important ? 'hsl(356, 69%, 56%)': '#E1EFE6'};
  opacity: ${props => props.important ? '100%' : '0%'};
  transition: 0.3s;
  cursor:pointer;

  &:hover{
    color: hsl(356, 69%, 56%);
  }
`;

export const ButtonsContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:40px;
  left:-20px;
  opacity: 0%;
  transition: 0.3s;
`;

export const  TodoContainer  = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  position:relative;
  height: 180px;
  width:200px;
  padding:10px;
  margin-right:40px;
  margin-bottom:15px;
  background-color: hsl(228, 28%, 20%);
  color: hsl(0, 0%, 100%);
  font-weight:600;
  border-radius:3px 3px 2px 2px;
  border-top:3px solid;
  cursor:pointer;

  &.health{
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
  &:hover ${ButtonsContainer}{
    left: -45px;
    opacity: 100%;
  }
  &:hover ${Label}{
    left: -30px;
    opacity: 100%;
  }  
`;

export const ImportantToggle = styled.input`
  display:none;
`;

export const EditInput = styled.textarea`
  position:absolute;
  top:5px;
  height:150px;
  width:180px;
  background-color:transparent;
  text-decoration:none;
  font-size:16px;
  color:white;
  outline:none;
  border:0;

  &.element::-webkit-scrollbar { width: 0 !important };
  &.element { overflow: -moz-scrollbars-none; };
  &.element { -ms-overflow-style: none; };
`;
export const TodoContent = styled.p`
  width:180px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  
`;
const buttons = css`
  padding:0 15px;
  background-color : transparent;
  color: hsl(0, 0%, 100%);
  border: 0;
  cursor:pointer;
  
  &:hover{
    &.confirm{
      color : #18E038
    }
    &.cancel{
      color : #EE6352
    }
    &.edit{
      color : #FFBC0A
    }
    &.delete{
      color : #D05353
    } 
  }
`
export const DeleteButton = styled.button`
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



