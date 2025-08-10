import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
    const nav = [
        { path: "/project", label: "프로젝트" },
        { path: "/about", label: "소개" },
        { path: "/contact", label: "연락처" },
    ];

    return (
        <header>
            <Disclosure as="nav">
                <div className="mx-auto max-w-7xl">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
                            <div className="flex items-center">
                                {
                                    <NavLink key="/" to="/">
                                        <img
                                            alt="gimeast의 포트폴리오 사이트 로고"
                                            src={logo}
                                            className="h-11 w-auto"
                                        />
                                    </NavLink>
                                }
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <ul className="flex space-x-4">
                                    {nav.map(({ path, label }) => (
                                        <li
                                            key={path}
                                            className="hover:underline"
                                        >
                                            <NavLink
                                                key={path}
                                                to={path}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "text-white bg-gray-500 rounded p-2"
                                                        : "p-2"
                                                }
                                            >
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sm:hidden">
                            <DisclosureButton className="group">
                                <span className="absolute" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="block size-10 group-data-open:hidden"
                                />
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="hidden size-10 group-data-open:block"
                                />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="flex-col space-y-1 px-2 pt-2 pb-3">
                        <ul>
                            {nav.map(({ path, label }) => (
                                <li className="text-center" key={path}>
                                    <NavLink
                                        key={path}
                                        to={path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "block w-full hover:underline text-xl bg-gray-500 text-white"
                                                : "block w-full hover:underline text-xl"
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </header>
    );
}
