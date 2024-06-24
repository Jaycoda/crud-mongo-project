import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

// export const dynamic = "force-dynamic";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      next: {
        revalidate: 0, // use 0 to opt out of using cache
      },
    });
    if (!res.ok) {
      throw new Error("failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTopic = async ({ params }) => {
  const { id } = params;

  const { topic } = await getTopicById(id);
  const { title, description } = await topic;

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
