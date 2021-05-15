

function calc() {

    var kreditSum = document.getElementById('kredit-sum').value;
    var yearPersent = document.getElementById('year-percent').value;
    var year = document.getElementById('year').value;
    var startPersent = document.getElementById('start-percent').value;
    var period = document.getElementById('period').value;
    var month = document.getElementById('month').value;

    var startPayment = kreditSum * startPersent / 100;
    var givenPayment = kreditSum - startPayment;
    var monthlyPayment = givenPayment / (period * 12);

    document.getElementById('start-payment').innerHTML = startPayment + " so'm";
    document.getElementById('all-sum').innerHTML = givenPayment + " so'm";
    document.getElementById('month-payment').innerHTML = monthlyPayment + " so'm";
    var oylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "August", "Sentabr", "Oktabr", "November", "Dekabr"];
    var yillar = [2020, 2021, 2022, 2023, 2024];
    var content = " ";
    var allSum = startPayment;
    var months = "";
    var parYear = parseInt(year);

    for (var i = 0; i < period * 12; i++) {

        if (months == oylar[11]){
            parYear++;
        }

        var persent = (givenPayment * (yearPersent / 12) / 100);
        months = oylar[(i + parseInt(month)) % 12];
        var monthAll = monthlyPayment + persent;
        allSum += monthAll;

        content +=

            "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + parYear +"</td>" +
                "<td>" + months + "</td>" +
                "<td>" + givenPayment + "</td>" +
                "<td>" + monthlyPayment + "</td>" +
                "<td>" + persent + "</td>" +
                "<td>" + monthAll + "</td>" +
            "</tr>"

        givenPayment -= monthlyPayment;

    }

    document.getElementById("result").innerHTML = content;
    document.getElementById('all-payment').innerHTML = "Umumiy summa: " +allSum + " UZS";


}
