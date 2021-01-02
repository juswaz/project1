let quotes = ['Only the paranoid survive', 'If people are doubting how far you can go, go so far that you can’t hear them anymore', 'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth', 'Do one thing every day that scares you', 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers', 'Do what you feel in your heart to be right – for you’ll be criticized anyway', 'Whatever you are, be a good one', 'The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances', 'You can either experience the pain of discipline or the pain of regret. The choice is yours', 'Magic is believing in yourself. If you can make that happen, you can make anything happen', 'If something is important enough, even if the odds are stacked against you, you should still do it', 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on', 'Some people want it to happen, some wish it would happen, others make it happen', 'Very often, a change of self is needed more than a change of scene'];

let finalMessage = ['Maybe You will listen to that one!', 'That is a good one huh?', 'Hard to dissagree with that one right?', 'How about you come up with your own quote for tomorrow?', 'That guy was smart!', 'Have a good day!'];

function randomQuote (){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomMessage = Math.floor(Math.random()* finalMessage.length)
    return `Your quote for today is: "` + quotes[randomNumber] + '".' + ' ' + finalMessage[randomMessage];
}
