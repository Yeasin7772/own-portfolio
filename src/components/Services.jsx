import { useEffect, useState } from "react";


const Services = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 0));
        }, 50);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h1 className=""></h1>
            <div className="">
                <progress className="progress progress-primary w-56" value={progress} max="60"></progress>
                <h2 className=""></h2>
                <h2 className=""></h2>
                <h2 className=""></h2>
            </div>
        </div>
    );
};

export default Services;