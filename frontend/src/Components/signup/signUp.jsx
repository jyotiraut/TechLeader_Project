import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import TypeCheckbox from "./TypeCheckbox";
import "./signup.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        organizationName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "", // New field for account type
    });

    const { signup } = useSignUp();

    const handleTypeChange = (type) => {
        if (type === "individual") {
            setInputs({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                accountType: type,
            });
        } else {
            setInputs({
                organizationName: "",
                email: "",
                password: "",
                confirmPassword: "",
                accountType: type,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data based on the selected account type
        const formData = inputs.accountType === "individual" ? {
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            password: inputs.password,
            confirmPassword: inputs.confirmPassword,
            accountType: inputs.accountType
        } : {
            organizationName: inputs.organizationName,
            email: inputs.email,
            password: inputs.password,
            confirmPassword: inputs.confirmPassword,
            accountType: inputs.accountType
        };

        await signup(formData);
        navigate("/");
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1 className="signup-title">
                    Sign Up <span className="tradition-keepers">TraditionKeepers</span>
                </h1>

                <TypeCheckbox onCheckBoxChange={handleTypeChange} selectedType={inputs.accountType} />

                <form onSubmit={handleSubmit} className="mt-4">
                    {inputs.accountType === "individual" ? (
                        <>
                            <div>
                                <label htmlFor="firstName" className="label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="input"
                                    value={inputs.firstName}
                                    onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="input"
                                    value={inputs.lastName}
                                    onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                                />
                            </div>
                        </>
                    ) : (
                        <div>
                            <label htmlFor="organizationName" className="label">
                                Organization Name
                            </label>
                            <input
                                type="text"
                                id="organizationName"
                                className="input"
                                value={inputs.organizationName}
                                onChange={(e) => setInputs({ ...inputs, organizationName: e.target.value })}
                            />
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="input"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="btn-signup mt-4">
                        Sign Up
                    </button>
                </form>
<div className="otheroption">
                <Link to="/login" className="link-login mt-4 block text-center">
                    Already have an account? Log In
                </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
