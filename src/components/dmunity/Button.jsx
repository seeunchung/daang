import styled, { css } from "styled-components";


function Button(props) {
  return <StyledButton
    padding={props.padding}
    width={props.width}
    height={props.height}
    background={props.background}
    margin={props.margin}
    marginTop={props.marginTop}
    marginLeft={props.marginLeft}
    marginRight={props.marginRight}
    marginBottom={props.marginBottom}
    textSize={props.textSize}
    textColor={props.textColor}
    fontWeight={props.fontWeight}
    border={props.border}
    radius={props.radius}

  >{props.title}</StyledButton>
}

const StyledButton = styled.button`
padding: ${props => props.padding};
width: ${props => props.width};
height: ${props => props.height};
background : ${props => props.background};
margin : ${props => props.margin};
margin-top : ${props => props.marginTop};
margin-left : ${props => props.marginLeft};
margin-right : ${props => props.marginRight};
margin-bottom : ${props => props.marginBottom};
font-size: ${props => props.textSize};
color : ${props => props.textColor};
font-weight: ${props => props.fontWeight};
border: ${props => props.border};
border-radius: ${props => props.radius};

cursor: pointer;
font-family: "Noto Sans KR", sans-serif;
align-items: center;


`;


export default Button;