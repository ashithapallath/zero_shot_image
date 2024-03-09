from IPython.display import Image, display
from autogluon.multimodal import download
import torchaudio

url = "https://live.staticflickr.com/65535/49299665628_853f0bd470_w.jpg"
anomaly_image = download(url)

pil_img = Image(filename=anomaly_image)
display(pil_img)