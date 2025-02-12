import Sidebar from "@/components/sidebar";

export default function Home() {

  return (
    <div className="w-100 flex flex-row p-2 m-2">
      <div className="w-25 flex flex-col">
        <Sidebar />
      </div>
      <div className="w-75 flex-col ml-2">
        <div> Header Content</div>
        <div>Main Content</div>
      </div>
    </div>
  );
}
