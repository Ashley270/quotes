var quote = [
'Your imagination is your preview of life\'s coming attractions.', 
'Controlling complexity is the essence of computer programming.',
'The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.',
'What you do speaks so loudly that I cannot hear what you say.',
'What you do speaks so loudly that I cannot hear what you say.',
'I am not young enough to know everything.Oscar Wilde',
'Real knowledge is to know the extent of one\'s ignorance.',
'You are never too old to set another goal, or to dream a new dream.',
'Even if you\'re on the right track, you\'ll get run over if you just sit there.',
'The work of today is the history of tomorrow, and we are its makers.',
'I have no special talents. I am only passionately curious.',
'You can, you should, and if you\'re brave enough to start, you will.',
'Ever Tried. Ever failed. No matter. Try again. Fail again. Fail better.',
'It always seems impossible until it\'s done.',
'We first make our habits, then our habits make us.',
'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
'You must do the things you think you cannot do.',
'A person who never made a mistake never tried anything new.',
'Never memorize something that you can look up.',
'Someday is not a day of the week.',
'The more you know, the more you realize you know nothing.', 
'Failure will never overtake me if my determination to succeed is strong enough.',


];
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('quoteDisplay').innerHTML = quote[randomNumber];
}
