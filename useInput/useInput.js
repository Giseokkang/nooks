export const useInput = (initialValue, num) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    if (typeof num === "number") {
      if (value.length < num) {
        setValue((initialValue = value));
      }
    }
  };
  return { value, onChange };
};
