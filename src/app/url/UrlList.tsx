import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Link from "@mui/material/Link";

async function getUrls() {
  return await fetch(`${process.env.URL_SHORTENER_API}/api/url`, {
    method: "GET",
    next: { revalidate: 0 },
  })
    .then((res) => {
      if (res.status === 200) {
        if (res.body) {
          return res.json();
        }
      }
    })
    .then((data) => {
      return data.urls;
    });
}

export default async function UrlList() {
  const urls = await getUrls();

  return (
    <>
      {urls.length > 0 && (
        <Paper sx={{ mt: 2 }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Alias</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {urls.map((u) => (
                  <TableRow key={u.alias}>
                    <TableCell>
                      <Link target="_blank" href={u.alias}>
                        {u.alias}
                      </Link>
                    </TableCell>
                    <TableCell>{u.original}</TableCell>
                    <TableCell>{u.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      {urls.length === 0 && <p className="text-center">No URLs</p>}
    </>
  );
}
