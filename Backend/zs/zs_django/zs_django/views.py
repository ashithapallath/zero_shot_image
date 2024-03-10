from django.shortcuts import render
from django.http import JsonResponse
from .models import ViolenceDetectionResult
from .utils import detect_violence_in_frames

def detect_violence(request):
    video_path = r'C:\Users\Lenovo\Downloads\t_w023_converted.avi'  # Use raw string to handle backslashes

    results = detect_violence_in_frames(video_path)

    # Save results to the database
    for result in results:
        ViolenceDetectionResult.objects.create(
            frame_url=result['frame_url'],
            violence_probability=result['violence_probability']
        )

    return JsonResponse({'message': 'Detection complete!'})
