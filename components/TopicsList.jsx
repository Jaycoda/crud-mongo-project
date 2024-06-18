import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch the topics");
    }

    return res.json();
  } catch (error) {
    console.log("error loading topics", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div className="p-4 border border-slate-600 my-3 flex justify-between gap-5">
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>

          <div className="flex gap-2 items-start">
            <RemoveBtn id={topic._id} />
            <Link href={`/edittopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
