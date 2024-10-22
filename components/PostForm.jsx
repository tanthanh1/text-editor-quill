"use client";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import TextEditor from "@/components/form/TextEditor.tsx";
// import TextEditor from "@/components/form/TextEditor.tsx";

const PostForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            shortDescription: "",
            tagList: [],
            fullDescription: "Thanh",
        },
    });

    const handleLoginSubmit = (values) => {
        console.log(values);
    };
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <TextEditor
                name="fullDescription"
                control={control}
                label="Full Description"
            />

            <Button type="submit">Upload</Button>
        </Box>
    );
};
export default PostForm;
