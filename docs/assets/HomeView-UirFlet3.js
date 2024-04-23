import{_ as m,o as l,c,a as e,w as u,v as g,t as o,b as r,F as k,d,p as h,e as f}from"./index-5ftJmNb3.js";import"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.1.392/+esm";const p={name:"HomeView",data(){return{currentTime:this.getCurrentTime(),isTurkish:!1,timeOfDayGreeting:this.getTimeOfDayGreeting(),timeOfDayGreetingTR:this.getTimeOfDayGreetingTR()}},created(){this.startClock()},methods:{getTimeOfDayGreeting(){const i=new Date().getHours();return i<12?"Good Morning":i<18?"Good Afternoon":"Good Evening"},getTimeOfDayGreetingTR(){const i=new Date().getHours();return i<12?"Günaydın":i<18?"Tünaydın":"İyi Akşamlar"},getCurrentTime(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},startClock(){setInterval(()=>{this.currentTime=this.getCurrentTime()},1e3)}}},a=i=>(h("data-v-eb8f43c8"),i=i(),f(),i),y={class:"language-switch"},b={class:"form-check form-switch"},v=a(()=>e("label",{class:"form-check-label left-label"},"EN",-1)),_=a(()=>e("label",{class:"form-check-label right-label",for:"langToggle"},"TR",-1)),T={key:0,class:"home"},w=a(()=>e("h2",{class:"text-center my-4"}," Welcome to My Portfolio",-1)),C={class:"header-with-clock"},B={class:"digital-clock"},I=a(()=>e("strong",null,"Mustafa Batın Efe",-1)),S=d('<p data-v-eb8f43c8><strong data-v-eb8f43c8>Specialist in Cutting-Edge Technologies:</strong> Passionate about Machine Learning, Cybersecurity, and Blockchain. My projects range from developing mini neural networks to NFT projects based on blockchain technology, showcasing my ability to innovate and enhance efficiencies using complex technologies.</p><p data-v-eb8f43c8><strong data-v-eb8f43c8>Global Experience and Leadership:</strong> With academic experiences in Austria and Hong Kong, I&#39;ve gained a global perspective that enhances my understanding of technological landscapes worldwide. As a former board member of the Sabancı University Computer Science Society, I&#39;ve fostered an educational environment that encourages advanced technological learning.</p><p data-v-eb8f43c8><strong data-v-eb8f43c8>Dedication to Lifelong Learning:</strong> My journey of continuous learning through courses in machine learning, AI, and cybersecurity is evidenced by my certifications from Coursera and Microsoft. This ongoing education keeps me at the forefront of technological advancements.</p><p data-v-eb8f43c8><strong data-v-eb8f43c8>Community Involvement:</strong> Committed to service, I participate in initiatives like Türk Kızılayı to support vital community services such as blood donation campaigns.</p><p data-v-eb8f43c8>I invite you to explore the projects and experiences that define my professional path as a Software Engineer. Connect with me on LinkedIn for collaborations. Discover how we can drive innovations together in Machine Learning, Cybersecurity, and Blockchain!</p><a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info mt-4" data-v-eb8f43c8>Connect on LinkedIn</a>',6),G={key:1,class:"home"},M=a(()=>e("h2",{class:"text-center my-4"},"Portföyüme Hoş Geldiniz",-1)),z={class:"header-with-clock"},D={class:"digital-clock"},j=a(()=>e("strong",null,"Mustafa Batın Efe",-1)),L=d('<p data-v-eb8f43c8><strong data-v-eb8f43c8>Yeni Teknolojilerde Uzman:</strong> Makine Öğrenimi, Siber Güvenlik ve Blockchain konularında tutkuluyum. Projelerim, blockchain teknolojisi temelinde NFT projelerinden mini sinir ağları geliştirmeye kadar uzanmakta ve karmaşık teknolojileri kullanarak yenilik yapma ve verimlilikleri artırma yeteneğimi sergilemektedir.</p><p data-v-eb8f43c8><strong data-v-eb8f43c8>Küresel Deneyim ve Liderlik:</strong> Avusturya ve Hong Kong&#39;daki akademik deneyimlerim, dünya çapında teknolojik manzaraların anlaşılmasını artıran küresel bir perspektif kazandırmıştır. Sabancı Üniversitesi Bilgisayar Bilimi Topluluğu&#39;nun eski bir yönetim kurulu üyesi olarak, ileri teknolojik öğrenmeyi teşvik eden bir eğitim ortamı oluşturdum.</p><p data-v-eb8f43c8><strong data-v-eb8f43c8>Ömür Boyu Öğrenmeye Adanmışlık:</strong> Makine öğrenimi, AI ve siber güvenlik kursları aracılığıyla sürekli öğrenme yolculuğum, Coursera ve Microsoft&#39;tan aldığım sertifikalarla kanıtlanmıştır. Bu sürekli eğitim, beni teknolojik ilerlemelerin ön saflarında tutmaktadır.</p><p data-v-eb8f43c8><strong data-v-eb8f43c8>Toplum Katılımı:</strong> Türk Kızılayı gibi inisiyatiflere katılarak önemli toplum hizmetlerini desteklemeye adanmış durumdayım, örneğin kan bağışı kampanyaları.</p><p data-v-eb8f43c8>Yazılım Mühendisi olarak profesyonel yolculuğumu tanımlayan projeleri ve deneyimleri keşfetmek için sizi davet ediyorum. LinkedIn üzerinden işbirliği için benimle iletişime geçebilirsiniz. Makine Öğrenimi, Siber Güvenlik ve Blockchain&#39;de birlikte nasıl yenilikler yapabileceğimizi keşfedelim!</p><a href="https://www.linkedin.com/in/mbefe/" target="_blank" class="btn btn-info mt-4" data-v-eb8f43c8>LinkedIn&#39;de Bağlantı Kurun</a>',6);function x(i,t,A,E,n,O){return l(),c(k,null,[e("div",y,[e("div",b,[v,u(e("input",{class:"form-check-input",type:"checkbox",id:"langToggle","onUpdate:modelValue":t[0]||(t[0]=s=>n.isTurkish=s),onChange:t[1]||(t[1]=(...s)=>i.toggleLanguage&&i.toggleLanguage(...s))},null,544),[[g,n.isTurkish]]),_])]),n.isTurkish?(l(),c("div",G,[M,e("div",z,[e("div",D,o(n.currentTime),1)]),e("p",null,[r(o(n.timeOfDayGreetingTR)+"! Ben ",1),j,r(", Sabancı Üniversitesi'nde Bilgisayar Bilimi öğrencisiyim ve Makine Öğrenimi, Siber Güvenlik ve Blockchain teknolojileri alanlarında uzmanlaşmaktayım. Şu anda İstanbul'da bulunuyorum ve teknolojik çözümleri gerçek dünya uygulamalarıyla entegre etmeye büyük bir ilgi duyuyorum.")]),L])):(l(),c("div",T,[w,e("div",C,[e("div",B,o(n.currentTime),1)]),e("p",null,[r(o(n.timeOfDayGreeting)+"! This is ",1),I,r(", an enthusiastic Computer Science student at Sabancı University, specializing in Machine Learning, Cybersecurity, and Blockchain technologies. Currently based in Istanbul, I am deeply engaged in integrating cutting-edge technological solutions with real-world applications.")]),S]))],64)}const N=m(p,[["render",x],["__scopeId","data-v-eb8f43c8"]]);export{N as default};
