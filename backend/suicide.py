import pickle

from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
from sys import argv

VotingClassifiers = pickle.load(open('./models/best_model.pkl', 'rb'))
vectorizer = pickle.load(open('./models/tfidf.pkl', 'rb'))
stop_words = stopwords.words('english')
ps = PorterStemmer()


def main():
    new_list = [str(x)+' ' for x in argv[1:]]
    entry = ''.join(new_list)
    app(entry)



def preprocess(inp):
    inp = inp.lower()  # convert to lower case
    inp = inp.replace(r'[^\w\s]+', '')  # remove punctuations
    inp = [word for word in inp.split() if word not in (stop_words)
           ]  # tokenize the sentence
    inp = ' '.join([ps.stem(i) for i in inp])  # stremming
    inputToModel = vectorizer.transform(
        [inp]).toarray()  # transform to vector form
    return inputToModel


def app(input_text):
    # Define the input text box
    # print('Input : ',input_text) #take input from user
    processed_array = preprocess(input_text) #preprocess the text 
    predict = VotingClassifiers.predict(processed_array) #Model prediction
    probabilities = VotingClassifiers.predict_proba(processed_array) # Get probability estimates
    print(float(probabilities[0][1])*100.) # Predict Probabilities
    # print('Output : ', predict[0])


main()
