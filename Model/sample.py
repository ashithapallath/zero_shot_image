from IPython.display import Image, display
from autogluon.multimodal import download
import torchaudio
from autogluon.multimodal import MultiModalPredictor

url = "https://live.staticflickr.com/65535/49299665628_853f0bd470_w.jpg"
anomaly_image = download(url)

pil_img = Image(filename=anomaly_image)
display(pil_img)
predictor = MultiModalPredictor(problem_type="zero_shot_image_classification")
prob = predictor.predict_proba({"image": [anomaly_image]}, {"text": ['Normal behavior',
    'Suspicious activity',
    'Unauthorized entry',
    'Violent behavior']})
print("Label probs:", prob)
