"use client";

import { useState } from "react";
import { Card, Button, Link, TextField, Label, InputGroup } from "@heroui/react";
import { Eye, EyeSlash, Person, At, ShieldKeyhole } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { BiPhone } from "react-icons/bi";


export default function SignupPage() {
    // Form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // UI States
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    // email sign up
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(email,phone,name,password);
        setError("");
        setSuccess("");
        setIsLoading(true);

        try {
            const { data, error: authError } = await authClient.signUp.email({
                email,
              password,
                name,
                role:'customer'
            });

            if (authError) {
                setError(authError.message || "Something went wrong during signup.");
            } else {
                setSuccess("Account created successfully! Welcome.");
                setName("");
                setEmail("");
                setPhone("");
                setPassword("");
            }
        } catch (err) {
            setError("An unexpected network error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    // google sign up
    const handleGoogleSignup = async () => {
        setError("");
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/", 
            });
        } catch (err) {
            setError("Google signup failed. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-10">
            <Card className="p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 rounded-none w-full max-w-[500px]">

                {/* Header Container */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">Create an account</h1>
                    <p className="text-sm text-zinc-600">Fill in the fields below to get started</p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSignup} className="flex flex-col gap-5">

                    {/* Name Field */}
                    <TextField isRequired name="name" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-black">Name</Label>
                        <InputGroup className="flex items-center gap-3 border border-zinc-300 dark:border-zinc-700 rounded-none px-4 h-12 bg-zinc-50 focus-within:border-black transition-colors">
                            <Person className="pointer-events-none text-zinc-500" size={18} />
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100 focus:ring-0 focus:outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Email Field */}
                    <TextField isRequired name="email" type="email" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-black">Email Address</Label>
                        <InputGroup className="flex items-center gap-3 border border-zinc-300 dark:border-zinc-700 rounded-none px-4 h-12 bg-zinc-50 focus-within:border-black transition-colors">
                            <At className="text-zinc-500 pointer-events-none" size={18} />
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100 focus:ring-0 focus:outline-none"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password Field */}
                    <TextField isRequired name="password" className="flex flex-col gap-1.5">
                        <Label className="text-sm font-medium text-black">Password</Label>
                        <InputGroup className="flex items-center gap-3 border border-zinc-300 dark:border-zinc-700 rounded-none px-4 h-12 bg-zinc-50 focus-within:border-black transition-colors">
                            <ShieldKeyhole className="text-zinc-500 pointer-events-none" size={18} />
                            <input
                                type={isVisible ? "text" : "password"}
                                placeholder="Choose a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100 focus:ring-0 focus:outline-none"
                            />
                            <button
                                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                                type="button"
                                onClick={toggleVisibility}
                                aria-label="toggle password visibility"
                            >
                                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
                            </button>
                        </InputGroup>
                    </TextField>

                    {/* Dynamic Status Badges */}
                    {error && (
                        <div className="p-3.5 text-xs font-medium rounded-none bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
                            <span className="font-semibold">Error:</span> {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-3.5 text-xs font-medium rounded-none bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                            <span className="font-semibold">Success:</span> {success}
                        </div>
                    )}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        color="primary"
                        className="w-full font-semibold rounded-none text-sm h-12 bg-black text-white hover:bg-zinc-800 transition-colors"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Sign Up
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center my-2">
                        <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800"></div>
                        <span className="px-3 text-xs text-zinc-400 uppercase tracking-wider">Or continue with</span>
                        <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800"></div>
                    </div>

                    {/* Google Button */}
                    <Button
                        type="button"
                        onClick={handleGoogleSignup}
                        className="w-full font-medium rounded-none text-sm h-12 bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                    >
                        <FcGoogle size={20} />
                        Sign up with Google
                    </Button>

                    {/* Navigation Option */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Already have an account?{" "}
                        <Link href="/signin" className="font-medium cursor-pointer text-sm text-blue-600 dark:text-blue-400">
                            Sign in instead
                        </Link>
                    </div>

                </form>
            </Card>
        </div>
    );
}