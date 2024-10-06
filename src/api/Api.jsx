// import "dotenv/config";
const key = import.meta.env.VITE_API_KEY;

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Y3YzMzNTlmOTI1ODA5YzQ3ODJkOTE5ZTYxOWZjYiIsIm5iZiI6MTcyMzg3NDY3NC4wOTE3NSwic3ViIjoiNjZjMDNhNDk0MzRiOTdlYWZkYzMwZWYzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.puUChWTdspCSRzv1VWoibS9mV2RVfMaDXSazsn4epnc",
    },
};

const fetchData = async ({ url }) => {
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (err) {
        console.error("error:" + err);
        throw err; // rethrow the error if you want to handle it outside the function
    }
};

export default fetchData;
