/**
 * Created by Deepan on 8/13/2017.
 */
function getNumberWord(id, callback) {
    $.ajax({
        type: "GET",
        url: "http://numbersapi.com/" + id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callback
    });
}