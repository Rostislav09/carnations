import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import Sidebar from "../Sidebar";
import "./style.css";

const PdfExportPage = () => {
  const { pdfData } = useSelector(store => store.pdf)

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableHeaders = columns.map(c => c.header).filter(c => c != 'Announcements')
    const tableData = rows.map(row => Object.values(row.original))
    const tableRows = []

    tableData.map(row => {
      tableRows.push(row)
      tableRows.push([{ content: `Announcements: ${row[row.length - 1]}`, colSpan: 9 }])
    })

    autoTable(doc, {
      styles: { fontSize: 7 },
      margin: { top: 5, left: 5, right: 5, bottom: 5 },
      head: [tableHeaders],
      body: tableRows
    });

    doc.save('carmax-pdf.pdf');
  };

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
        size: 100,
        mantineFilterMultiSelectProps: {
          data: pdfData.options.brands
        }
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
      },
      {
        header: 'Announcements',
        accessorKey: 'announcements',
        size: 100
      }
    ], [pdfData],
  )

  const table = useMantineReactTable({
    columns,
    data: pdfData.cars,
    enableRowSelection: true,
    enableStickyHeader: true,
    initialState: { showColumnFilters: true },
    enablePagination: false,
    mantineTableProps: {
      withColumnBorders: true,
    },
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export All Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          leftIcon={<IconDownload />}
          variant="filled"
        >
          Export Selected Rows
        </Button>
      </Box>
    )
  });

  return (
    <div className="pdf-upload-page">
      <Sidebar />
      <div className="content">
        <div className="unloading-page">
          <h2 className="unloading-text">CarMax Table</h2>
          <div className="data-grid-container">
             <MantineReactTable table={table} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfExportPage;
