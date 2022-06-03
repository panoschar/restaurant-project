function restaurantPage() {
    let titleDiv = $("<div></div>");
    let container = $("<div class='container'></div>");

    let header = document.createElement("h1");
    header.textContent = "Aquarium Restaurant";
    titleDiv.className = "title-div";
    container.append(header);
    //titleDiv.append(titleDiv);

    let tabs = $("<div></div>");
    tabs.className = "tabs";

  

    let tabButton1 = $("<div class='button1'></div>");
    let tabButton2 = $("<div class='button2'></div>");
    let tabButton3= $("<div class='button3'></div>");

    let homeButton = $("<button class='tab-button'>Home</button>");
    homeButton.click(() =>changeTab ("#home"));
    tabButton1.append(homeButton);

    let menuButton = $("<button class='tab-button'>Menu</button>");
    menuButton.click(() => changeTab("#menu"));
    tabButton2.append(menuButton);

    let contactButton = $("<button class='tab-button'>Contact us</button>");
    contactButton.click(() => changeTab("#contact"));
    tabButton3.append(contactButton);

    tabs.append(tabButton1);
    tabs.append(tabButton2);
    tabs.append(tabButton3);
    container.append(tabs);

    tabs.append(home());
    tabs.append(menu());
    tabs.append(contact());

    let element = $("<div></div>");
    element.append(container);
    return element;
};

function home() {
    let homeContent = $("<div id='home' class='tab-div show'></div>");

    let text = $("<p>This “underwater dining adventure” is right in the heart of Nashville. Located within the Opry Mills Mall, the Aquarium Restaurant offers expansive underwater views of its 200,000-gallon aquarium. The menu includes mahi mahi, shrimp,and macadamia–crusted tilapia, paired with views of an aquarium that houses more than 100 species of fish from around the world.</p>");

    homeContent.append(text);
    return homeContent;
};

function menu() {
    let menuContent = $("<div id='menu' class='tab-div'></div>");

    let contents = $("<tb class='menu'></tb>");
    contents.html("<tr><th>Menu</th><th>Price</th></tr> <tr><td>Omellete</td> <td>13</td></tr><tr> <td>Steak</td><td>22</td></tr> <tr><td>Greek salad</td><td>10</td></tr> <tr><td>vegetables</td><td>8</td></tr> <tr><td>Deserts</td><td>8</td></tr> <tr><td>dips</td><td>5</td></tr>"
    );
    menuContent.append(contents);
    return menuContent;
};

function contact() {
    let contactContent = $("<div id='contact' class='tab-div'></div>");

    let number = $("<h4>210 2020 120</h4>");

    contactContent.append(number);
    return contactContent;
};

function changeTab (id) {
    console.log(id);
    $(".tab-div").toggleClass("show");
};

$("#content").append(restaurantPage());