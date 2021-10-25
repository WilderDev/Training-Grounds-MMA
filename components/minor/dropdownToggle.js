import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { v4 } from "uuid";
import { getMatchingPolicyIcon } from "../../utils/icon.helpers";
import { classNames } from "../../utils/misc.helpers";

const DropdownToggle = ({ title, desc, list }) => {
  console.log("list:", list);
  const listWithIcons = list.map((item) => {
    const icon = getMatchingPolicyIcon(item.icon);
    return {
      ...item,
      icon,
    };
  });

  return (
    <dl className="space-y-6 divide-y divide-gray-200">
      <Disclosure as="div">
        {({ open }) => (
          <>
            <dt className="text-lg">
              <Disclosure.Button className="text-left w-full flex justify-between items-center text-gray-400">
                <p className="flex flex-col">
                  <span className="font-medium text-gray-900">{title}</span>
                  <span className="font-light text-gray-600 text-sm">
                    {desc}
                  </span>
                </p>
                <span className="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    className={classNames(
                      open ? "-rotate-180" : "rotate-0",
                      "h-6 w-6 transform"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel as="dd" className="mt-3 space-y-3">
              {listWithIcons.map((item) => (
                <div key={v4()} className="flex items-center">
                  <item.icon className="h-5 text-red-500 mr-2" />
                  <p className="">{item.rule}</p>
                </div>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </dl>
  );
};

export default DropdownToggle;
