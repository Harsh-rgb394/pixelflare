import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { SignUpField, Loader } from '../components';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const generateImage = () => {

  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:5000/user/register", form);

      if (res.data.success) {
        alert("Regsiter Successfully");
        navigate("/login");
      }

    } catch (error) {
      console.log(error);

    }

  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Start</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Start your creation journey here with Pixelflare.</p>
      </div>

      <form className="mt-16 max-w-3xl justify-center" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <SignUpField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Abhay Verma"
            value={form.name}
            handleChange={handleChange}
          />
          <SignUpField
            labelName="Your Email"
            type="email"
            name="email"
            placeholder="abc@xyz.com"
            value={form.email}
            handleChange={handleChange}
          />

          <SignUpField
            labelName="Password"
            type="password"
            name="password"
            placeholder="1234"
            value={form.password}
            handleChange={handleChange}
          />
          <SignUpField
            labelName="Confirm Password"
            type="password"
            name="confirmpassword"
            placeholder="1234"
            value={form.confirmpassword}
            handleChange={handleChange}
          />
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="submit"
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            SignUp
          </button>
        </div>

        <div className="mt-4 justify-center">
          <Link to="/login"><p className="mt-2 text-[#666f75] underline text-[14px] hover:text-[#000000]"> Already a User? Login Here.</p></Link>
        </div>
      </form>
    </section>
  );

};

export default SignUp;
