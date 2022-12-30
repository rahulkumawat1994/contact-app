import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("../components/homePage"));

export default function Home() {
  return <DynamicHome />;
}
