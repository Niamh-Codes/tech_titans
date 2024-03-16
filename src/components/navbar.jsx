import React from "react";

function navbar() {
    return (
        <>
            <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <span className="ms-2 text-xl text-black dark:text-white">*</span>
                    <div className="ms-5 flex w-[30%] items-center justify-between">
                        <input
                            type="search"
                            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                        />
                        <span
                            className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
                            id="basic-addon2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="ms-5 flex w-[30%] items-center justify-between">
                        <ul><li>about</li></ul>
                        <ul><li>contact</li></ul>
                        <ul><li>help</li></ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default navbar;
