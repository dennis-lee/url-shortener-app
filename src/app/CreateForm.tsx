"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { Stack, Button, TextField } from "@mui/material"

export default function CreateForm() {
  const router = useRouter()

  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    }

    await fetch("/api/handleCreateUrl", options).then((res) => {
      if (res.status === 200) {
        router.refresh()
        setUrl("")
        setIsLoading(false)
      }
    })

    // await fetch(`${process.env.NEXT_PUBLIC_URL_SHORTENER_API}/url`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     url,
    //   }),
    // }).then((res) => {
    //   if (res.status === 200) {
    //     router.refresh();
    //     setUrl("");
    //     setIsLoading(false);
    //   }
    // });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          placeholder="Enter a URL to shorten"
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
  )
}
