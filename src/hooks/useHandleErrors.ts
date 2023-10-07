import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useHandleErrors(): [(data: string) => void] {
  const [msg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (msg) {
      toast.error(msg);
      setErrorMsg("");
    }
  }, [msg]);

  const setError = (data: string) => setErrorMsg(data);

  return [setError];
}
