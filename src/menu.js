export const menu = menuPage();

function menuPage () {
    // create element for menu header
    const header = document.createElement("h2");
    header.textContent = "Menu";

    // create elements for menu items
    const item1 = document.createElement("div");
    const item1Label = document.createElement("h3");
    item1Label.textContent = "Thor's Breakfast";
    const item1Description = document.createElement("p");
    item1Description.textContent = "A traditional Valhallan dish consisting of Bangers and Mashed Potatoes served with onion gravy";
    const item1Price = document.createElement("p");
    item1Price.textContent = "$12.95";
    item1.append(item1Label, item1Description, item1Price);

    const item2 = document.createElement("div");
    const item2Label = document.createElement("h3");
    item2Label.textContent = "Valkyrie's Wings";
    const item2Description = document.createElement("p");
    item2Description.textContent = "A large, flavorful cut of white meat with a richer, more gamey taste than turkey breast and more meat than chicken wings";
    const item2Price = document.createElement("p");
    item2Price.textContent = "$19.95";
    item2.append(item2Label, item2Description, item2Price);

    const item3 = document.createElement("div");
    const item3Label = document.createElement("h3");
    item3Label.textContent = "Frost Giant Cheesecake";
    const item3Description = document.createElement("p");
    item3Description.textContent = "a dessert featuring a rich, creamy filling of cheese, eggs, and sugar atop a crust made of graham crackers";
    const item3Price = document.createElement("p");
    item3Price.textContent = "$9.95";
    item3.append(item3Label, item3Description, item3Price);
    
    return [header, item1, item2, item3];
};