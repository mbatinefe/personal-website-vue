import{_ as g,o as n,c as o,a as e,F as m,r as d,w as u,f as h,t as r,p as k,e as b}from"./index-SznL9neQ.js";import"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.1.392/+esm";const f={name:"ProjectsView",data(){return{projects:[{id:1,title:"Full Stack Event Management",description:"Event and volunteer management system website designed to improve efficiency and user engagement.",skills:["HTML","JavaScript","CSS","Vue.js","Express.js","MongoDB","RESTful API Development","Database Integration","Authentication Mechanisms","Project Management","Single Page Applications (SPAs)","Software Development Lifecycle"],image:"./project-DALL-E/DALL-E-FullStackEvent.webp",link:"https://github.com/mbatinefe/event-management-full-stack"},{id:2,title:"Multiplayer Painting Game",description:"Interactive game allowing multiple players to draw on a shared canvas in real-time.",skills:["Java","Socket Programming","Client-Server Architecture","GUI Development","Event Handling","Concurrency in Java","Network Communication","Debugging Java Applications"],image:"./project-DALL-E/DALL-E-MultPaintingGame.webp",link:"https://github.com/mbatinefe/painting-game-with-server"},{id:3,title:"Mini Neural Network",description:"Demonstration of neural network concepts through a simple classification task.",skills:["Python","Neural Network Implementation","PyTorch","Data Handling with Numpy","Machine Learning Fundamentals","Deep Learning"],image:"./project-DALL-E/DALL-E-MiniNeuralNetwork.webp",link:"https://github.com/mbatinefe/neural-networks-mini"},{id:4,title:"Istanbul Traffic-Fuel Analysis",description:"Analysis of traffic patterns and fuel usage to optimize transportation and reduce costs.",skills:["Python","Data Analysis","Pandas Library","Data Visualization","Matplotlib","Data Scraping","Web Data Extraction","Automated Data Processing","Geospatial Analysis"],image:"./project-DALL-E/DALL-E-IstanbulTraffic.webp",link:"https://github.com/mbatinefe/istanbul-traffic-fuel-analysis"},{id:5,title:"Monopoly Board Game",description:"Digital version of Monopoly with enhanced gameplay features and user interface.",skills:["C++ Programming","Object-Oriented Programming","Game Development","Dynamic Memory Management","File I/O"],image:"./project-DALL-E/DALL-E-Monopoly.webp",link:"https://github.com/mbatinefe/monopoly-board-game"},{id:6,title:"Weekly Schedule Maker",description:"Tool for efficiently managing and scheduling weekly tasks and appointments.",skills:["C++ Programming","Algorithm Design","Data Structures","File I/O in C++","Problem Solving"],image:"./project-DALL-E/DALL-E-Schedule.webp",link:"https://github.com/mbatinefe/schedule-maker"},{id:7,title:"Backgammon Game",description:"Implementation of the classic board game Backgammon with a focus on AI gameplay.",skills:["C++ Programming","Object-Oriented Programming","Game Development","Logical Thinking"],image:"./project-DALL-E/DALL-E-Backgammon.webp",link:"https://github.com/mbatinefe/backgammon"},{id:8,title:"NFT - Educated Ape Club",description:"NFT collection on the Polygon blockchain featuring unique digital artwork.",skills:["Solidity Programming","Smart Contract Development","Polygon Blockchain Familiarity","IPFS for Metadata Storage","Web3 Integration","Cryptographic Techniques","Decentralized App Development","Blockchain Security Practices","Token Standards Knowledge","NFT Marketplace Deployment"],image:"./project-DALL-E/EducatedApeClub-Sabanci.png",link:"https://opensea.io/collection/educatedapeclub"}],activeProject:null}},methods:{activateProject(a){this.activeProject=a},closeModal(){this.activeProject=null}}},p=a=>(k("data-v-4d1e6bd7"),a=a(),b(),a),v={class:"projects container"},y=p(()=>e("h2",{class:"text-center my-4"},"Projects",-1)),D={class:"row"},L={class:"card mb-4"},P=["src","onClick"],A={class:"card-body"},w={class:"card-title"},_={class:"card-text"},S=p(()=>e("h6",{class:"skills-heading"},"Skills Acquired",-1)),E={class:"skills-container"},M=["href"],j=["src"];function C(a,i,I,F,s,l){return n(),o("div",v,[y,e("div",D,[(n(!0),o(m,null,d(s.projects,t=>(n(),o("div",{class:"col-md-4",key:t.id},[e("div",L,[e("img",{src:t.image,class:"card-img-top",alt:"Project Image",onClick:c=>l.activateProject(t)},null,8,P),e("div",A,[e("h5",w,r(t.title),1),e("p",_,r(t.description),1),S,e("div",E,[(n(!0),o(m,null,d(t.skills,c=>(n(),o("span",{class:"badge bg-secondary",key:c},r(c),1))),128))]),e("a",{href:t.link,class:"btn btn-primary",target:"_blank"},"View Project",8,M)])])]))),128))]),s.activeProject?(n(),o("div",{key:0,class:"modal-overlay",onClick:i[2]||(i[2]=t=>l.closeModal())},[e("div",{class:"modal-content",onClick:i[1]||(i[1]=u(()=>{},["stop"]))},[e("img",{src:s.activeProject.image,class:"zoom-img"},null,8,j),e("button",{class:"close-btn",onClick:i[0]||(i[0]=t=>l.closeModal())},"×")])])):h("",!0)])}const B=g(f,[["render",C],["__scopeId","data-v-4d1e6bd7"]]);export{B as default};
