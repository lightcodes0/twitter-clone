import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid"

export default function Trending() {
    return (
        <div className="hidden lg:flex flex-col ml-5 mt-4">
            <div className="flex space-x-3 bg-white bg-opacity-10 w0[300px] 
            h-[44px] p-3 rounded-3xl">
                <SearchIcon className="w-6 text-gray-600"/>
                <input 
                className="bg-transparent focus:outline-none placeholder:text-gray-600"
                placeholder="Search Twitter" 
                />
            </div>
            <div className="w-[300px] h-[500px] bg-white bg-opacity-10 mt-3 rounded-3xl">
                <h1 className="font-bold text-xl p-3">What's happening</h1>
                <div className="p-3 relative">
                    <p className="text-xs text-gray-500">Trending in AUS</p>
                    <h1 className="text-[15px] font-bold">Devs being hired</h1>
                    <p className="text-xs text-gray-500">340k Tweets</p>
                    <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
                </div>
                <div className="p-3 relative">
                    <p className="text-xs text-gray-500">Trending in RUS</p>
                    <h1 className="text-[15px] font-bold">Economics</h1>
                    <p className="text-xs text-gray-500">35k Tweets</p>
                    <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
                </div>
                <div className="p-3 relative">
                    <p className="text-xs text-gray-500">Trending in US</p>
                    <h1 className="text-[15px] font-bold">China</h1>
                    <p className="text-xs text-gray-500">34k Tweets</p>
                    <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
                </div>
                <div className="p-3 relative">
                    <p className="text-xs text-gray-500">Trending in EUR</p>
                    <h1 className="text-[15px] font-bold">Heatwave</h1>
                    <p className="text-xs text-gray-500">60k Tweets</p>
                    <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
                </div>
                <div className="p-3 relative">
                    <p className="text-xs text-gray-500">Trending in JAP</p>
                    <h1 className="text-[15px] font-bold">Technology</h1>
                    <p className="text-xs text-gray-500">40k Tweets</p>
                    <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
                </div>
            </div>
            <div className="w-[300px] h-[300px] bg-white bg-opacity-10 mt-3 rounded-3xl">
                <h1 className="font-bold text-xl p-3">Who to follow</h1>
               
               <div className="flex justify-between p-3">

                <div className="flex space-x-3">
                    <img alt="image" className="w-11 h-11 object-cover rounded-full" src="/assets/zuck.png" />
                <div>
                    <div className="flex space-x-1">
                        <h1 className="font-bold">Mark Zuck</h1>
                        <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                    </div>
                    <h1 className="text-[12px] text-gray-500 mt-1">@zuck</h1>
                    </div>
                </div>

                <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold">
                    Follow
                </button>

                </div>
               <div className="flex justify-between p-3">

                <div className="flex space-x-3">
                    <img alt="image" className="w-11 h-11 object-cover rounded-full" src="/assets/bragg.png" />
                <div>
                    <div className="flex space-x-1">
                        <h1 className="font-bold">David Bragg</h1>
                        <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                    </div>
                    <h1 className="text-[12px] text-gray-500 mt-1">@dbragg</h1>
                    </div>
                </div>

                <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold">
                    Follow
                </button>

                </div>
               <div className="flex justify-between p-3">

                <div className="flex space-x-3">
                    <img alt="image" className="w-11 h-11 object-cover rounded-full" src="/assets/pfp.png" />
                <div>
                    <div className="flex space-x-1">
                        <h1 className="font-bold">Elon Musk</h1>
                        <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                    </div>
                    <h1 className="text-[12px] text-gray-500 mt-1">@elon</h1>
                    </div>
                </div>

                <button className="bg-white text-black text-sm w-20 rounded-3xl font-bold">
                    Follow
                </button>

                </div>
               </div>
            </div>

            
    )
}