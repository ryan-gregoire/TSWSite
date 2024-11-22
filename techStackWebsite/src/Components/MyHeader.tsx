import styled from "styled-components";

export default function MyHeader() {
  const name = "Ryan";

  const Header = styled.header`
    padding: 28px;
    display: flex;
    justify-content: space-between;
  `;

  const DivDiv = styled.div`
    border-radius: 50%;
    height: 60px;

    width: 60px;
    background: #202020;
    position: relative;
    left: -75px;
    top: 50px;
    border: 3px solid #375fff;
    margin: 0.1rem;
  `;

  const Circle = styled.div`
    height: 290px;
    width: 290px;
    border-radius: 20px;
    background: #375fff;
    // border-radius: 50%;
  `;

  const FooterText = styled.div`
    // position relative;
    margin-top: 90vh;
    // top: 900vh;
    width: 500px;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 auto;
    // background: #fff;
    padding: 20px 30px;

    text-align: center;
  `;

  const FooterParagrah = styled.p`
    position: relative;
    top: 900px;
    max-width: 900px;
  `;

  const HeaderLink = styled.a`
    font-weight: 700;
    font-family: Segoe UI;
    color: #375fff;
    text-decoration: none;
    font-size: 18px;
  `;

  const HeaderLinkUndecore = styled.a`
    font-weight: 700;
    text-decoration: none;
    font-family: Segoe UI;
    color: #375fff;
    border-bottom: 2px solid #375fff;
    font-size: 18px;
    padding: 20px;
    margin: 5px;
  `;

  const HeaderLinkTwo = styled.a`
    font-weight: 400;
    font-family: Segoe UI;

    text-decoration: none;
    font-size: 18px;
    color: #ccc;
  `;

  const Footer = styled.footer`
    padding: 8px;
    background: #375fff;
    margin-top: 200vh;
    text-align: center;
    font-family: sans-serif;
  `;

  const FooterLink = styled.p`
    // font-size: 10px;
    color: #202020;
    font-size: 17px;
    padding: 14px;
    // margin-top: 18px;
    text-transform: uppercase;
  `;

  const Stack = styled.p`
    color: #202020;
    font-size: 17px;
    padding: 14px;

    margin-top: 28px;
    text-transform: uppercase;
    // display: inline;
    padding: 30px;
    border-bottom: 3px solid #fff;
    width: 370px;
    margin: 30px auto;
    position: relative;
    top: 90px;
  `;

  return (
    <div>
      <Header>
        <div>
          <HeaderLink href="">TSW</HeaderLink>
        </div>

        <nav>
          <ul>
            <li>
              <HeaderLinkUndecore href="">Home</HeaderLinkUndecore>
              <HeaderLinkTwo href="">About</HeaderLinkTwo>
              <HeaderLinkTwo href="">Pages</HeaderLinkTwo>
              <HeaderLinkTwo href="">Contact</HeaderLinkTwo>
            </li>
          </ul>
        </nav>
      </Header>

      <main>
        <h2>
          <DivDiv id="a"></DivDiv>| <span>TECH</span> Stack Web |{" "}
          <span id="1">By</span> TSW
          <hr />
        </h2>

        <div id="app">
          <Circle id="circle"></Circle>
          <Circle id="circle"></Circle>

          <Circle id="circle"></Circle>
        </div>

        <div>
          <FooterText style={{ textAlign: "center" }}>
            <FooterParagrah>
              I am {name} And I am a Programmer with 4 Years Of Experience in
              Web Dev Technologies Such As
              <div className="stack">
                <Stack>| 1: REACT |</Stack>
                <Stack>| 2: TSX |</Stack>
                <Stack>| 3: MongoDB |</Stack>
              </div>
            </FooterParagrah>
          </FooterText>
        </div>

        <Footer>
          <FooterLink>&copy; 2024 TechStackWeb</FooterLink>
        </Footer>
      </main>
    </div>
  );
}
