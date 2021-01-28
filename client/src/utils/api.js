// const API_URL = "http://localhost:3000";

export default async function entriesList() {
    const response = await fetch(`/api/logs`);
    return response.json();
}
export async function createNewLocation(data) {

    const response = await fetch(`/api/logs`,
    {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }
    );
    return response.json();
}
export async function updateRating(data, _id) {
    console.log(data, _id)
    const response = await fetch(`/api/logs`,
    {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data, _id),
      
    }
    );
    return response.json();
}