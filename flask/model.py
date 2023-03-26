import tensorflow as tf
import cv2
import numpy as np

img = cv2.imread('D:/Coding/WebDEV/PROJECTS/GDSC Hackathon/image.jpg')
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = cv2.resize(img, (224, 224))

def ABC(img):
    loaded_model = tf.keras.models.load_model('C:/Users/deana/Downloads/model.h5')
    prediction = loaded_model.predict(np.array([img]))
    class_index = np.argmax(prediction)
    return class_index
# Load the image

# Make a prediction using the model


print(class_index)

    
