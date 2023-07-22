const secilenButton = document.querySelector("#btn-id");
const randomYaz = document.getElementsByTagName("h2")[0];
const secilenİnput = document.querySelector(".deneme");
const zorluk = document.getElementById("zorluk");
let random = Math.random();
secilenİnput.disabled = true;

function secimYap() {
  let x = Number(zorluk.value);
  secilenİnput.disabled = false;
  return Math.round(random * x);
}
zorluk.addEventListener("change", function () {
  console.log(secimYap());
});

let i = 0;
let sayac = 1;
let bos = 0;

// secilenButton.addEventListener('click', function(){
//     tahminEt()
// })

secilenİnput.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    tahminEt();
  }
});

function tahminEt() {
  const secilenİnput = document.querySelector(".deneme");
  const secilenP = document.querySelector("p");
  let string = secilenİnput.value;

  if (!isNaN(string)) {
    if (sayac == 6) {
      secilenP.textContent = `Oyunu Kaybettin.`;
      secilenButton.disabled = true;
    }
    while (i < 5) {
      let sayi = Number(secilenİnput.value);

      if (string == "") {
        bos++;
        secilenP.innerText = `Bir Değer Gir ${5 - sayac} Hakkın Kaldı`;
        i++;
        sayac++;
        break;
      }
      if (sayi < secimYap()) {
        secilenP.textContent = `Daha Büyük Bir Sayı Gir ${
          5 - sayac
        } Hakkın Kaldı`;
        secilenP.style.color = "red";
        i++;
        sayac++;
        break;
      } else if (sayi > secimYap()) {
        secilenP.textContent = `Daha Küçük Bir Sayı Gir ${
          5 - sayac
        } Hakkın Kaldı`;
        secilenP.style.color = "red";
        i++;
        sayac++;
        break;
      } else if (sayi == secimYap()) {
        secilenP.textContent = `Oyunu Kazandın.${sayac} kere Denedin.`;
        secilenP.style.color = "green";
        secilenButton.disabled = true;
        i++;
        sayac++;
        break;
      }
    }

    if (bos == 2) {
      secilenP.innerText = `Daha Fazla Bunu Yapmana İzin Veremem.`;
      secilenP.style.color = "red";
      secilenButton.disabled = true;
    }
  } else {
    secilenP.innerText = `Rakamlarla Çalışan Bir Oyundur. ${
      5 - sayac
    } Hakkın Kaldı.`;
    secilenP.style.color = "red";
    i++;
    sayac++;
  }
  secilenİnput.value = "";
}
