import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LogoPart } from "component/part";
import { ClosePart } from "component/part-client";

const navigation = [
  { name: "N1", href: "/subject/N1_1", current: true },
  { name: "N2", href: "/subject/N2", current: true },
  { name: "N3", href: "/subject/N3", current: true },
  { name: "N4", href: "/subject/N4", current: true },
  { name: "N5", href: "/subject/N5", current: true },
  { name: "stroke", href: "/subject/stroke", current: true },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(" ");
}

export function HeaderPart(): JSX.Element {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0">
      {({ open }) => (
        <>
            <div className="flex items-center justify-between">
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex md:flex-1 items-center justify-between">
                <LogoPart />
                <div className="hidden sm:ml-6 sm:block">
                  <Items />
                </div>
              </div>
              <div>
                <ClosePart />
              </div>
            </div>

          <Disclosure.Panel className="sm:hidden">
            <Items />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function Items(): JSX.Element {
  return (
    <div className="flex flex-wrap mt-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.href}
          className={classNames(
            item.current ? "btn-text" : "text-gray-300 btn-text"
          )}
        >
          {item.name}
        </Disclosure.Button>
      ))}
    </div>
  );
}
