import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <nav className="flex px-12 py-4 bg-gray-300">
          <p className="flex flex-1">Speak easy</p>
          <div className="flex justify-center items-center gap-4">
            <p>Pricing</p>
            {/* <p>Sign In</p> */}
          </div>
          <SignedOut>
            {/* <SignInButton /> */}
            <SignInButton>
              <Link href="/sign-in">Sign In</Link>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/test">Upload a video</Link>
            <UserButton />
          </SignedIn>
        </nav>
        <section className="w-full flex justify-center items-center my-12">
          <Button className="">Get SpeakEasy</Button>
        </section>
        <section>
          <div className="flex flex-col gap-4 items-center">
            <h2>Pricing</h2>
            <div className="flex gap-12 justify-center">
              <div className="flex flex-col gap-2 justify-left bg-slate-200 rounded p-4">
                <p>Basic</p>
                <p>10$</p>
                <Button>Get SpeakEasy</Button>
              </div>
              <div className="flex flex-col gap-2 justify-left bg-slate-200 rounded p-4">
                <p>pro</p>
                <p>19.99$</p>
                <Button>Get SpeakEasy</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
