const menciusQuotes = [
    'Friendship is one mind in two bodies.',
    'Sincerity is the way of Heaven.',
    'If the king loves music, there is little wrong in the land.',
    'With melted snow I boil fragrant tea.',
    'The way of truth is like a great road. It is not difficult to know it. The evil is only that men will not seek it.',
    'We live, not as we wish to, but as we can.',
    'Kindly words do not enter so deeply into men as a reputation for kindness.',
    'Only when a man will not do some things is he capable of doing great things.',
]
const twainQuotes = [
    'The secret of getting ahead is getting started.',
    'If you tell the truth, you don\'t have to remember anything.',
    'Kindness is the language which the deaf can hear and the blind can see.',
    'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    'I can live for two months on a good compliment.',
    'I have never let my schooling interfere with my education.',
    'Do the right thing. It will flatter some people and astonish the rest.'
]
const einsteinQuotes = [
    'Why is it that nobody understands me, and everybody likes me?',
    'I have no special talents. I am only passionately curious.',
    'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    'Imagination is more important than knowledge.',
    'Only a life lived for others is a life worthwhile.',
    'I lived in solitude in the country and noticed how the monotony of a quiet life stimulates the creative mind.',
    'I never think of the future. It comes soon enough.'
]

module.exports = {
    mencius: () => {
        return menciusQuotes[Math.floor(Math.random() * menciusQuotes.length)]
    },
    twain: () => {
        return twainQuotes[Math.floor(Math.random() * twainQuotes.length)]
    },
    einstein: () => {
        return einsteinQuotes[Math.floor(Math.random() * einsteinQuotes.length)]
    },
  };