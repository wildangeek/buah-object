let arrayOfFruits = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/200px-Table_grapes_on_white.jpg",
      nama: "Anggur",
      namaLatin: "Vitis",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/OrangeBloss_wb.jpg/250px-OrangeBloss_wb.jpg",
      nama: "Jeruk",
      namaLatin: "Citrus",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Muskmelon.jpg/220px-Muskmelon.jpg",
      nama: "Melon",
      namaLatin: "Cucumis melo",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Starr_050826-4195_Musa_sp..jpg/220px-Starr_050826-4195_Musa_sp..jpg",
      nama: "Pisang",
      namaLatin: "Musa",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Durio_Zibethinus_Van_Nooten.jpg/220px-Durio_Zibethinus_Van_Nooten.jpg",
      nama: "Durian",
      namaLatin: "Durio zibethinus",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Salak_%28Salacca_zalacca%29%2C_2015-05-17.jpg/220px-Salak_%28Salacca_zalacca%29%2C_2015-05-17.jpg",
      nama: "Salak",
      namaLatin: "Salacca zalacca",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rambutan_white_background_alt.jpg/220px-Rambutan_white_background_alt.jpg",
      nama: "Rambutan",
      namaLatin: "Nephelium lappaceum",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Annona_muricata_1.jpg/220px-Annona_muricata_1.jpg",
      nama: "Sirsak",
      namaLatin: "Annona muricata",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Passionfruit_and_cross_section.jpg/300px-Passionfruit_and_cross_section.jpg",
      nama: "Markisa",
      namaLatin: "Passiflora edulio",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jackfruit_hanging.JPG/220px-Jackfruit_hanging.JPG",
      nama: "Nangka",
      namaLatin: "Artocarpus heterophyllus",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pomegranate_Juice_%282019%29.jpg/220px-Pomegranate_Juice_%282019%29.jpg",
      nama: "Delima",
      namaLatin: "Punica granatum",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/PattsBlueberries.jpg/220px-PattsBlueberries.jpg",
      nama: "Blueberry",
      namaLatin: "Vaccinium corymbosum",
    },
  ];
  
  const container = document.querySelector(".container");
  const displayCards = () => {
    arrayOfFruits.forEach((element) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "width: 18rem;");
      card.innerHTML = `
          <img src="${element.image}" class="card-img-top" alt="${element.nama}" />
          <div class="card-body">
            <h5 class="card-title">${element.nama}</h5>
            <p class="card-text">
              Nama Latin: ${element.namaLatin}
            </p>
          </div>
      `;
      container.appendChild(card);
    });
  };
  displayCards();
  