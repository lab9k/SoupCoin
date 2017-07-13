$(document).ready(function () {
    let converter = new showdown.Converter(),
        text = $('.hidden').text(),
        html = converter.makeHtml(text);
    $('#markdown').html(html.toString());
});