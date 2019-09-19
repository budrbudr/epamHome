const arr1 = ['Городничий', 'Аммос Федорович', 'Артемий Филиппович', 'Лука Лукич'];
const text = ["Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.",
    "Аммос Федорович: Как ревизор?",
    "Артемий Филиппович: Как ревизор?",
    "Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.",
    "Аммос Федорович: Вот те на!",
    "Артемий Филиппович: Вот не было заботы, так подай!",
    "Лука Лукич: Господи боже! еще и с секретным предписаньем!"];
const textArray = [];
for (let i = 0; i < text.length; i++) {
    let phrase = text[i].split(':', 2);
    phrase[1] = i + 1 + " )" + phrase[1];
    textArray.push(phrase);
}
$('#select').on('change', function () {
    $('#roles').empty();
    let role = parseInt($('#select option:selected').val()) - 1;
    $('#roles').append('<p>' + arr1[role] + '</p>');
    for (let i = 0; i < textArray.length; i++) {
        if (arr1[role] === textArray[i][0]) {
            $('#roles').append('<p>' + textArray[i][1] + '</p>');
        }
    }
});



