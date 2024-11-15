
//saat

const  zaman=document.querySelector('.zaman');

const tarih = () =>{
    const now=new Date();
    const saat=now.getHours();
    const dakika=now.getMinutes();
    const saniye=now.getSeconds();


const anasayfa = `🕑 <span>${saat}</span>:
             <span>${dakika}</span>:
              <span>${saniye}</span> 🕑 `

              zaman.innerHTML=anasayfa;

          
  };

  setInterval(tarih,1000); /* sürekli çağırmak için (1000 vermemin nedeni ise her saniye)  */





// resimleri filtreleme

function filtrele(proje) {
  const resimler = document.querySelectorAll('.resim');

  resimler.forEach(resim => {
       
          if (resim.classList.contains(proje)) {
              resim.style.display = 'block'; // eğer şart sağlanıyorsa elementleri gösterir
          } else {
              resim.style.display = 'none'; // hiçbir element gözükmez
          }
      
  });
}


//form

function formİcerik() {
  alert("mesajınız başarıyla gönderilmiştir"); // formun gönderildiğine dair ekrana alert çıkarır
} 


