let searchDiv = document.querySelector("#search-autocomplete");
let containerDiv = document.querySelector(".ms-autosugestions__content");
let input = document.querySelector(".ms-autosugestions__search-input");

async function API() {
  let data = [
    {
      title: "iPHONE 7 PLUS 32 GB AKILLI TELEFON SİYAH",
      img: "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/APPLE/thumb/v2-83635.jpg",
      dest_url:
        "https://www.vatanbilgisayar.com/iphone-7-plus-32-gb-akilli-telefon-siyah.html?OM.zn=TopSellers-w20&OM.zpc=MNQM2TU/A",
      brand: "",
      price: 5699.01,
      cur: "TL",
    },
    {
      title: "JBL JBLC100SIUBLK KULAK İÇİ KULAKLIK  CT, IE, Siyah",
      img: "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/JBL/thumb/v2-87143.jpg",
      dest_url:
        "https://www.vatanbilgisayar.com/jblc100siublk-kulaklik-ct-ie-siyah.html?OM.zn=TopSellers-w20&OM.zpc=JB.JBLC100SIUBLK",
      brand: "",
      price: 69.9,
      cur: "TL",
    },
    {
      title:
        "LENOVO IDEAPAD 330 CORE İ5 8250U 1.6GHZ-8GB",
      img: "https://cdn.vatanbilgisayar.com/UPLOAD/PRODUCT/LENOVO/thumb/v2-92120.jpg",
      dest_url:
        "https://www.vatanbilgisayar.com/lenovo-ideapad-330-core-i5-8250u-1-6ghz-8gb-ram-1tb-hdd-15-6-radeon530-2gb-w10.html?OM.zn=TopSellers-w20&OM.zpc=81DE0053TX",
      brand: "",
      price: 5614.27,
      cur: "TL",
    },
  ];
  input.addEventListener("click", function () {
    document.querySelector(".ms-autosugestions__content").style.display =
      "none";
    searchDiv.innerHTML += `<ul class="search-container"><h1 class="title"> En Çok Aranan Ürünler</h1></ul>`;
    data.forEach((element) => {
      document.querySelector(".search-container").innerHTML += `
 
      <li class="item">
      <a href="${element.dest_url}" class="item-link" target="_blank">
          <div class="item-image">
              <img src="${element.img}" alt="${element.title}">
          </div>
          <div class="item-info">
              <h3 class="item-title">${element.title}</h3>
              <span class="search-price">${element.price}</span>
              <span class="search-price">${element.cur}</span>
          </div>
      </a>
   </li>
   `;
    });
  });

}
API();

