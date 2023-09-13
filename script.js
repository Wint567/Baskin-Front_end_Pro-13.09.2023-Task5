var birthYear = prompt("Введіть свій рік народження:");

if (birthYear !== null && birthYear !== "") {
    var city = prompt("Введіть місто, в якому ви живете:");

    if (city !== null && city !== "") {
        var sport = prompt("Введіть свій улюблений вид спорту:");

        if (sport !== null && sport !== "") {
            var message = "Ваш вік: " + (new Date().getFullYear() - birthYear) + " років\n";

            if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
                message += "Ти живеш у столиці " + getCountry(city) + ".";
            } else {
                message += "Ти живеш у місті " + city + ".";
            }

            var sportsChampions = {
                "футбол": "Ліонель Мессі",
                "баскетбол": "Леброн Джеймс",
                "теніс": "Рафаель Надаль"
            };

            if (sportsChampions[sport.toLowerCase()]) {
                message += "\nКруто! Хочеш стати " + sportsChampions[sport.toLowerCase()] + "?";
            } else {
                message += "\nМені теж подобається" + " " + sport;
            }

            alert(message);
        } else {
            alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту.");
        }
    } else {
        alert("Шкода, що ви не захотіли ввести своє місто.");
    }
} else {
    alert("Шкода, що ви не захотіли ввести свій рік народження.");
}

function getCountry(capital) {
    switch (capital) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "Сполучених Штатів Америки";
        case "Лондон":
            return "Великої Британії";
        default:
            return "цієї країни";
    }
}
