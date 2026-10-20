import chefPrompt from '../prompts/chefTurrialba.md?raw'

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"

export const preguntarAlChef = async (pregunta) => {
    
    try {
        const response = await fetch(OPENROUTER_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173", 
                "X-OpenRouter-Title": "Sabor y Provincia"
            },
            body: JSON.stringify({
                "model": "google/gemini-2.0-flash-001", 
                "messages": [
                    { "role": "system", "content": chefPrompt },
                    { "role": "user", "content": pregunta }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || "Error en la petición");
        }

        const data = await response.json();
        
        return data.choices[0].message.content;

    } catch (error) {
        console.error('Error consultando al chef:', error);
        
        if (error.message.includes("429")) {
            return "El Chef está atendiendo muchas mesas ahora mismo. Reintenta en un minuto.";
        }
        
        return "Tuve un problema en la cocina. Intentá de nuevo en un momento.";
    }
}