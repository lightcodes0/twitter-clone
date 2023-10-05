import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

export default function BottomBanner() {
    return (
        <div className="flex fixed w-full h-[80px] bg-[#1d9bf0] bottom-0 justify-center items-center xl:space-x-[200px]">
            
            
            <div className="hidden xl:inline text-white">
                <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
                <span className="text-[18px]">People on Twitter are the first to know</span>
            </div>
            
            
            <div className="space-x-3">
                <LoginModal /> 
                <SignupModal />
            </div>
        </div>
    )
}