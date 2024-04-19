import{_ as r,o as s,c,a as t,t as o,b as i,d,p as l,e as g}from"./index-mfCnnw5E.js";import"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.1.392/+esm";const f={name:"HomeView",data(){return{currentTime:this.getCurrentTime(),timeOfDayGreeting:this.getTimeOfDayGreeting()}},created(){this.startClock()},methods:{getTimeOfDayGreeting(){const e=new Date().getHours();return e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"},getCurrentTime(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},startClock(){setInterval(()=>{this.currentTime=this.getCurrentTime()},1e3)}}},a=e=>(l("data-v-f00f924b"),e=e(),g(),e),h={class:"home"},p=a(()=>t("h2",{class:"text-center my-4"}," Welcome to My Portfolio",-1)),m={class:"header-with-clock"},u={class:"digital-clock"},v=a(()=>t("strong",null,"Mustafa Batın Efe",-1)),b=d('<p data-v-f00f924b><strong data-v-f00f924b>Specialist in Cutting-Edge Technologies:</strong> Passionate about Machine Learning, Cybersecurity, and Blockchain. My projects range from developing mini neural networks to NFT projects based on blockchain technology, showcasing my ability to innovate and enhance efficiencies using complex technologies.</p><p data-v-f00f924b><strong data-v-f00f924b>Global Experience and Leadership:</strong> With academic experiences in Austria and Hong Kong, I&#39;ve gained a global perspective that enhances my understanding of technological landscapes worldwide. As a former board member of the Sabancı University Computer Science Society, I&#39;ve fostered an educational environment that encourages advanced technological learning.</p><p data-v-f00f924b><strong data-v-f00f924b>Dedication to Lifelong Learning:</strong> My journey of continuous learning through courses in machine learning, AI, and cybersecurity is evidenced by my certifications from Coursera and Microsoft. This ongoing education keeps me at the forefront of technological advancements.</p><p data-v-f00f924b><strong data-v-f00f924b>Community Involvement:</strong> Committed to service, I participate in initiatives like Türk Kızılayı to support vital community services such as blood donation campaigns.</p><p data-v-f00f924b>I invite you to explore the projects and experiences that define my professional path as a Software Engineer. Connect with me on LinkedIn for collaborations. Discover how we can drive innovations together in Machine Learning, Cybersecurity, and Blockchain!</p><a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info mt-4" data-v-f00f924b>Connect on LinkedIn</a>',6);function y(e,_,w,k,n,C){return s(),c("div",h,[p,t("div",m,[t("div",u,o(n.currentTime),1)]),t("p",null,[i(o(n.timeOfDayGreeting)+"! This is ",1),v,i(", an enthusiastic Computer Science student at Sabancı University, specializing in Machine Learning, Cybersecurity, and Blockchain technologies. Currently based in Istanbul, I am deeply engaged in integrating cutting-edge technological solutions with real-world applications.")]),b])}const S=r(f,[["render",y],["__scopeId","data-v-f00f924b"]]);export{S as default};
