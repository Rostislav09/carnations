// src/Сomponents/pdfUploadPage/PDFUploadPage.js
import React from "react";
import pdflogo from "../../resources/pdf/download.png";
import "./PdfUploadPage.css";
import HeaderPdf from "./HeaderPdf";
import Footer from "./Footer";
import { useState } from "react";

const PDFUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
      <div className="headerPdf">
        <HeaderPdf />
      </div>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center">
            <label className="file-input-label">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-input"
              />
              <button className="btn btn-lg" onClick={handleFileUpload}>
                <p>ADD PDF</p>
                <img src={pdflogo} alt="download" />
              </button>
            </label>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PDFUploadPage;
