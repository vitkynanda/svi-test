import { Tab } from "@headlessui/react";
import { useState } from "react";
import Published from "./Published";
import Draft from "./Draft";
import Trash from "./Trash";
import { useQuery } from "react-query";
import { getAllArticle } from "../../constants/api";

export default function TabMenu() {
  const [params, setParams] = useState({
    limit: 1,
    offset: 1,
  });

  const { data, isLoading } = useQuery("getAllArticle", () =>
    getAllArticle(params)
  );
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="w-full m-3">
      <Tab.Group>
        <Tab.List className="w-1/2 flex shadow-md rounded-md">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-2/6 text-sm py-2  transition-all duration-300 relative rounded-l-sm",
                selected
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100  border border-gray-300"
              )
            }
          >
            Published
            <span className="absolute top-0 bg-gray-500 w-5 rounded-full text-white">
              1
            </span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-2/6 text-sm py-2 transition-all duration-300 relative ",
                selected
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100  border border-gray-300"
              )
            }
          >
            Trash
            <span className="absolute top-0 bg-gray-500 w-5 rounded-full text-white">
              1
            </span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-2/6 text-sm py-2 transition-all duration-300 relative rounded-r-sm",
                selected
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100  border border-gray-300"
              )
            }
          >
            Draft
            <span className="absolute top-0 bg-gray-500 w-5 rounded-full text-white">
              1
            </span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Published />
          </Tab.Panel>
          <Tab.Panel>
            <Draft />
          </Tab.Panel>
          <Tab.Panel>
            <Trash />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
