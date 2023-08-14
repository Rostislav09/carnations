import { API_BASE_URL } from '../api'
import { getCookie, checkResponse } from '../utils'

export const PDF_UPLOAD_START = 'PDF_UPLOAD_START'
export const PDF_UPLOAD_SUCCESS = 'PDF_UPLOAD_SUCCESS'
export const PDF_UPLOAD_ERROR = 'PDF_UPLOAD_ERROR'

export function pdfUpload(formData) {
  return function(dispatch) {
    dispatch({
      type: PDF_UPLOAD_START
    })

    fetch(`${API_BASE_URL}/parser/car_max`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`
      },
      body: formData
    })
    .then(checkResponse)
    .then(data => dispatch({
      type: PDF_UPLOAD_SUCCESS, 
      payload: data
    }))
    .catch(data => dispatch({
      type: PDF_UPLOAD_ERROR
    }))
  }
}