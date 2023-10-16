const analyzeSentiment = (sentence) => {
    sentence = sentence.toLowerCase().replace(/[^a-zA-Z ]/g, '');

    const positiveKeywords = ['positive', 'well-being', 'joys', 'vibrant', 'joyful', 'good', 'great', 'excellent', 'wonderful', 'awesome'];
    const negativeKeywords = ['challenges', 'negative', '', 'bad', 'terrible', 'horrible', 'awful', 'poor'];
    const neutralKeywords = ['unbiased', 'neutral', 'indifferent', 'average', 'ordinary'];


    const words = sentence.split(' ');

    let positiveScore = 0;
    let negativeScore = 0;
    let neutralScore = 0;

    words.forEach(word => {
        if (positiveKeywords.includes(word)) {
            positiveScore++;
        } else if (negativeKeywords.includes(word)) {
            negativeScore++;
        } else if (neutralKeywords.includes(word)) {
            neutralScore++;
        }
    });

    if (positiveScore > negativeScore && positiveScore > neutralScore) {
        return 'positive';
    } else if (negativeScore > positiveScore && negativeScore > neutralScore) {
        return 'negative';
    } else {
        return 'neutral';
    }
}

module.exports = { analyzeSentiment };