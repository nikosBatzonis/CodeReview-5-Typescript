//@ts-check

let locat: any = [];

class Locations {
  name: string;
  zipCode: number;
  image: string;
  address: string;
  city: string;
  create: Date;
  constructor(
    address: string,
    name: string,
    zipCode: number,
    image: string,
    city: string,
    create: Date
  ) {
    this.address = address;
    this.name = name;
    this.zipCode = zipCode;
    this.image = image;
    this.city = city;
    this.create = create;

    locat.push(this);
  }
  display() {
    return `
    <div class="col col-12 col-md-6 col-lg-3 d-flex justify-content-around" >
        <div class="card" style="margin-top:10%">
            <div class="card-body" ">
            <p class="card-text" style="font-size:20px"> ${this.name}
            </p>
            <p class="card-text">
            <strong>Address:</strong> ${this.address}, ${this.city}
            </p>
                <p class="card-title"><strong>ZIP:</strong> ${this.zipCode}
                </p>  

                <img src="${this.image}" class="card-img-top" alt="${
      this.name
    }" />
                </div>
                <p class="card-title"> ${transformDate(this.create)}
                </p>  
                    </div>
                </div>
                
    `;
  }
}

class Restaurant extends Locations {
  telephoneNum: string;
  cuzine: string;
  link: string;

  constructor(
    address: string,
    name: string,
    zipCode: number,
    image: string,
    city: string,
    create: Date,
    telephoneNum: string,
    cuzine: string,
    link: string
  ) {
    super(address, name, zipCode, image, city, create);
    this.telephoneNum = telephoneNum;
    this.cuzine = cuzine;
    this.link = link;
  }

  display() {
    return `<div class="col col-12 col-md-6 col-lg-3 d-flex justify-content-around" >
    <div class="card" style="margin-top:10%">
        <div class="card-body">
        <p class="card-text" style="font-size:20px"> ${this.name}
        </p>
        <p class="card-text">
        <strong>Address:</strong> ${this.address}, ${this.city}
        </p>
            <p class="card-title"><strong>ZIP:</strong> ${this.zipCode}
            </p><strong>tel:</strong> ${this.telephoneNum}
            </p>
            <p class="card-text">${this.cuzine}</p>
            <a href="${this.link}" class="link-primary">${this.link}</a>
            <img src="${this.image}" class="card-img-top" alt="${this.name}" />
            <p class="card-title"> ${transformDate(this.create)}</p>
            </div>
            </div>
        </div>
     `;
  }
}

class Events extends Locations {
  link: string;
  eventDate: string;
  eventTime: string;
  ticketPrice: number;

  constructor(
    address: string,
    name: string,
    zipCode: number,
    image: string,
    city: string,
    create: Date,
    link: string,
    eventDate: string,
    eventTime: string,
    ticketPrice: number
  ) {
    super(address, name, zipCode, image, city, create);
    this.link = link;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.ticketPrice = ticketPrice;
  }

  display() {
    return `
    <div class="col col-12 col-md-6 col-lg-3 d-flex justify-content-around" >
    <div class="card" style="margin-top:10%">
    <div class="card-body" >
    <p class="card-text" style="font-size:20px"> ${this.name}
    </p>
    <p class="card-text">
    <strong>Address:</strong> ${this.address}, ${this.city}
    </p>
        <p class="card-title"><strong>ZIP:</strong> ${this.zipCode}
        </p><strong>Event Date:</strong> ${this.eventDate}, ${this.eventTime} 
        </p>
        <p class="card-text"> <strong>Ticket Price:</strong> ${
          this.ticketPrice
        }€</p>
        <a href="${this.link}" class="link-primary">"${this.link}</a>
        <img src="${this.image}" class="card-img-top" alt="${this.name}" />
        <p class="card-title"> ${transformDate(this.create)}</p>
        </div>
            </div>
        </div>
  `;
  }
}

