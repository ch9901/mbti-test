import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: "Pretendard Variable";

}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul,li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Pretendard Variable";
}
a{
  text-decoration: none;
}
html,body{
  font-size:10px
}

@media all and (max-width:1500px){
  html,body{
    font-size:9px;
  }
} 

@media all and (max-width:1200px) {
  html,
  body {
    font-size: 8px;
  }
.buttonWrap{
  flex-direction:column;
  gap:5.5rem;
}

  @media all and (max-width:970px){
    html,body{
      font-size:7px;
    }
  } 
  @media all and (max-width:850px){
    html,body{
      font-size:6px;
    }
    .iconWrap{
      gap:3rem;
    }
  } 
  @media all and (max-width:750px){
    html,body{
      font-size:6px;
    }
    .iconWrap{
      gap:2.5rem;
    }
    .startButton{
      width:50rem;
    }
  } 
  @media all and (max-width:680px){
    html,body{
      font-size:6px;
    }
    .iconWrap{
      gap:2rem;
    }
  } 
  @media all and (max-width:650px){
    html,body{
      font-size:6px;
    }
    .iconWrap{
      gap:1rem;
    }
  } 
  @media all and (max-width:570px){
    html,body{
      font-size:6px;
    }
    .iconWrap{
      gap:0rem;    
    }
    .icon{
      width:3rem;
      height:3rem;
      margin-left:-2rem;
    }
  } 
  @media all and (max-width:550px){
    html,body{
      font-size:5px;
    }
    .iconWrap{
      gap:0rem;    
    }
    .icon{
      width:3rem;
      height:3rem;
      margin-left:-2rem;
    }
  } 

`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;
  width: 100%;
  height: 100vh;
  background: #eee;
  color: #333;
  text-align: center;
  line-height: 1.6;
  font-weight: 900;
  background: linear-gradient(
    to top,
    rgba(255, 81, 0, 0.15) 31.34%,
    rgba(255, 81, 0, 0) 100%
  );
`;
export default GlobalStyles;
