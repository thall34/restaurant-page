export const contact = contactPage()

function contactPage () {
    // create element for contact header
    const header = document.createElement("h2");
    header.textContent = "Contact";

    // create elements for personal contact info
    const manager = document.createElement("div");
    const managerName = document.createElement("h3");
    managerName.textContent = "Frigga";
    const managerPhone = document.createElement("p");
    managerPhone.textContent = "Phone: +47 92838749";
    const managerEmail = document.createElement("p");
    managerEmail.textContent = "frig@whitehallrestaurant.no"
    manager.append(managerName, managerPhone, managerEmail)

    const chef = document.createElement("div");
    const chefName = document.createElement("h3");
    chefName.textContent = "Andhrímnir";
    const chefPhone = document.createElement("p");
    chefPhone.textContent = "Phone: +47 48303033";
    const chefEmail = document.createElement("p");
    chefEmail.textContent = "andh@whitehallrestaurant.no"
    chef.append(chefName, chefPhone, chefEmail)

    const waiter = document.createElement("div");
    const waiterName = document.createElement("h3");
    waiterName.textContent = "Loki";
    const waiterPhone = document.createElement("p");
    waiterPhone.textContent = "Phone: +47 44016073";
    const waiterEmail = document.createElement("p");
    waiterEmail.textContent = "loki@whitehallrestaurant.no"
    waiter.append(waiterName, waiterPhone, waiterEmail)

    return [header, manager, chef, waiter]
}