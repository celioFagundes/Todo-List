import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: hsl(232, 19%, 15%);
    
`;
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    padding: 50px 0;
`;
export const FormBox = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    visibility:hidden;
    opacity:0;
    
    transition: all 0.3s ease-in-out;
`;
export const SelectCategory = styled.div`
  
`;
export const Option = styled.button`
    background:transparent;
    border:0;
    height:38px;
    padding:6px 0;
    margin: 0 10px;
    color:hsl(0, 0%, 100%);
    cursor:pointer;

    &.onFocus{
        border-bottom: 1px solid hsl(0, 0%, 100%);
        &.health{
            color:#2BC016;
        }
        &.home{
            color:#FDCA40;
        }
        &.work{
            color:hsl(203, 89%, 53%);
        }
    }
`;
export const TaskInput  = styled.input`
    height:25px;
    width:300px;
    background:#E9FFF9;
    font-weight:bold;
    color:#000;
    margin:0 10px;
    border-radius:5px;
    border:0 ;
    padding:0 10px;
    outline:none;

    ::placeholder{
        color: #1D3354;
        font-weight:normal;
        
    }
`;
export const Label = styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#eeee;
    height:30px;
    width:30px;
    border-radius:50%;
    transition: 0.3s ;
    cursor:pointer;

    &:hover{
        background: ${ props => props.checked ? '' : '#0FF777'};
        transform: ${props => props.checked ? '': 'scale(1.2)'}
    }
`;
export const AddCheck = styled.input`
    display:none;
    
    &:checked ~ ${FormBox}{
        opacity: 100%;
        visibility:visible;
        transform: translateY(15px);
        
    }
`;
export const Button = styled.button`
    background:transparent;
    border:0;
    margin:0px 5px;
    cursor:pointer;
    color : #fff;

    &:hover {
        color : ${props=>props.hoverColor}
    }
    
`;

