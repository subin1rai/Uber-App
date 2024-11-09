import axios from "axios";

export type User = {
    name: string;
    bio: string;
    avatar_url: string;
    received_events_url: string;
    repos_url: string
}

export async function getBio(username: string): Promise<User> {
    const url = `https://api.github.com/users/${username}`;
    const token = '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'; 

    try {
        const { data } = await axios.get<User>(url, {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        return {
            name: data.name,
            bio: data.bio,
            avatar_url: data.avatar_url,
            received_events_url: data.received_events_url,
            repos_url: data.repos_url
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}
