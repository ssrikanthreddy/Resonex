import librosa
import numpy as np
from helpers import extract_features
from sklearn.preprocessing import StandardScaler, OneHotEncoder
import joblib
import tensorflow as tf
from keras.models import load_model
from pydub import AudioSegment
import json


# Load the audio file
audio = AudioSegment.from_file("uploads/audio.wav")

# Set the desired format, encoding, channels, and sample rate
desired_format = "s16"
desired_encoding = "pcm_s16le"
desired_channels = 1
desired_sample_rate = 48000

# Apply the desired settings
audio = audio.set_frame_rate(desired_sample_rate).set_channels(desired_channels)
audio.export("uploads/audio.wav")

#print("Audio processing complete.")


model = load_model('./models/voice_model.h5')
encoder = joblib.load("./models/encoder.pkl")
scaler = joblib.load('./models/scaler.pkl')

path_ = './uploads/audio.wav'
data_, sample_rate_ = librosa.load(path_)
X_ = np.array(extract_features(data_))
X_ = scaler.transform(X_.reshape(1,-1))
pred_test_ = model.predict(np.expand_dims(X_, axis=2),  verbose=0)
y_pred_ = encoder.inverse_transform(pred_test_)
#print(y_pred_[0][0]) #emotion prediction

output_dict = {}
for value, emotion in zip(pred_test_[0], encoder.categories_[0]):
    output_dict[emotion] = f"{value:.10f}"


array = json.dumps(list(output_dict.values()))
print(array)