import TaskRow from "@/components/Profile/TaskRow";
import Layout from "../Layout";

const Tasks = () => {
  return (
    <Layout>
      <section className="font-poppins container mx-auto px-24 pb-16">
        <h1 className="text-4xl font-bold text-secondaryColor pt-16">Tasks</h1>
        <div className="px-16 pt-8">
          <p className="text-secondaryColor pb-4 text-xl">Today</p>
          <div className="w-full h-[1px] bg-thirdColor" />
          <TaskRow />
          <TaskRow />
        </div>

        <div className="px-16 pt-8">
          <p className="text-secondaryColor pb-4 text-xl">Last week</p>
          <div className="w-full h-[1px] bg-thirdColor" />
          <TaskRow />
          <TaskRow />
        </div>
      </section>
    </Layout>
  );
};

export default Tasks;