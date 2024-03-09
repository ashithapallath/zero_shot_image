# -*- coding: utf-8 -*-
"""video_to_frame_conversion.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1eC_I4hGdq0xaljhQm6rDwQZYxqqRpvsO
"""

!pip install opencv-python

import cv2
import os

def capture_frames(video_path, output_folder='frames'):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    vidObj = cv2.VideoCapture(video_path)
    count = 0
    frame_interval = 1
    fps = int(vidObj.get(cv2.CAP_PROP_FPS))
    frame_time = 1 / fps

    while True:
        success, image = vidObj.read()

        if not success:
            break

        current_time = vidObj.get(cv2.CAP_PROP_POS_MSEC) / 1000.0

        if current_time >= count * frame_interval:
            frame_name = os.path.join(output_folder, "frame%d.jpg" % count)
            cv2.imwrite(frame_name, image)
            count += 1

    vidObj.release()

if __name__ == '__main__':
    video_path = "t_w023_converted.avi"
    output_folder = "frames"
    capture_frames(video_path, output_folder)