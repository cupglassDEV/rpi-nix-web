import { useRouteError } from "react-router-dom";
import Head from "./components/Head";
import Button from "./components/Button";
import { ArrowBack } from "@mui/icons-material";
import Md from '@uiw/react-markdown-preview';

export default function ErrorPage() {
  const error = useRouteError() as {statusText:string, message:string};
  console.error(error);

  return (<>
    <Head></Head>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>The page has doing it's <Md source={`\`\`\`js
      throw new Error()     `}></Md></p>
      <p>
        <i>{error.statusText|| error.message}</i>
      </p>
      <Button to="/"><ArrowBack/>Back to home</Button>
    </div>
    </>
  );
}