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
      <CreateForm />
      <UrlList />
    </Container>
  );
}
