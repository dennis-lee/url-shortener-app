import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import CreateForm from "@/app/CreateForm";
import UrlList from "@/app/url/UrlList";

export default function Home() {
  return (
    <Container fixed>
      <Typography variant="h1" textAlign={"center"} gutterBottom>
        URL Shortener
      </Typography>
      <Typography variant="h6">
        NOTE: Mixed/insecure content must be allowed on the browser for the
        Vercel-deployed app to work.
      </Typography>
      <CreateForm />
      <UrlList />
    </Container>
  );
}
