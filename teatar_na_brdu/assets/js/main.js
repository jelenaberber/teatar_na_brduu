window.onload = function() {
    createLayout();
    toggleNav();
    // navigation
    let url = document.location.pathname;
    if(url=="/" || url=="/index.html"){
        showNews();
    }
    else if(url=="/repertoar.html"){
        repertoar();
        modalAppears();
        provera();
        modalDisappears();
        calculator();
        modalBuy();
        select();
    }
    else if(url == "/blagajna.html"){
        socialMedia();
        meniNav();
    }
    else{
        authorSocialMedia();
    }

    
    //menu
     function createLayout() {
        //header
        var menuPages = ["Početna", "Repertoar", "Blagajna", 'O autoru'];
        var menuLinks = ["index.html", "repertoar.html", "blagajna.html", "autor.html"];
        var menu = document.querySelector('#menu');
        
        for(let i = 0; i < menuPages.length; i++){
            menu.innerHTML += `
                <li class="nav-item">
                    <a class="nav-link" href="${menuLinks[i]}">${menuPages[i]}</a>
                </li>
            `;
            document.querySelector('#bar').innerHTML += `
                <li><a href="${menuLinks[i]}">${menuPages[i]}</a></li>
            `
        }
        


        //footer
        var footerMenu = document.querySelector('#footerMenu');
        var link = document.querySelector('#link');
        var importantLinks = ["Sitemap", "Dokumentacija"];
        var important = ['sitemap.xml', 'dokumentacija']
        var socialIcon = ["instagram", "facebook", "twitter"];
        let socialLinks = ['https://www.instagram.com/teatarnabrdu/', 'https://sr-rs.facebook.com/teatarnabrdu/', 'https://twitter.com/tickets_rs/status/986905081898512384'];
        for(let i = 0; i < menuPages.length; i++){
            footerMenu.innerHTML += `
                <li>
                    <a href="${menuLinks[i]}" class="nav-link text-info py-2">${menuPages[i]}</a>
                </li>`
        }
        for(let i = 0; i < importantLinks.length; i++){
            link.innerHTML += 
            `
            <li class="py-2">
                <a href="${important[i]}">${importantLinks[i]}</a>
            </li>
            `
        }
        var socials = document.querySelector('#socials')
        for(let i = 0; i < socialIcon.length; i++){
            socials.innerHTML += `
            <li>
                <a href="${socialLinks[i]}" class="my-2"><i class="fa-brands fa-${socialIcon[i]} m-2"></i></a>
            </li>
            `
        }
    }
    
    //index.html
    function showNews(){
        var title = ["O TEATRU", "NOVOSTI", "EPIDEMIOLOŠKE MERE"];
        var textShort = ["Teatar na Brdu je najmladje pozorište u Srbiji, sa sedištem u Beogradu, Opština Čukarica, Banovo Brdo.Smešteno je izmedju šumovitog Košutnjaka i Ade Ciganlije, dva omiljena izletišta Beogradjana.", "Probe za novu predstavu “#Mačka pečena” su počele 06.10.2021. godine. Premijera predstave je zakazana za 25.11.2021. godine od 20h.", "U skladu sa preporukama Vlade Republike Srbije i krizog štaba, preduzimamo sve preventivne epidemiološke mere kako biste bezbedno uživali u omiljenim predstavama:"];
        var modal = ["modal1", "modal2", "modal3"];
        var textLong =["Teatar na Brdu je najmladje pozorište u Srbiji, sa sedištem u Beogradu, Opština Čukarica, Banovo Brdo.<br/>Smešteno je izmedju šumovitog Košutnjaka i Ade Ciganlije, dva omiljena izletišta Beogradjana.<br/>Osnivači Teatra na Brdu su glumci Viktor Savic i Andrija Milošević, te Opština Čukarica, dok je ulogu repertoarskog i programskog direktora preuzela Aleksandra Tomić, glumica, koja je ujedno u kumovala u davanju imena ovom pozorištu.<br/>Teatar na Brdu je bio san, ostvaren uz pomoć ljudi koji su imali viziju i entuzijazam, a najviše ljubavi prema pozorištu, kulturi i zajednici u kojoj žive.<br/>Naš teatar okuplja publiku najrazličitije dobi, jer na daskama ovog pozorišta igraju mnogi najcenjeniji naši glumci i stvaraoci.<br/>Danas smo jedna od najposećenijih scena u Beogradu, a naše predstave su u vrhu gledanosti i popularnosti u celom regionu. Desetine hiljada ljudi prate naša gostovanja i raduju se našim predstavama.<br/>Smatrali smo da vam nedostaje pozorište smeha i uzbudjenja, teatar koji bi sazrevao i rastao zajedno sa publikom. Nama umetnicima, Teatar na Brdu bio je lek, za dušu i srce.<br/>Nadamo se da je to i vama.", "Probe za novu predstavu “#Mačka pečena” su počele 06.10.2021. godine. Premijera predstave je zakazana za 25.11.2021. godine od 20h.<br/>Predstava se realizuje u saradnji sa UN Women Srbija i Norveškom ambasadom u sklopu inicijative Mladi protiv nasilja.<br/>Tekst predstave je napisala Milena Depolo, reditelj je Djurdja Tešić, a u predstavi igraju: Jelena Djokić, Viktor Savić, Dušanka Stojanović Glid, Vladan Milić, Teodora Dragićević i Tašana Djordjević.", "U skladu sa preporukama Vlade Republike Srbije i krizog štaba, preduzimamo sve preventivne epidemiološke mere kako biste bezbedno uživali u omiljenim predstavama:<br/>-U prostoru pozorišta Teatar na Brdu, obavezno je nošenje zaštitnih maski i to od trenutka ulaska u zgradu pozorišta, sve do njenog napuštanja. Nošenje zaštitnih maski je obavezno tokom trajanja predstave a poštovanje ove mere će kontrolisati naši razvodnici. Pozorište Teatar na Brdu, ne obezbeđuje zaštitne maske za publiku.<br/>-Pri ulasku u zgradu pozorišta naši razvodnici će svakom posetiocu beskontaktnim uređajima meriti telesnu temperaturu. Ukoliko posetilac ima povišenu telesnu temperaturu (preko 37,5) neće mu biti dozvoljen ulazak u zgradu pozorišta."];
      
        var news = document.querySelector('#news');
    
        for(let i = 0; i < title.length; i++){
            news.innerHTML += `
                <div class="col-12 border-top mt-3 pt-3" id="new">
                    <h1>${title[i]}</h1>
                    <p>${textShort[i]}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modal[i]}" id="readMore">
                                    Pročitaj više
                    </button>
                    <div class="modal fade" id="${modal[i]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${title[i]}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ${textLong[i]}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
        
    
    // modal functions
    function modalAppears(){
        let svaDugmad = document.getElementsByClassName('button');
        for (const btn of svaDugmad) {
            btn.onclick = () => {
                document.querySelector('#modal').style.display="block"; 
            }
        }
    }
    function modalDisappears(){
        document.querySelector('#btn-quit').onclick = () => {
            document.querySelector('#modal').style.display="none";
            document.getElementById('forma').reset();
            $('.check').hide();
        }
    }
    function modalBuy(){
        $('#close').click(()=> $('#modal-2').hide());
    }

    //responsive nav

    function toggleNav () {
        document.getElementById("navbar-btn").addEventListener('click', ()=>{
            if (document.getElementById('bar-menu').classList.contains('d-none')){
                document.getElementById('bar-menu').classList.remove('d-none');
            } 
            else {
                document.getElementById('bar-menu').classList.add('d-none');
            }
            
        })
    }


  //repertoar
    function repertoar(){
        let title = ['celo telo tu me boli', 'zaustavite zemlju hoću da izađem', 'šećer je sitan osim kad je kocka', 'petrijin venac', 'frenki i džoni', 'idem putem pa zagrlim drvo', '#mačkapečena', 'pazi šta želiš'];
        let when = ['.12. <br/> petak, 20:00', '.12. <br/> subota, 20:00', '.12. <br/> utorak, 20:00', '.12. <br/> petak, 20:00', '.12. <br/> subota, 20:00','.12. <br/> nedelja, 20:00','.12. <br/> sreda, 20:00', '.12. <br/> nedelja, 20:00',];
        let dayInMonth = [9, 10, 13, 16, 17, 18, 21, 25]
        let img = ['celo-telo-tu-me-boli.png', 'zaustavite-zemlju-hocu-da-izadjem.jpg', 'Secer-je-sitan-osim-kad-je-kocka.png', 'petrijin-venac.png', 'frenki-dzoni.jpg', 'idem-putem-i-zagrlim-drvo.png', 'macka-pecena.png', 'pazi-sta-zelis.jpg']
        
        let date = new Date();
        let day = date.getDate();
        console.log(typeof(day));

        let program = document.querySelector('#program');
        let html = '';
        for(let i = 0; i < title.length; i++){
            html += `
            <div class="card my-5 py-5" id="date">
                <div class="row g-0">
                    <div class="col-md-7">
                        <div class="card-body mt-2 d-flex flex-wrap flex-column align-items-start">
                            <h5 class="card-title upper">${title[i]}</h5>
                            <span class="border d-block"></span>
                            <p class="card-text mt-2 upper">${dayInMonth[i]}${when[i]}</p>
                            <button type="button" class="btn mt-3 button" id="taster">Kupi kartu online</button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <img src="assets/img/${img[i]}" class="rounded img-fluid rounded-start" alt="...">
                    </div>
                </div>
            </div>
            `
        }
        program.innerHTML = html;
    for(let i = 0; i < dayInMonth.length; i++){
        if(dayInMonth[i]<day){
            document.getElementsByClassName('button')[i].classList.add('disabled');
        }
    }

   }

    //select
    function select(){
        let section = ['IzaberiteSekciju', 'Balkon', 'Loža', 'Parter'];
        let option = ['izaberite', 1, 2, 3]
        for(let i = 0; i < section.length; i++){
          document.querySelector('#seat').innerHTML += `<option value="${option[i]}">${section[i]}</option>`
        }
        let tickets = ['izaberite', 1, 2, 3, 4];
        let ticketOption = ['Izaberite Broj Karata', 1, 2, 3, 4]
        for(let i = 0; i < tickets.length; i++){
            document.querySelector('#ticket').innerHTML += `<option value="${tickets[i]}">${ticketOption[i]}</option>`
          }
    }

    // forma
    function provera(){
        document.querySelector('#btn-buy').onclick = () => {
            let name = document.querySelector('#tbName').value;
            let lastName = document.querySelector('#tbLastName').value;
            let rule = /^[A-ZČĆĐŠŽ][a-zčćđšž]{2,15}$/;
            let ruleEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let rulePhone = /^06[0-9]{7,8}$/;
            let email = document.querySelector('#tbemail').value;
            let brojac = 0;
            let phone = document.querySelector('#phone').value;
            if(name === ""){
                $('#spanName').html("Ime je obavezno").css('display', 'block');
            }
            else if(!rule.test(name)){
                $('#spanName').html("Ime nije dobro uneto.").css('display', 'block');
            }
            else{
                $('#spanName').hide();
                brojac++;
            }

            if(lastName === ''){
                $('#spanLastName').html("Prezime je obavezno.").css('display', 'block');
            }
            else if(!rule.test(lastName)){
                $('#spanLastName').html("Prezime nije dobro uneto.").css('display', 'block');
            }
            else{
                $('#spanLastName').hide();
                brojac++;
            }

            if(email === ''){
                $('#spanEmail').html("Email je obavezan").css('display', 'block');
            }
            else if(!ruleEmail.test(email)){
                $('#spanEmail').html("Email nije dobro unet.").css('display', 'block');
            }
            else{
                $('#spanEmail').hide();
                brojac++;
            }
            if(phone === ''){
                $('#spanPhone').html('Broj telefona je obavezan.').css('display','block')
            }
            else if((!rulePhone.test(phone))){
                $('#spanPhone').html('Broj telefona nije dobrog formata.').css('display','block')
            }
            else{
                $('#spanPhone').hide();
                brojac++;
            }
            //provera za sekciju i broj karata
            let section = document.querySelector('#seat');
            let value = section.selectedIndex;
            if(value == 0){
                $('#spanSection').html("Morate izabrati sekciju.").css('display', 'block');
            }
            else{
                $('#spanSection').hide();
                brojac++;
            }
            let ticket = document.querySelector('#ticket');
            let number = ticket.selectedIndex;
            if(number == 0){
                $('#spanTickets').html("Morate izabrati broj karata.").css('display', 'block');
            }
            else{
                $('#spanTickets').hide();
                brojac++;
            }
            console.log(brojac)
            if(brojac == 6){
                $('#modal').html('').css('display', 'none');
                $('#modal-2').show();
            }
            
        }  
    }

    // racun
    function calculator(){
        $('.ddl').change(() =>{
            let ticket = document.querySelector('#ticket');
            let number = ticket.selectedIndex;
            let section = document.querySelector('#seat');
            let value = section.selectedIndex;
            let price = 0;
            let ticketPrice = 0;
            let seat = ''; 

            if(value == 1){
                ticketPrice = 800;
                price = ticketPrice * number;
                seat = 'Balkon';
            }
            else if(value == 2){
                ticketPrice = 1000;
                price = 1000 * number;
                seat = 'Loža';
            }
            else if(value == 0){
                price = 0,00;
            }
            else{
                ticketPrice = 1200;
                price = ticketPrice * number;
                seat = 'Parter';
            }
            let check = document.querySelector('#check');
            check.innerHTML = ` <h1>Izabrana mesta:</h1>
                                <p >Sekcija: ${seat}</p>
                                <p>Broj karata: ${number}</p>
                                <p>Osnovna cena: ${ticketPrice}</p>
                                <p id="totalPrice">Ukupno: ${price}</p>`
        })
    }

    //blagajna.html
    function socialMedia(){
        let media = ['instagram', 'facebook', 'twitter'];
        let links = ['https://www.instagram.com/teatarnabrdu/', 'https://sr-rs.facebook.com/teatarnabrdu/', 'https://twitter.com/tickets_rs/status/986905081898512384'];
        for(let i = 0; i < links.length; i++){
            document.querySelector('.icons').innerHTML += `<a href="${links[i]}" class="mx-3"><i class="fa-brands fa-${media[i]}"></i></a>`
        }
    }
    function authorSocialMedia(){
        let authorLinks = ['https://www.instagram.com/berber__j/', 'https://www.linkedin.com/in/jelena-berber-5378bb252/', 'https://github.com/jelenaberber'];
        let authorMedia = ['instagram', 'linkedin', 'github'];
        for(let i = 0; i < authorLinks.length; i++){
            document.querySelector('#media').innerHTML += `<a href="${authorLinks[i]}" class="mx-2"><i class="fa-brands fa-${authorMedia[i]}"></i></a>`
        }
    }
    
}
