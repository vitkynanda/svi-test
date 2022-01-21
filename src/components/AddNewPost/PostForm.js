import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useMutation } from "react-query";

const postArticle = async (data) => {
  const response = await fetch("http://localhost:11000/article/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};

const PostForm = () => {
  const options = ["Sports", "Education", "Economics"];
  const [postInput, setPostInput] = useState({
    title: "",
    content: "",
    category: "",
  });

  const mutation = useMutation((postData) => postArticle(postData));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(postInput);
  return (
    <form className="flex flex-col p-3 rounded-md shadow-md m-3 space-y-5 flex-grow">
      <h2 className="font-semibold">New Post</h2>

      <TextField
        id="filled-basic"
        label="Title"
        value={postInput.title}
        onChange={handleChange}
        name="title"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Category"
        value={postInput.category}
        onChange={handleChange}
        name="category"
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-multiline-static"
        label="Content"
        name="content"
        multiline
        value={postInput.content}
        onChange={handleChange}
        rows={4}
      />
      <div className="space-x-3">
        <Button
          onClick={() => {
            mutation.mutate(postInput);
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Publish
        </Button>
        <Button variant="contained" color="warning" endIcon={<DraftsIcon />}>
          Draft
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
