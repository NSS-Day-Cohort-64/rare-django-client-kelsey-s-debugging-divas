import React, { useState, useEffect } from "react";
import { TagList } from "./TagList";
import { TagForm } from "./CreateTagForm";
import { getTags, createTag } from "../../managers/tags";

export const TagContainer = () => {
  const [tags, setTags] = useState([]);
  const token = localStorage.getItem("auth_token"); 

  useEffect(() => {
    getTags(token).then((tagsData) => setTags(tagsData));
  }, []);

  return (
    <>
      <TagList tags={tags} setTags={setTags} /> 
      <TagForm createTag={createTag} token={token} />
    </>
  );
};
