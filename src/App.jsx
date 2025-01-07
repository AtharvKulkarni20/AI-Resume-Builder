import NavBar from "./components/NavBar/NavBar";
import {Button} from "./components/ui/button";

export default function App() {
  return (
    <>
      <NavBar />
      <Button>ATHARV</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
