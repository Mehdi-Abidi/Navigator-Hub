import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className="text-center m-4 bg-red-900 text-white p-4">
            <h2 className="text-5xl text-red-300 font-black mb-6">{data.name}</h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
                <div className="lg:w-1/2 text-left lg:mr-8">
                    <p className="text-xl  mb-4 text-red-50 font-medium ">{data.bio}</p>
                    <p className="text-2xl mb-2 text-red-50 font-medium ">Followers: {data.followers}</p>
                    <p className="text-2xl mb-2 text-red-50 font-medium ">Following: {data.following}</p>
                    <p className="text-2xl mb-2 text-red-50 font-medium ">Repositories: {data.public_repos}</p>
                </div>
                <div className="flex justify-center lg:w-1/2">
                    <img
                        src={data.avatar_url}
                        alt="Git picture"
                        width={300}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Mehdi-Abidi');
    return response.json();
};
