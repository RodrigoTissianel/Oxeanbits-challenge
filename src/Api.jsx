const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export function MOVIES_GET(currentPage) {
    return {
        url: `${API_URL}top_rated?${API_KEY}&page=${currentPage}`,
        options: {
            method: "GET",
            headers: {
                "Accept-Encoding": "gzip, deflate",
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
        },
    };
}
