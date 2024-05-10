"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Stack, Button, TextField } from "@mui/material";
import { isURL } from "validator";

type FormValues = {
  url: string;
};

const URL_VALIDATOR_OPTIONS = {
  require_protocol: false,
};

export default function CreateForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      url: "",
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { control, register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    await fetch(`${process.env.NEXT_PUBLIC_URL_SHORTENER_API}/url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: data.url,
      }),
    }).then((res) => {
      if (res.status === 200) {
        router.refresh();
      }

      reset();
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          placeholder="Enter a URL to shorten"
          {...register("url", {
            required: "URL is required",
            validate: (value, formValues) =>
              isURL(value, URL_VALIDATOR_OPTIONS) || "Invalid URL",
          })}
          error={!!errors.url}
          helperText={errors.url?.message}
        />
        <Button
          type="submit"
          variant="contained"
          className="btn-primary"
          disabled={isLoading}
          fullWidth
        >
          {isLoading && <span>Shortening...</span>}
          {!isLoading && <span>Shorten</span>}
        </Button>
      </Stack>
    </form>
  );
}
