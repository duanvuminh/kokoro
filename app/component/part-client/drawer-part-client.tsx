import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DrawerPartClient({
  open,
  title,
  setOpen,
  children,
}: {
  open: boolean;
  title: string;
  setOpen: any;
  children: any;
}) {
  return (
    <Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6 flex justify-start items-center">
                        <button
                          type="button"
                          className="btn-text"
                          onClick={() => setOpen(false)}
                        >
                          <ArrowLeftIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          {title}
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {children}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
}
