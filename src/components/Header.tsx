import styled from 'styled-components'

const HeaderContainer = styled.div`
        width: auto;
        background-color: rgba(0, 0, 0, 0.20);
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-items: center;
        justify-content: space-between;
        padding: 3px;
    `
const LogoContainer = styled.div`
    padding: 2px;
`
const Logo = styled.h2`
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
`
const HomeContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    margin-right: 3px;
`
const BoardsContainer = styled.div`
    width: 100px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    margin: auto;
`
const Section1 = styled.div`
    display: flexbox;
    align-items: center;
`
const Section3 = styled.div`
    display: flexbox;
    align-items: center;
`

export default function Header() {
    return(
        <HeaderContainer>
            <Section1>
                <HomeContainer/>
                <BoardsContainer/>
            </Section1>
            <LogoContainer>
                <Logo>Trellone</Logo>
            </LogoContainer>
            <Section3>
                <HomeContainer/>
                <HomeContainer/>
                <HomeContainer/>
            </Section3>
        </HeaderContainer>
    )
}