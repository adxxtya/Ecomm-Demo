import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div className="flex w-full justify-center">
      <div className="container flex h-[92vh] w-1/2 items-center justify-center">
        {!signup ? (
          <div className="flex w-1/2 flex-col">
            <div className="text-4xl">Create Account</div>
            <div className="mt-8">
              <Input placeholder="Email or Phone Number" />
            </div>
            <div className="mt-4">
              <Input placeholder="Password" type="password" />
            </div>
            <div className="mt-2 flex justify-end">
              <p className="text-xs text-[#4285F4]">Forgot Password?</p>
            </div>
            <button className="mt-8 w-full rounded-md bg-primary py-3">
              Create Account
            </button>
            <button className="mt-8 flex w-full items-center justify-center gap-4 rounded-md border border-neutral-700 py-3">
              <FcGoogle size={30} /> Sign up with Google
            </button>
            <div className="mt-4 flex justify-center">
              <p className="text-sm text-neutral-500">
                Already have an account?{" "}
                <span
                  className="cursor-pointer underline"
                  onClick={() => setSignup(!signup)}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex w-1/2 flex-col">
            <div className="text-4xl">Login</div>
            <div className="mt-8">
              <Input placeholder="Email or Phone Number" />
            </div>
            <div className="mt-4">
              <Input placeholder="Password" type="password" />
            </div>
            <div className="mt-2 flex justify-end">
              <p className="text-xs text-[#4285F4]">Forgot Password?</p>
            </div>
            <button className="mt-8 w-full rounded-md bg-primary py-3">
              Login
            </button>
            <button className="mt-8 flex w-full items-center justify-center gap-4 rounded-md border border-neutral-700 py-3">
              <FcGoogle size={30} /> Login with Google
            </button>
            <div className="mt-4 flex justify-center">
              <p className="text-sm text-neutral-500">
                Not a user?{" "}
                <span
                  className="cursor-pointer underline"
                  onClick={() => setSignup(!signup)}
                >
                  Create Account
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
