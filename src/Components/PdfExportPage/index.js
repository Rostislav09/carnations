import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import Sidebar from "../Sidebar";
import "./style.css";

const PdfExportPage = () => {
  const { pdfData } = useSelector(store => store.pdf)

  const columns = useMemo(() => [
      {
        header: 'Number',
        accessorKey: 'number',
        size: 100
      },
      {
        header: 'Year',
        accessorKey: 'year',
        filterVariant: 'range-slider',
        size: 100,
        mantineFilterRangeSliderProps: {
          min: pdfData.options.year.min,
          max: pdfData.options.year.max
        }
      },
      {
        header: 'Brand',
        accessorKey: 'brand',
        filterVariant: 'autocomplete',
        size: 100
      },
      {
        header: 'Model',
        accessorKey: 'model',
        size: 200
      },
      {
        header: 'Mileage',
        accessorKey: 'mileage',
        filterVariant: 'range-slider',
        size: 100,
        mantineFilterRangeSliderProps: {
          min: pdfData.options.mileage.min,
          max: pdfData.options.mileage.max
        }
      },
      {
        header: 'VIN',
        accessorKey: 'vin',
        size: 100
      },
      {
        header: 'Title',
        accessorKey: 'title',
        size: 100
      },
      {
        header: 'Color',
        accessorKey: 'color',
        filterVariant: 'multi-select',
        size: 100,
        mantineFilterMultiSelectProps: {
          data: pdfData.options.colors
        }
      },
      {
        header: 'Options',
        accessorKey: 'options',
        size: 100
      }
    ], [pdfData],
  )

  const table = useMantineReactTable({
    columns,
    data: pdfData.cars,
    enableStickyHeader: true,
    enablePagination: false,
    mantineTableProps: {
      withColumnBorders: true,
    },    
  });


  // const handleUnloadClick = () => {
  //   // Обработчик для кнопки "Unload"
  //   // Вставьте здесь код для выполнения действий при нажатии на кнопку "Unload"
  // };

  return (
    <div className="pdf-upload-page">
      <Sidebar />
      <div className="content">
        <div className="unloading-page">
          <h2 className="unloading-text">CarMax Table</h2>
          <div className="data-grid-container">
             <MantineReactTable table={table} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
{/*            <button onClick={handleUnloadClick} className="unload-button">
              Export PDF
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfExportPage;
