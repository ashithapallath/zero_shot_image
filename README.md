
# CHiLScope - Smart Surveillance System

![image](https://github.com/user-attachments/assets/99140387-45f5-49f1-9931-7709404dd18c)


**CHiLScope** is a smart surveillance system developed to enhance existing CCTV infrastructure by integrating AI-based emergency detection and activity classification. The system is designed to identify emergencies and unusual activities, including events that have not been seen during training, ensuring real-time situational awareness for security monitoring.

This project was developed as part of **Tink-Her-Hack 2.0** hackathon to showcase innovative applications of AI in surveillance and security.

## Features

- **Emergency Detection**: Identifies emergencies like fire, accidents, or suspicious behavior in real-time.
- **Unusual Activity Classification**: Classifies abnormal activities that deviate from normal patterns.
- **Generalization**: Capable of detecting activities the model has not seen during training, enhancing its adaptability.
- **Zero-Shot Image Classification**: Uses a zero-shot image classification model to classify new and unseen activities without retraining the system.
- **Integration with Existing CCTV Infrastructure**: Leverages existing CCTV cameras to provide intelligent monitoring without the need for additional hardware.

## Installation

To run the CHiLScope model, you need to install the following dependencies:

1. **Autogluon for Multimodal Models**:  
   To handle multimodal data such as video and audio for activity recognition:
   ```bash
   pip install autogluon.multimodal
   ```

2. **Torchaudio for Audio Processing**:  
   For processing audio features within the surveillance video:
   ```bash
   pip install torchaudio
   ```

3. **Zero-Shot Image Model**:  
   To perform zero-shot image classification on new or unseen activities:
   ```bash
   pip install transformers
   ```

## Usage

After installing the required dependencies, follow these steps to run the model:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-repository/CHiLScope.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CHiLScope
   ```

3. Execute the main script to start the surveillance detection system:
   ```bash
   python run_surveillance.py
   ```

The system will start monitoring video feeds from your CCTV cameras and automatically classify activities, detecting any emergencies or unusual behavior. The zero-shot image model will also allow the system to classify activities it has never seen during training.

## Contributions

We welcome contributions to enhance the functionality of the CHiLScope project. If you want to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Tink-Her-Hack 2.0**: This project was developed for the Tink-Her-Hack 2.0 hackathon, where it was created to explore innovative applications of AI in security systems.
- **Zero-Shot Image Model**: Special thanks to the open-source community for providing powerful zero-shot image classification models (e.g., Hugging Face's `transformers` library).
- **Open-source Communities**: Thanks to the open-source community for providing the resources and libraries that made this project possible.



