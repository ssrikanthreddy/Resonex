import librosa
import numpy as np
from helpers import extract_features
from sklearn.preprocessing import StandardScaler, OneHotEncoder
import joblib
import tensorflow as tf
from keras.models import load_model


model = load_model('./models/voice_model.h5')
encoder = joblib.load("./models/encoder.pkl")
scaler = joblib.load('./models/scaler.pkl')

path_ = 'example.wav'
data_, sample_rate_ = librosa.load(path_)
X_ = np.array(extract_features(data_))
X_ = scaler.transform(X_.reshape(1,-1))
pred_test_ = model.predict(np.expand_dims(X_, axis=2))
y_pred_ = encoder.inverse_transform(pred_test_)
print(y_pred_[0][0]) #emotion prediction

for value, emotion in zip(pred_test_[0], encoder.categories_[0]):
    print(emotion, f"{value:.10f}") #predicting values for each emotion

