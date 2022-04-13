import axios from "axios";

const options = {
    headers: { "api-key": process.env.NEXT_API_KEY, "access-control-allow-origin": "*, Origin, X-Requested-With, Content-Type, Accept, Authorization" },
    params: { per_page: 10 },
};
export default async (req, res) => {
    axios.get("https://dev.to/api/articles/me/published", options).then(async (response) => {
        await response.data.forEach((article) => {
            if (article.slug === req.body) {
                res.status(200).json({ data: article });
            }
        });
    });
};
