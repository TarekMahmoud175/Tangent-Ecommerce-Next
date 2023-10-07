import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useHandleSuccess(): [(data: string) => void] {
  const [msg, setSuccessMsg] = useState<string>("");

  useEffect(() => {
    if (msg) {
      toast.success(msg);
      setSuccessMsg("");
    }
  }, [msg]);

  const setSuccess = (data: string) => setSuccessMsg(data);

  return [setSuccess];
}