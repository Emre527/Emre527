 <script>
    const ad=document.querySelector("#ad");
    const soyad=document.querySelector("#soyad");
    const email=document.querySelector("#email");
	const not=document.querySelector("#not");
	const Not=document.querySelector("#Not");
    const ekle=document.querySelector("#ekle");
    const liste=document.querySelector("#liste");
 
    ekle.onclick=function(){
      
      
      
      let tAd=document.createElement("td");
      let tSoyad=document.createElement("td");
      let tEmail=document.createElement("td");
	  let tnot=document.createElement("td");
      let tNot=document.createElement("td");
	  
      tAd.textContent=ad.value;
      tSoyad.textContent=soyad.value;
      tEmail.textContent=email.value;
      tnot.textContent=not.value;
	  tNot.textContent=not.value;
 
     
      let tr=document.createElement("tr");
 
      
      tr.appendChild(tAd);
      tr.appendChild(tSoyad);
      tr.appendChild(tEmail);
	  tr.appendChild(tnot);
      tr.appendChild(tNot);
	  
      
      liste.appendChild(tr);
 
      
      ad.value="";
      soyad.value="";
      email.value="";
	  not.value="";
	  Not.value="";
 
      
      ad.focus();
    }
	</script>
 