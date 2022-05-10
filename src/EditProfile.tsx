import { Form, useFormikContext } from "formik";
import { FC } from "react";

import { PassWordDialog2 } from "./components/page/PassWordDialog2";

const ExampleForm: FC = () => {
  const { isSubmitting } = useFormikContext();
  return (
    <div>
      <Form>
        <PassWordDialog2 />
        <button type="submit" disabled={isSubmitting}>
          保存する
        </button>
      </Form>
    </div>
  );
};

export default ExampleForm;
