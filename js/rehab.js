

$(document).ready(function () {


    var myDataRef = new Firebase('https://glowing-inferno-1472.firebaseio.com/');

//    myDataRef.child("rehab").on("value", function (snapshot) {
    myDataRef.child("rehab-test").on("value", function (snapshot) {
//        console.log(snapshot.val());
        var datum = "2015-04-06";
        var i = 0;
        var totaler = [];
        $('#tabell-logg tbody').children().remove();
        $.each(snapshot.val(), function (key, val) {
//            $('#lista').append(val.antal);
            switch (val.typ) {
                case "Uppåtgående hund m höjning":
//                    console.log("hudn");
//                   totaler[0]["antal"]++;
//                   totaler[0]["reps"]+=val.antal;
                    break;
                default:
                    break;
            }
            i++;
            var output = '<tr><th>' + i + '</th><td>' + val.tid + '</td><td>' + val.typ + '</td><td>' + val.antal + '</td></tr>';
            $('#tabell-logg tbody').prepend(output);


            //ny dag
//            if(val.tid.substr(8,2) > datum.substr(8,2)) {
//                datum = val.tid.substr(0,10);
//                console.log(datum);
//                
//            }
//            console.log(val.tid.substr(8,2));
            //if()
        });

    });


    $('#loggaTid').click(function (e) {
//        console.log("skickat...");
        var typ = $('.typ:checked').val();
        var antal = $('#antal').val();
        var tid = moment().format("YYYY-MM-DD HH:mm:ss");
//        console.log(tid);
//      myDataRef.child("rehab").push({typ: typ, antal: antal, tid: tid}, function (error) {
        myDataRef.child("rehab-test").push({typ: typ, antal: antal, tid: tid}, function (error) {
            if (error) {
//                alert("Något gick fel. Säg till Johan." + error);
            } else {
                $("#popupAdded").popup("open")
            }
        });
    });

});