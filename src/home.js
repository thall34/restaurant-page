export const home = homePage()

function homePage() {
    // creates quote div for restaurant
    const quote = document.createElement("div");

    const header = document.createElement("h2");
    header.textContent = "Our story..."

    // creates quote text for quote div
    const quoteText = document.createElement("p");
    quoteText.textContent = "Whitehall is a culinary experience built to rival even the mighty Valhalla. Dining tables stretch the length of the room adorned with the finest ales and choicest cuts of meat. If victory is what you crave for dinner, make your way to the hall!";

    const quoteAuthor = document.createElement("p");
    quoteAuthor.textContent = "- Odin";

    quote.append(quoteText, quoteAuthor);

    // creates hours div for restaurant
    const hours = document.createElement("div");

    // creates header for hours div
    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";

    // creates list items for the days of the week
    const list = document.createElement("ul");

    const listItem1 = document.createElement("li");
    listItem1.textContent = "Sunday: 8am-11pm";
    const listItem2 = document.createElement("li");
    listItem2.textContent = "Monday: 8am-11pm";
    const listItem3 = document.createElement("li");
    listItem3.textContent = "Tuesday: 8am-11pm";
    const listItem4 = document.createElement("li");
    listItem4.textContent = "Wednesday: Closed";
    const listItem5 = document.createElement("li");
    listItem5.textContent = "Thursday: Closed";
    const listItem6 = document.createElement("li");
    listItem6.textContent = "Friday: 8am-11pm";
    const listItem7 = document.createElement("li");
    listItem7.textContent = "Saturday: 8am-11pm";

    list.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7);

    hours.append(hoursHeader, list);

    // creates location div for restaurant
    const location = document.createElement("div");

    // creates header for location div
    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    
    const address = document.createElement("p");
    address.textContent = "9 Thorium Drive, Norway";

    location.append(locationHeader, address);

    return [header, quote, hours, location];
};