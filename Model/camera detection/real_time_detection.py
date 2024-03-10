import cv2
import os
import time
from autogluon.multimodal import MultiModalPredictor
from IPython.display import Javascript
from google.colab.output import eval_js
from base64 import b64decode

def take_photo(filename='temp_photo.jpg', quality=0.8):
    js = Javascript('''
        async function takePhoto(quality) {
          const video = document.createElement('video');
          const stream = await navigator.mediaDevices.getUserMedia({video: true});

          document.body.appendChild(video);
          video.srcObject = stream;
          await video.play();

          await new Promise((resolve) => setTimeout(resolve, 1000));  // Adjust delay if needed

          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas.getContext('2d').drawImage(video, 0, 0);
          stream.getVideoTracks()[0].stop();
          document.body.removeChild(video);
          return canvas.toDataURL('image/jpeg', quality);
        }
        ''')
    display(js)
    data = eval_js('takePhoto({})'.format(quality))
    binary = b64decode(data.split(',')[1])
    with open(filename, 'wb') as f:
        f.write(binary)
    return filename

if __name__ == '__main__':
    video_path = "t_w023_converted.avi"
    class_labels = ['Violence', 'Normal']
    predictor = MultiModalPredictor(problem_type="zero_shot_image_classification")

    violence_timestamps = []

    try:
        while True:
            current_time = time.strftime("%Y-%m-%d %H:%M:%S", time.gmtime())
            filename = "temp_photo.jpg"  
            take_photo(filename)
            print(f'Image captured at {current_time}. Analyzing...')

            try:
                prob = predictor.predict_proba({"image": [filename]}, {"text": class_labels})
                violence_prob = prob[0][0]
            except Exception as e:
                print(f"Error during prediction: {e}")
                continue

            if violence_prob > 0.5:
                print(f"Violence detected at {current_time}!")
                violence_timestamps.append(current_time)
            else:
                print(f"No violence detected at {current_time}.")

            time.sleep(1)  

    except KeyboardInterrupt:
        if len(violence_timestamps) > 0:
            print("Violence detected at the following timestamps:")
            for timestamp in violence_timestamps:
                print(timestamp)
        else:
            print("No violence detected.")
