(this["webpackJsonprock-paper-scissors-app"]=this["webpackJsonprock-paper-scissors-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(3),o=c.n(n),a=(c(12),c(4)),i=c(5),l=c(7),h=c(6),p=c(0);var u=function(e){return Object(p.jsx)("img",{src:e.image,style:{height:200},onClick:function(){return e.onClick(e.choice)}})},d=c.p+"static/media/paper.6e9a4b2d.png",j=c.p+"static/media/rock.5feff4a6.png",C=c.p+"static/media/scissors.04c1f92c.png",b=(c(14),["rock","paper","scissors"]);function m(){var e=function(){var e=Math.random();return Math.floor(3*e)}();return b[e]}var k=function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).handleClickReset=function(){r.setState({playerScore:0,computerScore:0})},r.handleClickChoice=function(e){var t=m();if(console.log("CLICKED CHOICE",e,t),e===t)return alert("The round was a draw!");"paper"===e&&"rock"===t||"rock"===e&&"scissors"===t||"scissors"===e&&"paper"===t?(r.setState({playerScore:r.state.playerScore+1}),alert("Player won the round! :D")):(r.setState({computerScore:r.state.computerScore+1}),alert("Computer won the round! :( "))},r.state={playerScore:0,computerScore:0},r}return Object(i.a)(c,[{key:"componentDidUpdate",value:function(){5===this.state.playerScore?(alert("Player Won the Game !"),this.handleClickReset()):5===this.state.computerScore&&(alert("Computer Won the Game !"),this.handleClickReset())}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Rock Paper Scissors Game"}),Object(p.jsxs)("div",{className:"scoreboard",children:[Object(p.jsx)("h2",{children:"Scoreboard"}),Object(p.jsxs)("span",{children:["Player: ",this.state.playerScore]}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:["Computer: ",this.state.computerScore]})]}),Object(p.jsx)("div",{className:"button",children:Object(p.jsx)("button",{onClick:this.handleClickReset,children:"Reset"})}),Object(p.jsx)(u,{choice:"rock",image:j,onClick:this.handleClickChoice}),Object(p.jsx)(u,{choice:"paper",image:d,onClick:this.handleClickChoice}),Object(p.jsx)(u,{choice:"scissors",image:C,onClick:this.handleClickChoice})]})}}]),c}(r.Component),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),r(e),s(e),n(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.beb8f22d.chunk.js.map