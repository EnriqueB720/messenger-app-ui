import { Button } from "@components";
import { useRouter } from "next/router"


export default function Home(prop: any) {

    const router = useRouter();

  return (
    <main>
      <div style={{
        textAlign: "center",
        margin: "40px"
      }}>
        <h2>index</h2>
      <Button  onClick={() =>  router.push("/page")} variant={"solid"} color={"blue"} text="Test Button"/>
      </div>
    </main>
  )
}
