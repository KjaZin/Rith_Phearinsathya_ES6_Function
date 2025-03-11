import pnLogo from "../assets/pn-logo.png";
function Header(){
  return(
    <header id="header">
    <img src={pnLogo} alt="PN Logo" />
    <h1>Students results for PNC batch 2024</h1>
  </header>
  );
}
export default Header;