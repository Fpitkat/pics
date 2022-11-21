// access key = R4s8cBVQz-LMwACgmuw8YdsufdGPNifXeUz-cTxSHRk
// secret key = yRpxtl0pgzAhooPRy_8yXuGTyos2aNmFl5FNmvtaACY

import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID R4s8cBVQz-LMwACgmuw8YdsufdGPNifXeUz-cTxSHRk',
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}

export default searchImages
