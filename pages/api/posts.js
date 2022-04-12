import axios from "axios";

export default async function handler(req, res) {
    const URL = "https://dev.to/api/articles?username=abhidadhaniya23";
    const { data } = await axios.get(URL);
    if (req.method != "POST") res.status(200).json({ data: data });
}
