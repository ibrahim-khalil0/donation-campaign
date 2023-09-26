import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center pt-44">
            <h1 className="text-black text-5xl mb-12">Somethings Wrong</h1>
            <Link to={"/"} className="bg-red-400 text-white px-8 py-3 rounded-lg">Go Back Home</Link>
        </div>
    );
};

export default Error;