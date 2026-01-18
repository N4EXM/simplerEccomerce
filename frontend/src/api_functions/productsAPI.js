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

export async function getUserProducts(user_id) {

    try {
        
        const response = await fetch(`/api/myProducts/${user_id}`, {

            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            },
            credentials: 'include' // Important for cookies
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        return data

    }
    catch (error) {
        console.log(error)
    }

}

export async function getCategories() {

}