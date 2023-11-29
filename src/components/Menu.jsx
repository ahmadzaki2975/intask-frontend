import Link from "next/link";
import Image from "next/image";
import InTaskLogo from "@/../public/InTaskLogo.png";
import { useRouter } from "next/router";

export default function MenuComponent() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="w-full sm:w-fit h-fit sm:min-h-full shadow-[0_-1px_5px_#D6D5A8] sm:shadow-none bg-navy py-1 sm:py-8 md:py-4 md:px-5 px-2 rounded-t-[15px] sm:rounded-[15px] fixed flex items-center justify-center sm:block bottom-0 left-0 sm:relative">
      <Link href="/">
        <Image
          src={InTaskLogo}
          alt="InTask Logo"
          className="w-[60px] md:w-[170px] lg:w-[216px] p-2 md:p-5 sm:mb-4"
        />
      </Link>

      <ul className="text-yellow text-[18px] flex flex-row sm:flex-col gap-1 px-1 md:px-0">
        <li>
          <Link
            href="/dashboard"
            className={`py-2 px-3 cursor-pointer flex items-center gap-4 justify-center md:justify-start rounded-[10px] ${
              pathname === "/dashboard" ? "bg-white/10" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 1H17V3H21V11H19V5H17V7H7V5H5V21H12.5V23H3V3H7V1ZM9 5H15V3H9V5ZM14.75 12.996H23.25V23.291L19.003 20.674L14.75 23.289V12.996ZM16.75 14.996V19.711L19.004 18.326L21.25 19.709V14.996H16.75Z"
                fill="#D6D5A8"
              />
            </svg>
            <span className="hidden md:inline">Projects</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/tasks"
            className={`py-2 px-3 cursor-pointer flex items-center gap-4 justify-center md:justify-start rounded-[10px] ${
              pathname === "/dashboard/tasks" ? "bg-white/10" : ""
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.02473 5.2248C7.08051 5.16901 7.12477 5.10279 7.15496 5.0299C7.18515 4.95701 7.20069 4.87889 7.20069 4.8C7.20069 4.72111 7.18515 4.64299 7.15496 4.5701C7.12477 4.49721 7.08051 4.43098 7.02473 4.3752C6.96894 4.31941 6.90272 4.27516 6.82983 4.24497C6.75694 4.21478 6.67882 4.19924 6.59993 4.19924C6.52104 4.19924 6.44291 4.21478 6.37003 4.24497C6.29714 4.27516 6.23091 4.31941 6.17513 4.3752L4.19993 6.3516L3.42473 5.5752C3.31206 5.46254 3.15926 5.39924 2.99993 5.39924C2.8406 5.39924 2.68779 5.46254 2.57513 5.5752C2.46246 5.68786 2.39917 5.84067 2.39917 6C2.39917 6.07889 2.41471 6.15701 2.4449 6.2299C2.47509 6.30279 2.51934 6.36901 2.57513 6.4248L3.77513 7.6248C3.83086 7.68068 3.89707 7.72501 3.96997 7.75525C4.04286 7.7855 4.12101 7.80107 4.19993 7.80107C4.27885 7.80107 4.35699 7.7855 4.42989 7.75525C4.50278 7.72501 4.56899 7.68068 4.62473 7.6248L7.02473 5.2248ZM10.4999 5.4C10.2612 5.4 10.0323 5.49482 9.86353 5.6636C9.69475 5.83239 9.59993 6.0613 9.59993 6.3C9.59993 6.53869 9.69475 6.76761 9.86353 6.9364C10.0323 7.10518 10.2612 7.2 10.4999 7.2H20.6999C20.9386 7.2 21.1675 7.10518 21.3363 6.9364C21.5051 6.76761 21.5999 6.53869 21.5999 6.3C21.5999 6.0613 21.5051 5.83239 21.3363 5.6636C21.1675 5.49482 20.9386 5.4 20.6999 5.4H10.4999ZM10.4999 11.4C10.2612 11.4 10.0323 11.4948 9.86353 11.6636C9.69475 11.8324 9.59993 12.0613 9.59993 12.3C9.59993 12.5387 9.69475 12.7676 9.86353 12.9364C10.0323 13.1052 10.2612 13.2 10.4999 13.2H20.6999C20.9386 13.2 21.1675 13.1052 21.3363 12.9364C21.5051 12.7676 21.5999 12.5387 21.5999 12.3C21.5999 12.0613 21.5051 11.8324 21.3363 11.6636C21.1675 11.4948 20.9386 11.4 20.6999 11.4H10.4999ZM9.59993 18.3C9.59993 18.0613 9.69475 17.8324 9.86353 17.6636C10.0323 17.4948 10.2612 17.4 10.4999 17.4H20.6999C20.9386 17.4 21.1675 17.4948 21.3363 17.6636C21.5051 17.8324 21.5999 18.0613 21.5999 18.3C21.5999 18.5387 21.5051 18.7676 21.3363 18.9364C21.1675 19.1052 20.9386 19.2 20.6999 19.2H10.4999C10.2612 19.2 10.0323 19.1052 9.86353 18.9364C9.69475 18.7676 9.59993 18.5387 9.59993 18.3ZM7.02473 11.8248C7.13739 11.7121 7.20069 11.5593 7.20069 11.4C7.20069 11.2407 7.13739 11.0879 7.02473 10.9752C6.91206 10.8625 6.75926 10.7992 6.59993 10.7992C6.4406 10.7992 6.28779 10.8625 6.17513 10.9752L4.19993 12.9516L3.42473 12.1752C3.31206 12.0625 3.15926 11.9992 2.99993 11.9992C2.8406 11.9992 2.68779 12.0625 2.57513 12.1752C2.46246 12.2879 2.39917 12.4407 2.39917 12.6C2.39917 12.7593 2.46246 12.9121 2.57513 13.0248L3.77513 14.2248C3.83086 14.2807 3.89707 14.325 3.96997 14.3553C4.04286 14.3855 4.12101 14.4011 4.19993 14.4011C4.27885 14.4011 4.35699 14.3855 4.42989 14.3553C4.50278 14.325 4.56899 14.2807 4.62473 14.2248L7.02473 11.8248ZM7.02473 16.9752C7.0806 17.0309 7.12494 17.0971 7.15518 17.17C7.18543 17.2429 7.201 17.3211 7.201 17.4C7.201 17.4789 7.18543 17.5571 7.15518 17.63C7.12494 17.7029 7.0806 17.7691 7.02473 17.8248L4.62473 20.2248C4.56899 20.2807 4.50278 20.325 4.42989 20.3553C4.35699 20.3855 4.27885 20.4011 4.19993 20.4011C4.12101 20.4011 4.04286 20.3855 3.96997 20.3553C3.89707 20.325 3.83086 20.2807 3.77513 20.2248L2.57513 19.0248C2.46246 18.9121 2.39917 18.7593 2.39917 18.6C2.39917 18.4407 2.46246 18.2879 2.57513 18.1752C2.68779 18.0625 2.8406 17.9992 2.99993 17.9992C3.15926 17.9992 3.31206 18.0625 3.42473 18.1752L4.19993 18.9516L6.17513 16.9752C6.23086 16.9193 6.29707 16.875 6.36997 16.8447C6.44286 16.8145 6.52101 16.7989 6.59993 16.7989C6.67885 16.7989 6.75699 16.8145 6.82989 16.8447C6.90278 16.875 6.96899 16.9193 7.02473 16.9752Z" fill="#D6D5A8"/>
            </svg>
            <span className="hidden md:inline">Tasks</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user"
            className={`py-2 px-3 cursor-pointer flex items-center gap-4 justify-center md:justify-start rounded-[10px] ${
              pathname === "/dashboard/user" ? "bg-white/10" : ""
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8C8 9.06087 8.42143 10.0783 9.17157 10.8284C9.92172 11.5786 10.9391 12 12 12C13.0609 12 14.0783 11.5786 14.8284 10.8284C15.5786 10.0783 16 9.06087 16 8C16 6.93913 15.5786 5.92172 14.8284 5.17157C14.0783 4.42143 13.0609 4 12 4ZM6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 9.5913 17.3679 11.1174 16.2426 12.2426C15.1174 13.3679 13.5913 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8ZM8 18C7.20435 18 6.44129 18.3161 5.87868 18.8787C5.31607 19.4413 5 20.2044 5 21C5 21.2652 4.89464 21.5196 4.70711 21.7071C4.51957 21.8946 4.26522 22 4 22C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21C3 19.6739 3.52678 18.4021 4.46447 17.4645C5.40215 16.5268 6.67392 16 8 16H16C17.3261 16 18.5979 16.5268 19.5355 17.4645C20.4732 18.4021 21 19.6739 21 21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22C19.7348 22 19.4804 21.8946 19.2929 21.7071C19.1054 21.5196 19 21.2652 19 21C19 20.2044 18.6839 19.4413 18.1213 18.8787C17.5587 18.3161 16.7956 18 16 18H8Z" fill="#D6D5A8"/>
            </svg>
            <span className="hidden md:inline">User</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
