"use client";
import { useForm } from "react-hook-form";

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { EditorField } from "@/components/form/EditorField.tsx";
import { InputField } from "@/components/form/InputField";
// import TextEditor from "@/components/form/TextEditor.tsx";

const UploadForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            shortDescription: "",
            tagList: [],
            fullDescription: "Thanh",
        },
    });

    const handleLoginSubmit = (formValues) => {
        console.log(formValues);
        const payload = new FormData();
    };
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField
                name="title"
                label="Title"
                placeholder="Your Work Title"
                control={control}
            />
            <EditorField
                name="fullDescription"
                control={control}
                label="Full Description"
            />

            <Button type="submit">Upload</Button>
        </Box>
    );
};
export default UploadForm;
