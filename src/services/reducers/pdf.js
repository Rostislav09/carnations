import { 
  PDF_UPLOAD_START,
  PDF_UPLOAD_SUCCESS,
  PDF_UPLOAD_ERROR,
} from '../actions/pdf'

const pdfInitialState = {
  pdfUploadStart: false,
  pdfUploadSuccess: false,
  pdfUploadError: false,
  pdfData: {
    cars: [],
    options: {
      year: {
        min: 0,
        max: 0
      },
      mileage: {
        min: 0,
        max: 0
      },
      colors: [],
      brands: []
    }
  }
}

export const pdfReducer = (state = pdfInitialState, action) => {
  switch (action.type) {
    case PDF_UPLOAD_START: {
      return {
        ...pdfInitialState,
        pdfUploadStart: true
      }
    }
    case PDF_UPLOAD_SUCCESS: {
      return {
        ...pdfInitialState,
        pdfData: action.payload,
        pdfUploadSuccess: true
      }
    }
    case PDF_UPLOAD_ERROR: {
      return {
        ...pdfInitialState,
        pdfUploadError: true
      }
    }    
    default: {
      return state;
    }
  }
}