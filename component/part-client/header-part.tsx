import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LogoPart } from "component/part";
import Link from "next/link";

const navigation = [
  { name: "N1", href: "/subject/N1_1" },
  { name: "N2", href: "/subject/N2" },
  { name: "N3", href: "/subject/N3" },
  { name: "N4", href: "/subject/N4" },
  { name: "N5", href: "/subject/N5" },
  { name: "stroke", href: "/subject/stroke" },
];

export function HeaderPart(): JSX.Element {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center sm:hidden">
              <Disclosure.Button>
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex md:flex-1 items-top justify-between">
              <LogoPart />
              <div className="hidden sm:ml-6 sm:block">
                <Items />
              </div>
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
    <div className="flex flex-wrap px-2">
      {navigation.map((item) => (
        <Link href={item.href} key={item.name}>
          <Disclosure.Button className="btn-text">
            {item.name}
          </Disclosure.Button>
        </Link>
      ))}
    </div>
  );
}
