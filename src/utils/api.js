    const BASE_URL = "";

    export async function fetchAbout() {
    const response = await fetch(`${BASE_URL}/about`);
    if (!response.ok) {
        throw new Error("Failed to fetch about data");
    }
    return response.json();
    }

    export async function fetchProjects() {
    const response = await fetch(`${BASE_URL}/projects`);
    if (!response.ok) {
        throw new Error("Failed to fetch projects data");
    }
    return await response.json();
    }
    export async function fetchAssets(fileName) {
        return `${BASE_URL}/assets/${fileName}`;
    }
