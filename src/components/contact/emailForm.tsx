"use client";

import { ChangeEvent, useState } from "react";

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
        <article className="">
            <form
                action="/email"
                method="post"
                className="flex flex-col bg-neutral-800 text-white p-3 rounded-md"
            >
                <label htmlFor="email" className="py-1">
                    Your Email
                </label>
                <input
                    type="email"
                    name="emailVal"
                    id="email"
                    className="text-black"
                    value={email}
                    onChange={handleEmail}
                />

                <label htmlFor="title">Subject</label>
                <input type="text" name="titleVal" id="title" />
                <label htmlFor="context">Message</label>
                <textarea
                    name="emailContext"
                    id="context"
                    cols={30}
                    rows={10}
                ></textarea>
                <button className="bg-yellow-400 text-black py-1 my-1">
                    Submit
                </button>
            </form>
        </article>
    );
}
