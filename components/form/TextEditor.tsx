"use client";
import { FormHelperText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import { LegacyRef, useCallback, useEffect, useRef, forwardRef } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// ForwardRef wrapper for ReactQuill (this allows refs to work with function components)
const ForwardedReactQuill = forwardRef((props, ref) => (
    <ReactQuill {...props} forwardedRef={ref} />
));

const TextEditor = ({ name, label, control }) => {
    // const {
    //     field: { onChange, value, ref },
    //     fieldState: { error },
    // } = useController({
    //     name,
    //     control,
    // });

    const {
        field: { onChange, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
    });

    const editorRef = useRef(null);

    useEffect(() => {
        console.log({ editorRef }); // Access Quill editor instance if needed
    }, []);

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, false] }], // Correct toolbar for headers
            ["bold", "italic", "underline", "strike", "blockquote"], // Text styling options
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ], // Lists and indents
            ["link", "image"], // Link and image insertion
            ["clean"], // Clear formatting
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];

    return (
        <Box>
            <ForwardedReactQuill
                forwardedRef={editorRef}
                theme="snow"
                modules={modules}
                formats={formats}
                value={value}
                onChange={(content) => {
                    console.log({ content });
                    onChange(content);
                    // setContent(content);
                }}
            />
        </Box>
    );
};

export default TextEditor;
