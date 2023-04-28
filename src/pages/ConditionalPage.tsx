import styled from "@emotion/styled"

function LoggedComponent(){
    return <StyledSpan>Logged</StyledSpan>
}

function LoginComponent(){
    return <StyledSpan>Login</StyledSpan>
}

type Loggged={
    isLogged:boolean
}
export default function ConditionalPage(props:Loggged){
    return (
        <div>
            {props.isLogged?<LoggedComponent/>:<LoginComponent/>}
            <br/>
            {/* when else is not needed, use the code below */}            
            {props.isLogged && <LoggedComponent/>}
        </div>
    )
}

//another way of rendering depending on the condition.
export function ConditionalPage2(props:Loggged){
    if(props.isLogged)return <LoggedComponent/> 
    else return <LoginComponent/>    
}

const StyledSpan=styled.span`
    font-size: 26px;
    color: blue;
`

