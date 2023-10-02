$(() => {
    $(document).on("ajaxError", (event, jqxhr) => {
        alert("Er is een fout opgetreden:" + " " + jqxhr.status + " " + jqxhr.statusText);
    });
    function overzicht() {
        $("#rechts").load("artikelen.html article:nth-of-type(-n+3)");
    };
    overzicht();
    $(".zwart").on("click", () => {
        $("#rechts").load("blogbeheer.html #rechts");
    });
    $(document).on("click", "article", (event) => {
        $("article").not(event.currentTarget).remove();
        $(event.currentTarget).css("font-size", "larger");
        $(event.currentTarget).on("click", () => {
            overzicht();
        });
    });
    $(document).on("click", "button", () => {
        overzicht();
    });
});