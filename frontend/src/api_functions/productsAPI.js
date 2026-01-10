import axios from 'axios'

export async function getProducts() {

    try {
        const response = await axios.get('/api/products')
        // console.log(response)
        return response.data
    }
    catch (error) {
        console.log(error)
    }

}