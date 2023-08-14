import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../Sidebar";
import "./style.css";

const UnloadingPage = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    // Добавьте другие колонки, если необходимо
  ];

  const rows = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 28 },
    { id: 3, name: "Mike Johnson", age: 35 },
    // Добавьте другие строки, если необходимо
  ];

  const handleUnloadClick = () => {
    // Обработчик для кнопки "Unload"
    // Вставьте здесь код для выполнения действий при нажатии на кнопку "Unload"
  };

  return (
    <div className="pdf-upload-page">
      <Sidebar />
      <div className="content">
        <div className="unloading-page">
          <h2 className="unloading-text">Unloading PDF</h2>
          <div className="data-grid-container">
            <DataGrid columns={columns} rows={rows} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <button onClick={handleUnloadClick} className="unload-button">
              Unload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnloadingPage;
