import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import pdflogo from "../../resources/pdf/download.png";
import "./PdfUploadPage.css";

const PDFUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    await handleFileUpload(); // Вызываем handleFileUpload
    handleSendClick(); // Вызываем handleSendClick
  };

  const handleSendClick = () => {
    // Обработчик для кнопки "Send"
    // Вставьте здесь код для отправки файла и измените состояние isFileUploaded
    // Например:
    // отправить файл и при успешной отправке:
    setIsFileUploaded(true);
    navigate("/unloading"); // Перенаправляем пользователя на страницу Unloading
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedFileName(event.target.files[0]?.name || null);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("pdfFile", selectedFile);

    try {
      const response = await fetch("/upload-pdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Данные успешно загружены, можно обновить состояние для отображения таблицы
      } else {
        console.error("Error uploading PDF");
      }
    } catch (error) {
      console.error("Error uploading PDF", error);
    }
  };

  return (
    <div className="pdf-upload-page">
      <Sidebar />
      <div className="content">
        <div className="centered-container">
          <div className="file-upload-container">
            <label className="file-input-label">
              <div className="file-input-container">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <img src={pdflogo} alt="download" className="file-input-icon" />
              </div>
              {uploadedFileName && (
                <div className="file-info">
                  <p>Uploaded: {uploadedFileName}</p>
                </div>
              )}
              <button
                className="btn btn-lg btn-unloading"
                onClick={handleButtonClick}
              >
                Send
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFUploadPage;
