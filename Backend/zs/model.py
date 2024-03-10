

import cv2
import os
from autogluon.multimodal import MultiModalPredictor
from IPython.display import Image, display
# models.py
from django.db import models

class ViolenceDetectionResult(models.Model):
    frame_url = models.CharField(max_length=255)
    violence_probability = models.FloatField()


def detect_violence_in_frames(video_path):
    vidObj = cv2.VideoCapture(video_path)
    count = 0
    frame_interval = 1
    fps = int(vidObj.get(cv2.CAP_PROP_FPS))
    frame_time = 1 / fps

    frame_urls = []

    while True:
        success, image = vidObj.read()

        if not success:
            break

        current_time = vidObj.get(cv2.CAP_PROP_POS_MSEC) / 1000.0

        if current_time >= count * frame_interval:
            frame_name = os.path.join('frames', "frame%d.jpg" % count)
            cv2.imwrite(frame_name, image)
            frame_urls.append(frame_name)
            count += 1

    vidObj.release()

    predictor = MultiModalPredictor(problem_type="zero_shot_image_classification")

    class_labels = ['Violence', 'Normal']
    results = []

    for frame_url in frame_urls:
        pil_img = Image(filename=frame_url)
        display(pil_img)

        prob = predictor.predict_proba({"image": [frame_url]}, {"text": class_labels})
        print(f"Frame probabilities for {frame_url}:", prob)

        violence_prob = prob[0][0]

        if violence_prob > 0.5:
            results.append({"frame_url": frame_url, "violence_probability": violence_prob})

    return results
