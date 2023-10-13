$(() => {
    $(document).on("ajaxError", (event, jqxhr) => {
        alert("Er is een fout opgetreden:" + " " + jqxhr.status + " " + jqxhr.statusText);
    });
    function overzicht() {
        $("#rechts").load("artikelen.html article:nth-of-type(-n+3)", () => {
            $("br").hide();
        });
    };
    overzicht();
    function beheer() {
        $("#rechts").load("blogbeheer.html #rechts", () => {
            $("form").unwrap();
        });
    }
    $(".zwart").on("click", () => {
        beheer();
    });
    $(document).on("click", "article", (event) => {
        $(event.currentTarget).clone().appendTo("#dialog");
        $("#dialog br").show(); //voor duidelijkere opmaak
        $("#dialog p:not(.sub)").append("<br><br>" + $("#dialog .sub").text());
        $("#dialog p:not(.sub)").css("font-size", "larger").dialog({
            title: $("#dialog h2").text(),
            modal: true,
            width: "auto",
            height: "auto",
            show: "fadeIn",
            resizable: "false", //werkt niet fijn i.c.m. clickoutside plugin
            clickOutside: true,
            clickOutsideTrigger: "#dialog"
        });
        $("#dialog").empty();
    });
    $(document).on("click", "button", () => {
        overzicht();
    });
});