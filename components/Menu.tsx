import { Fragment, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import classnames from "classnames";

type Props = {
  button: ReactNode;
  items: {
    key: string;
    title: string;
    icon?: ReactNode;
    onClick?: () => void;
  }[];
};

export default function CustomMenu({ button, items }: Props) {
  return (
    <Menu as="div" className="relative inline-block ease- text-left">
      {({ open }) => (
        <>
          {button}
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-10 origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-gray-200 focus:outline-none"
            >
              <div className="py-1">
                {items.map((item) => (
                  <Menu.Item key={item.key}>
                    {({ active }) => (
                      <button
                        onClick={item.onClick}
                        className={classnames(
                          active ? "bg-gray-100 text-black" : "text-gray-700",
                          "group flex items-center w-full px-4 py-2 text-sm"
                        )}
                      >
                        {item.icon}
                        {item.title}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
