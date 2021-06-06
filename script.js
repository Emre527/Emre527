// Değişkenlerimizi belirleyerek divlerimizi ID'leri ile tanıyalım
const malzemeAdi = $('#malzemeAdi');
const stokMiktari = $('#stokMiktari');
const stokTuru = $('#stokTuru');
const fiyat = $('#fiyat');
const malzemeEkleBtn = $('#malzemeEkleBtn');
const malzemeListesiTablosu = $('#malzemeListesiTablosu');

// Malzeme Ekle butonuna basıldığında yapılacak işlem
malzemeEkleBtn.click(malzemeEkle);

// Malzemeleri eklemek için kullanacağımız fonksiyon
function malzemeEkle(){

	console.log(malzemeAdi.val().length);
	console.log(stokMiktari.val().length);
	console.log(stokTuru.val().length);
	console.log(fiyat.val().length);

	if (malzemeAdi.val().length > 0 && stokMiktari.val().length > 0 && stokTuru.val().length > 0 && fiyat.val().length > 0){
		localStorageKaydet(malzemeAdi.val(), stokMiktari.val(), stokTuru.val(), fiyat.val());
		return window.location.replace('liste.html');
	} else {
		return alert('Formu tamamen doldurun!');
	}

}

// Verileri JSON'dan Array'e dönüştürmek için kullanacağımız fonksiyon
function localStorageArrayeDonustur(){

	let listeVerisi;

	if (localStorage.getItem('malzemeler') === null) {
		listeVerisi = [];
	} else {
		listeVerisi = JSON.parse(localStorage.getItem('malzemeler'));
	}

	return listeVerisi;

}

// Verileri LocalStorage'a kaydetmek için kullanacağımız fonksiyon
function localStorageKaydet(malzeme, stok, tur, fiyat){

	let malzemeler = localStorageArrayeDonustur();
	let yeniMalzeme = {
		malzeme: malzeme,
		stok: stok,
		tur: tur,
		fiyat: fiyat,
		toplam: stok * fiyat
	}

	malzemeler.push(yeniMalzeme);
	localStorage.setItem('malzemeler', JSON.stringify(malzemeler));

}

// Bu fonksiyonda localStoragedan verileri okuyoruz ve malzemeleri yazdırıyoruz
function malzemeleriYazdir(){

	let malzemeler = localStorageArrayeDonustur();

	malzemeler.forEach(function (malzeme){
		malzemeSatirOlustur(malzeme);
	});

}

// Bu fonksiyonda verileri listeye ekleyen bir fonksiyon yazıyoruz.
function malzemeSatirOlustur(malzeme){

	$('#malzemeListesiTablosu > tbody:last-child').append(`
	<tr>
		<td>${malzeme.malzeme}</td>
		<td>${malzeme.stok}</td>
		<td>${malzeme.tur}</td>
		<td>${malzeme.fiyat} TL</td>
		<td>${malzeme.toplam} TL</td>
	</tr>
	`);

}

// Burada döküman hazır olunca fonksiyonumuzu çağırarak tablo içeriğini ekletiyoruz.
$(document).ready(malzemeleriYazdir);

