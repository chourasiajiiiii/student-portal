
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../Slices/Auth";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted:", formData);

        // Dispatch login action
        dispatch(login(formData));

        // Navigate after successful login
         navigate("/");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 bg-slate-800 rounded-lg shadow-lg"
        >
            <label htmlFor="username" className="text-white font-medium">
                Username:
            </label>

            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        username: e.target.value
                    })
                }
                className="p-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <label htmlFor="password" className="text-white font-medium">
                Password:
            </label>

            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }
                className="p-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
                Login
            </button>

        </form>
    );
};

export default LoginForm;
