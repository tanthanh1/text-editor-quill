"use client";
import { useForm } from "react-hook-form";

import { Box, Button } from "@mui/material";
import { InputField } from "@/components/form/InputField";

const LoginForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const handleLoginSubmit = (values) => {
        console.log(values);
    };
    return (
        <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
            <InputField name="username" control={control} />
            <InputField name="password" control={control} />
            <Button type="submit">Log In</Button>
        </Box>
    );
};
export default LoginForm;
