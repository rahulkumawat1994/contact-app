import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
const navigation = [{ name: "Home", href: "/", icon: HomeIcon, current: true }];

function classNames(...classes: {}[]) {
  return classes.filter(Boolean).join(" ");
}
interface Props {
  children: React.ReactElement;
  name: string;
}
const Layout = ({ children, name }: Props) => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4 text-white">
              Contact App
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <div
                    onClick={() => router.push(item.href)}
                    key={item.name}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <div className="font-medium text-lg px-6 py-5"> {name}</div>
          </div>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};
export default Layout;
