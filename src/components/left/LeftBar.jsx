import { Window } from '../Window';
import { UploadIconV2 } from '../icons/UploadIconV2';
import { Subtitle } from '../ui/Subtitle';
import { Item } from './Item';
import { Option } from './Options';
import { Switch } from './Switch';

export const LeftBar = () => {
  const optionsMarkdown = [
    {
      label: 'Default',
      action: () => console.log('Show'),
    },
    { label: 'Custom', action: () => console.log('Hide') },
  ];

  const optionsHeader = [
    {
      label: 'Show',
      action: () => console.log('Show'),
    },
    { label: 'Hide', action: () => console.log('Hide') },
  ];

  return (
    <div className="px-[1.25rem] py-[1.5625rem] overflow-auto">
      <Item title="Window">
        <Option between={true}>
          <Subtitle>Markdown</Subtitle>
          <Switch options={optionsMarkdown} />
        </Option>
        <Option className="bg-primary p-2 rounded-md cursor-pointer select-none">
          <UploadIconV2 />
          <Subtitle>Upload markdown</Subtitle>
        </Option>
        <Option between={true}>
          <Subtitle>Header</Subtitle>
          <Switch options={optionsHeader} />
        </Option>
        <Option className="flex-col w-full items-stretch">
          <Window />
          <Window type="file" />
        </Option>
      </Item>
    </div>
  );
};
