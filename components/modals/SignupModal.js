import { closeLoginModal, closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `/assets/pfp${Math.ceil(Math.random() * 6)}.png`
    })

    console.log('updated photourl', auth.currentUser)

    router.reload()
  
  }

  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest1111100@gmail.com", "123456")

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      console.log(currentUser)
      dispatch(
        setUser({
          username: auth.currentUser.email.split("@")[0],
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          photoUrl: auth.currentUser.photoURL,
        })
      );
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <button
        className="bg-white text-black
        w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]
        "
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg
        flex justify-center
        "
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button
              className="bg-white text-black w-full font-bold
                text-lg p-2 rounded-md
                "
                onClick={handleGuestSignIn}
            >
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your account</h1>
            <input
              placeholder="Full Name"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"text"}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="bg-white text-black w-full font-bold
                text-lg p-2 mt-8 rounded-md
                "
              onClick={handleSignUp}
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}