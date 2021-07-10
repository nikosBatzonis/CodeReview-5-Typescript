//@ts-check
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locat = [];
var Locations = /** @class */ (function () {
    function Locations(address, name, zipCode, image, city, create) {
        this.address = address;
        this.name = name;
        this.zipCode = zipCode;
        this.image = image;
        this.city = city;
        this.create = create;
        locat.push(this);
    }
    Locations.prototype.display = function () {
        return " <div class=\"col col-12 col-md-6 col-lg-3 d-flex justify-content-around\" >\n        <div class=\"card\" style=\"margin-top:10%\">\n            <div class=\"card-body\" \">\n              <p class=\"card-text\" style=\"font-size:25px; color:rgb(98, 98, 98); font-weight:bold\"> " + this.name + "</p>\n              <p class=\"card-text\"><strong>Address:</strong> " + this.address + ", " + this.city + "</p>\n              <p class=\"card-title\"><strong>ZIP:</strong> " + this.zipCode + "</p>  \n              <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\" />\n            </div>\n                <p class=\"card-title\" style=\"padding-left: 20px\"><strong>Day of Visit:</strong> " + transformDate(this.create) + "</p>  \n        </div>\n      </div>\n      </div>            \n    ";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(address, name, zipCode, image, city, create, telephoneNum, cuzine, link) {
        var _this = _super.call(this, address, name, zipCode, image, city, create) || this;
        _this.telephoneNum = telephoneNum;
        _this.cuzine = cuzine;
        _this.link = link;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "   <div class=\"col col-12 col-md-6 col-lg-3 d-flex justify-content-around\" >\n    <div class=\"card\" style=\"margin-top:10%\">\n        <div class=\"card-body\">\n        <p class=\"card-text\" style=\"font-size:25px; color:rgb(98, 98, 98); font-weight:bold\"> " + this.name + "\n        </p>\n        <p class=\"card-text\">\n        <strong>Address:</strong> " + this.address + ", " + this.city + "\n        </p>\n            <p class=\"card-title\"><strong>ZIP:</strong> " + this.zipCode + "\n            </p><strong>tel:</strong> " + this.telephoneNum + "\n            </p>\n            <p class=\"card-text\">" + this.cuzine + "</p>\n            <a href=\"" + this.link + "\" class=\"link-primary\">" + this.link + "</a>\n            <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\" />\n            </div>\n                <p class=\"card-title\" style=\"padding-left: 20px\"><strong>Day of Visit:</strong> " + transformDate(this.create) + "</p>  \n        </div>\n            </div>\n            </div>\n        </div>     \n     ";
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(address, name, zipCode, image, city, create, link, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, address, name, zipCode, image, city, create) || this;
        _this.link = link;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
        return "  <div class=\"col col-12 col-md-6 col-lg-3 d-flex justify-content-around\" >\n    <div class=\"card\" style=\"margin-top:10%\">\n    <div class=\"card-body\" >\n    <p class=\"card-text\" style=\"font-size:25px; color:rgb(98, 98, 98); font-weight:bold\"> " + this.name + "\n    </p>\n    <p class=\"card-text\">\n    <strong>Address:</strong> " + this.address + ", " + this.city + "\n    </p>\n        <p class=\"card-title\"><strong>ZIP:</strong> " + this.zipCode + "\n        </p><strong>Event Date:</strong> " + this.eventDate + ", " + this.eventTime + " \n        </p>\n        <p class=\"card-text\"> <strong>Ticket Price:</strong> " + this.ticketPrice + "\u20AC</p>\n        <a href=\"" + this.link + "\" class=\"link-primary\">\"" + this.link + "</a>\n        <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\" />\n        </div>\n                <p class=\"card-title\" style=\"padding-left: 20px\"><strong>Day of Visit:</strong> " + transformDate(this.create) + "</p>  \n        </div>\n        </div>\n            </div>\n        </div>\n       \n  ";
    };
    return Events;
}(Locations));
var location1 = new Locations("Budapest center", "Budapest", 210256, "../Images/budapest.jfif", "Budapest", new Date(2014, 10, 15, 20, 12));
var location2 = new Locations("Copenhagen 28 B", "Copenhagen", 12257, "../Images/copenhagen.jfif", "Copenhagen", new Date(2014, 10, 16, 20, 12));
var location3 = new Locations("Japanen japan 54", "Japan", 1254263, "../Images/japan.jfif", "Japan", new Date(2014, 10, 16, 20, 13));
var location4 = new Locations("La paris 54", "Paris", 745520, "../Images/paris.jfif", "Paris", new Date());
var restaurant1 = new Restaurant("Platys Gialos", "Branco", 7154211, "../Images/branco.jpg", "Myconos", new Date(2020, 10, 15, 20, 12), "0030 / 2289025500", "Greeck cuzine", "https://www.splendidmykonos.com/item/restaurant-branco/");
var restaurant2 = new Restaurant("Korica 56", "Tsinkua", 92055, "../Images/cop-res.jfif", "Korea", new Date(2018, 8, 15, 15, 12), "0030 / 2289025500", "Thailand cuzine", "https://www.splendidmykonos.com/item/restaurant-branco/");
var restaurant3 = new Restaurant("Anastasiou 54", "Koska", 83164, "../Images/ja-res.jfif", "Kos", new Date(2019, 8, 15, 20, 12), "0030 / 2255146554", "Greeck cuzine", "https://www.splendidmykonos.com/item/restaurant-branco/");
var restaurant4 = new Restaurant("Goldenstreat 156 A", "Gold Plate", 943568, "../Images/par-res.jfif", "London", new Date(2021, 6, 15, 20, 12), "00875 / 8459025500", "France cuzine", "https://www.splendidmykonos.com/item/restaurant-branco/");
var events1 = new Events("Stadiun LA", "Michael Joe", 8520, "../Images/accustic.jfif", "Los Angeles", new Date(2018, 1, 21, 10, 12), "https://www.splendidmykonos.com/item/restaurant-branco/", "Mo., 22.08.2018", "23:00", 30);
var events2 = new Events("Vienna Stadium", "Rap Concert", 9653, "../Images/concert.jfif", "Vienna", new Date(2016, 12, 31, 5, 10), "https://www.splendidmykonos.com/item/restaurant-branco/", "FR., 14.10.2020", "21:00", 50);
var events3 = new Events("Barcelona Stadium", "Barcelona", 73165, "../Images/ball.jfif", "Barcelona", new Date(2000, 10, 10, 10, 10), "https://www.splendidmykonos.com/item/restaurant-branco/", "Thu., 07.12.2020", "15:00", 80);
var events4 = new Events("Myconos Streat", "DJ Tiesto", 123568, "../Images/tiesto.jfif", "Myconos", new Date(2020, 1, 12, 7, 12), "https://www.splendidmykonos.com/item/restaurant-branco/", "Sa., 09.09.2019", "22:30", 50);
for (var _i = 0, locat_1 = locat; _i < locat_1.length; _i++) {
    var val = locat_1[_i];
    document.getElementById("loc").innerHTML += val.display();
}
// Sort the Date  ascending and descending with the sort button
var btn = true;
document.getElementById("sort").addEventListener("click", function () {
    if (btn) {
        locat.sort(function (a, b) {
            console.log(b.create - a.create);
            return b.create - a.create;
        });
    }
    else {
        locat.sort(function (a, b) {
            return a.create - b.create;
        });
    }
    btn = !btn;
    var sortingLoc = "";
    for (var _i = 0, locat_2 = locat; _i < locat_2.length; _i++) {
        var val = locat_2[_i];
        sortingLoc += val.display();
        console.log(val.display());
    }
    document.getElementById("loc").innerHTML = sortingLoc;
});
// Transform the Dates
function transformDate(date) {
    var d = new Date(date);
    var datestring = d.getDate() +
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
