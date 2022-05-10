import "./styles.css";
import ExampleForm from "./EditProfile";
import { PassWordDialog2 } from "./components/page/PassWordDialog2";
import { Formik } from "formik";

type FormValues = {
  name: string;
  email: string;
};
export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values: FormValues) => {
          alert(`name: ${values.name}, email: ${values.email}`);
          console.log(values);
        }}
      >
        <>
          <ExampleForm />
          {/* <PassWordDialog2
            onSubmit={function (): void {
              throw new Error("Function not implemented.");
            }}
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCancel={function (): void {
              throw new Error("Function not implemented.");
            }}
          /> */}
        </>
      </Formik>
    </div>
  );
}
