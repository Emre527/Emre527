 <script>
    const ad=document.querySelector("#ad");
    const soyad=document.querySelector("#soyad");
    const email=document.querySelector("#email");
	const not=document.querySelector("#not");
	const Not=document.querySelector("#Not");
    const ekle=document.querySelector("#ekle");//tıklama olayı eklenecek
    const liste=document.querySelector("#liste");
 
    ekle.onclick=function(){
      //butona tıklanınca çalıştırılacak
      
      //td elementlerini oluşturuyoruz
      let tAd=document.createElement("td");
      let tSoyad=document.createElement("td");
      let tEmail=document.createElement("td");
	  let tnot=document.createElement("td");
      let tNot=document.createElement("td");
	  
      tAd.textContent=ad.value;//textboxtan değeri okuyup aktarıyoruz.
      tSoyad.textContent=soyad.value;//textboxtan değeri okuyup aktarıyoruz.
      tEmail.textContent=email.value;//textboxtan değeri okuyup aktarıyoruz.
      tnot.textContent=not.value;
	  tNot.textContent=not.value;
 
      //tr elementi oluşturuyoruz
      let tr=document.createElement("tr");
 
      //tdleri tr içine ekliyoruz
      tr.appendChild(tAd);
      tr.appendChild(tSoyad);
      tr.appendChild(tEmail);
	  tr.appendChild(tnot);
      tr.appendChild(tNot);
	  
      //tr elementini liste (tablo) içine ekliyoruz
      liste.appendChild(tr);
 
      //nenelerin için eklemeden sonra temizleyelim
      ad.value="";
      soyad.value="";
      email.value="";
	  not.value="";
	  Not.value="";
 
      //temizlemeden sonra ad içine odaklansın
      ad.focus();
    }
	</script>
 