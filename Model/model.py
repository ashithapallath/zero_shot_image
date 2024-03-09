from autogluon.multimodal import download, MultiModalPredictor

frame_urls = [
    "1.jpg",
    "3.jpg",
    "4.jpg"
    # Add more frame URLs here...
]

# Initialize the MultiModalPredictor
predictor = MultiModalPredictor(problem_type="zero_shot_image_classification")

# Define class labels
class_labels = [
    'No crash',
    'Car crashed'
]

# Initialize counters for each class
class_counts = {label: 0 for label in class_labels}

# Process each frame
for frame_url in frame_urls:
    frame_image = download(frame_url)

    # Predict probabilities for the frame
    prob = predictor.predict_proba({"image": [frame_image]}, {"text": class_labels})

    # Determine the most likely class label
    max_prob_index = prob[0].argmax()
    predicted_class = class_labels[max_prob_index]

    # Update class counts
    class_counts[predicted_class] += 1

    print(f"Frame probabilities for {frame_url}:", prob)
    print(f"Predicted class label: {predicted_class}\n")

# Determine the majority class
majority_class = max(class_counts, key=class_counts.get)
print(f"Majority class based on frame predictions: {majority_class}")
