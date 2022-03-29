import { useEffect, useState } from "react";
const UseService = () => {
    const [services, setServices] = useState([]);
    const serviceData = "/serviceData.json";

    useEffect(() => {
        fetch(serviceData)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return [services];
};

export default UseService;