import { useCallback, useState } from "react";

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => setValue((prev) => !prev), []);
  return [value, toggleValue];
};

export default useToggle;
