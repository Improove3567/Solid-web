import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index({isAuth}) {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/admin/dashboard");
  });
  return <div>index</div>;
}