var location1 = new Locations(
  "Budapest center",
  "Budapest",
  210256,
  "../Images/budapest.jfif",
  "Budapest",
  new Date(2014, 10, 15, 20, 12)
);
var location2 = new Locations(
  "Copenhagen 28 B",
  "Copenhagen",
  12257,
  "../Images/copenhagen.jfif",
  "Copenhagen",
  new Date(2014, 10, 16, 20, 12)
);
var location3 = new Locations(
  "Japanen japan 54",
  "Japan",
  1254263,
  "../Images/japan.jfif",
  "Japan",
  new Date(2014, 10, 16, 20, 13)
);
var location4 = new Locations(
  "La paris 54",
  "Paris",
  745520,
  "../Images/paris.jfif",
  "Paris",
  new Date()
);

var restaurant1 = new Restaurant(
  "Platys Gialos",
  "Branco",
  7154211,
  "../Images/branco.jpg",
  "Myconos",
  new Date(2020, 10, 15, 20, 12),
  "0030 / 2289025500",
  "Greeck cuzine",
  "https://www.splendidmykonos.com/item/restaurant-branco/"
);
var restaurant2 = new Restaurant(
  "Korica 56",
  "Tsinkua",
  92055,
  "../Images/cop-res.jfif",
  "Korea",
  new Date(2018, 8, 15, 15, 12),
  "0030 / 2289025500",
  "Thailand cuzine",
  "https://www.splendidmykonos.com/item/restaurant-branco/"
);
var restaurant3 = new Restaurant(
  "Anastasiou 54",
  "Koska",
  83164,
  "../Images/ja-res.jfif",
  "Kos",
  new Date(2019, 8, 15, 20, 12),
  "0030 / 2255146554",
  "Greeck cuzine",
  "https://www.splendidmykonos.com/item/restaurant-branco/"
);
var restaurant4 = new Restaurant(
  "Goldenstreat 156 A",
  "Gold Plate",
  943568,
  "../Images/par-res.jfif",
  "London",
  new Date(2021, 6, 15, 20, 12),
  "00875 / 8459025500",
  "France cuzine",
  "https://www.splendidmykonos.com/item/restaurant-branco/"
);

var events1 = new Events(
  "Stadiun LA",
  "Michael Joe",
  8520,
  "../Images/accustic.jfif",
  "Los Angeles",
  new Date(2018, 1, 21, 10, 12),
  "https://www.splendidmykonos.com/item/restaurant-branco/",
  "Mo., 22.08.2018",
  "23:00",
  30
);
var events2 = new Events(
  "Vienna Stadium",
  "Rap Concert",
  9653,
  "../Images/concert.jfif",
  "Vienna",
  new Date(2016, 12, 31, 5, 10),
  "https://www.splendidmykonos.com/item/restaurant-branco/",
  "FR., 14.10.2020",
  "21:00",
  50
);
var events3 = new Events(
  "Barcelona Stadium",
  "Barcelona",
  73165,
  "../Images/ball.jfif",
  "Barcelona",
  new Date(2000, 10, 10, 10, 10),
  "https://www.splendidmykonos.com/item/restaurant-branco/",
  "Thu., 07.12.2020",
  "15:00",
  80
);
var events4 = new Events(
  "Myconos Streat",
  "DJ Tiesto",
  123568,
  "../Images/tiesto.jfif",
  "Myconos",
  new Date(2020, 1, 12, 7, 12),
  "https://www.splendidmykonos.com/item/restaurant-branco/",
  "Sa., 09.09.2019",
  "22:30",
  50
);

for (let val of locat) {
  document.getElementById("loc").innerHTML += val.display();
}

let btn = true;

document.getElementById("sort").addEventListener("click", function () {
  if (btn) {
    locat.sort(function (a, b) {
      console.log(b.create - a.create);
      return b.create - a.create;
    });
  } else {
    locat.sort(function (a, b) {
      return a.create - b.create;
    });
  }
  btn = !btn;

  let sortingLoc = "";

  for (let val of locat) {
    sortingLoc += val.display();
    console.log(val.display());
  }

  document.getElementById("loc").innerHTML = sortingLoc;
});

function transformDate(date) {
  var d = new Date(date);
  var datestring =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();
  return datestring;
}
