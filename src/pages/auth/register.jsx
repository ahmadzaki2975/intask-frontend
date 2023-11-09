import Image from "next/image";
import InTaskLogo from "@/../public/InTaskLogo.png";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Register() {
  return(
    <main className="flex flex-col justify-center items-center min-h-screen" style = {{ backgroundColor: "#1B2430" }}>
    <section className="p-10 px-12 bg-yellow rounded-[20px]  w-[350px] h-[500px] flex flex-col gap-4 justify-center items-center">
      <div className="p-2 bg-navy rounded-[10px] grid place-items-center">
        <Image src={InTaskLogo} alt="InTask Logo" className="w-[135px]" />
      </div>
      <p className="text-[20px] font-bold mt-0" style = {{color:  "#1B2430", marginTop: "-0.4rem"}}>Register</p>
        <p className="text-[12px] mt-0" style = {{color:  "#1B2430", marginTop: "-0.9rem"}}>Great idea to create your account now!</p>

      <form className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          router.replace("/dashboard");
        }}
      >
        <label className="flex flex-col gap-1">
          Username / Email
          <input className="outline" />
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input className="outline" />
        </label>
        <p className="text-[14px]"> Already have an account? <Link href="/auth/login" className="underline">Log in</Link>.</p>
        <button type="submit" className="outline py-1">Register</button>
      </form>
    </section>
  </main>
);
}