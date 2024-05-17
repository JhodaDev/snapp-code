import { Editor } from './Editor';
import { LeftBar } from './left/LeftBar';

export const Dashboard = () => {
  return (
    <div className="h-dashboard w-full text-white custom-grid">
      <LeftBar />
      <div className="h-full bg-primary flex justify-center items-center rounded-2xl overflow-auto">
        <Editor />
      </div>
    </div>
  );
};
