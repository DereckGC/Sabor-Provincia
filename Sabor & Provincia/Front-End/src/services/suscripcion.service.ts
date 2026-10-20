import apiClient from "./apiClient.service"; 

interface User  {
    name : string,
    email : string
}

export async function subscribe(user : User){
    const loading = true;

    try {
        const {data} = await apiClient.post<User>("/lead",user);
        return data;
    } catch (error) {
        throw handleError("creating", error);
    }

}

function handleError(action: string, error: any) {
    const backendMessage = error.response?.data?.message || error.response?.data || error.message;
    console.error(`Error ${action} offers:`, backendMessage);
    const errorMessage = typeof backendMessage === 'string' ? backendMessage : JSON.stringify(backendMessage);
    return new Error(errorMessage);
}