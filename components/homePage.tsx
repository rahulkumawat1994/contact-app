import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/common/layout";
import {
  TrashIcon,
  PencilIcon,
  PlusCircleIcon,
  UserIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { useContactStore } from "../app/contactStore";
import { ContactInterface } from "../interfaces/contact";

const HomePage = () => {
  const router = useRouter();
  const { contactData, deleteContact } = useContactStore();
  const [state, setState] = useState<ContactInterface[] | []>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const contact = [...contactData];
    contact.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setState(contact);
    setLoading(false);
  }, [contactData]);
  return (
    <>
      <Head>
        <title>Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout name="Home">
        <div className="py-6">
          <div className="flex justify-between mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Contact List
            </h1>
            <button
              onClick={() => router.push("/add-contact")}
              className="bg-ctBlue-500 p-2 hover:bg-ctBlue-600 text-white hover:bg-opacity-[0.8] gap-2 inline-flex flex-wrap items-center justify-center rounded-[4px] dark:border-ctBlue-500"
            >
              <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
              Add Contact
            </button>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                {!loading
                  ? state && state.length !== 0
                    ? state.map((item) => (
                        <div
                          className="w-full px-4 py-5 bg-white rounded-lg shadow"
                          key={item.phone}
                        >
                          {" "}
                          <div className="flex gap-5">
                            <div className="flex">
                              <span className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                                <img
                                  className="object-cover h-20 w-20"
                                  src={item.image ? item.image : ""}
                                  alt=""
                                />
                              </span>
                            </div>
                            <div>
                              <div className="text-sm flex font-semibold text-gray-900 truncate">
                                <UserIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />{" "}
                                <span className="ml-1">{item.name}</span>
                              </div>
                              <div className="mt-2 flex text-sm font-medium text-gray-500">
                                <PhoneIcon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />{" "}
                                <span className="ml-2">{item.phone}</span>
                              </div>
                              <div className="mt-2 flex text-sm font-medium text-gray-500">
                                <BuildingOffice2Icon
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />{" "}
                                <span className="ml-2 capitalize">
                                  {item.type}
                                </span>
                              </div>
                              <div className="mt-2 flex text-sm font-medium text-gray-500">
                                <Image
                                  src="/whatsapp.svg"
                                  width={16}
                                  height={16}
                                  alt="whatsapp"
                                />{" "}
                                <span className="ml-2 capitalize">
                                  {item.isWhatsapp}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end gap-4">
                            <button
                              className="hover:text-green-700"
                              onClick={() =>
                                router.push(`/edit-contact/${item.phone}`)
                              }
                            >
                              <PencilIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                              className="hover:text-red-400 text-red-600"
                              onClick={() => deleteContact(item.phone)}
                            >
                              <TrashIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      ))
                    : "No Data Found"
                  : "loading"}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default HomePage;