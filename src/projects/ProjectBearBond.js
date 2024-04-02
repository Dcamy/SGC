import React from 'react';
import { Link } from 'react-router-dom';

const connectWallet = async () => {
    try {
        // Requests that the user provides an Ethereum account to the dapp.
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Set the account to state or handle it as needed
        console.log(accounts[0]); // This will log the user's account to the console
    } catch (error) {
        // Handle errors if the user denies access or if there are no providers.
        console.error(error);
    }
};


function ProjectBearBond() {
    // TODO: Add props and logic as needed

    return (
        <article className="flex flex-col h-full" data-aos="fade-up">
            {/* ... rest of your component */}
            {/*  1st article v1.2.4 */}
            <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                    <Link to="/blog-post" className="block mb-6">
                        <h3 className="h4 mb-2">
                            <Link to="/blog-post" className="hover:text-gray-100 transition duration-150 ease-in-out">Project Bearer Bond</Link>
                        </h3>
                        <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/BearerBond.png').default} width="352" height="198" alt="News 01" />
                        </figure>
                    </Link>
                    <div className="mb-3">
                        <div className="flex flex-wrap items-center -m-1">
                            <input
                                type="number"
                                placeholder="0.00"
                                className="text-gray-100 py-1 px-3 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out m-1"
                            />
                            <select
                                className="text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out m-1"
                            >
                                <option value="">Coin</option> {/* This is the default placeholder option */}
                                <option value="ETH">Ethereum</option>
                                <option value="BNB">BNB</option>
                                <option value="AVAX">Avalanche</option>
                                <option value="MATIC">Polygon</option>
                                <option value="ARB">Arbitrum</option>
                                <option value="FTM">Fantom</option>
                                <option value="AURORA">Aurora</option>
                                {/* Add more currencies as needed */}
                            </select>

                            <button
                                onClick={connectWallet}
                                className="text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out m-1"
                            >
                                Fund
                            </button>

                            <button
                                className="text-center text-gray-100 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out m-1"
                            >
                                Embed
                            </button>

                        </div>

                    </div>


                </header>
                <p className="text-lg text-gray-400 flex-grow">Embrace ownership with Project Bearer Bond: your stake in tomorrow's tech, today. An NFT for equity, secure, solid. Tradeable, yet personal. Your key to the future, unfurled in code.</p>
                <footer className="flex items-center mt-4">
                    <Link to="#">
                        <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/Screenshot 2024-03-28 081454.png').default} width="60" height="60" alt="Author 01" />
                    </Link>
                    <div className="font-medium">
                        <Link to="#" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">#PoC #SGC #DAO #NFTBearerBond #Doxxed #Difficulty4</Link>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Goal $5000</span>
                    </div>
                </footer>
                <span className="text-gray-500 pl-4"> - </span>
                {/* Social links */}
                <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                    <li>
                        <a href="http://example.com" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Example">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10l12 12m0-12L10 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>


                    </li>
                    <li className="ml-4">
                        <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                            </svg>
                        </Link>
                    </li>
                    <li className="ml-4">
                        <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                            </svg>
                        </Link>
                    </li>
                    <li className="ml-4">
                        <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.145" cy="11.892" r="1" />
                                <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                                <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                            </svg>
                        </Link>
                    </li>
                    <li className="ml-4">
                        <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </article>
        </article>
    );
}

export default ProjectBearBond;
