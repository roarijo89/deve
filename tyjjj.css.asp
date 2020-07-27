html, body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
}
h1 {
    display: inline-block;
}
.githubLink {
    display: inline-block;
    padding: 6px 15px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid #bbb;
    margin-right: 10px;
    background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);
}
.githubLink:hover {
    border: 1px solid #999;
    background-image:  linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);
}
h1, .githubLink {
    vertical-align: middle;
}
.linkBack {
    margin: 1em 0;
}
#pageContainer {
    margin: 0 auto;
    padding: 10px;
    padding-top: 0;
    max-width: 1050px;
}
#mainContainer {
    padding: 0 25px 25px 25px;
    border: solid #CCC 1px;
}
#sectionTop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
#projDescription {
    max-width: 700px;
}
.steps {
    color: green;
}
#passMismatch {
    display: none;
    color: red;
}
.demoButton {
  display: inline-block;
  font: bold 20px Arial;
  text-decoration: none;
  background-color: #EEEEEE;
  color: #333333;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #CCCCCC;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #CCCCCC;
}
#doneProtecting {
    display: none;
    color: blue;
    font-weight: bold;
}
#disclaimer {
    color: gray;
    font-size: 0.75em;
    margin-top: 30px;
}
.githubLogo {
    position: relative;
    height: 25px;
    vertical-align: middle;
}
.githubLogo:hover {
    opacity: 1;
}
.suggested {
    max-width: 260px;
}
@media (min-width: 700px) {
    #pageContainer {
        padding: 50px;
        padding-top: 0;
    }
}