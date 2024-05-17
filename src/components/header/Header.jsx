import { Button } from '../Button';
import { GithubIcon } from '../icons/GtihubIcon';
import { Logo } from '../icons/Logo';
import { UploadIcon } from '../icons/UploadIcon';
import { VsIcon } from '../icons/Vs';

export const Header = () => {
  return (
    <header className="w-full h-[3.8125rem] px-[1.25rem] py-[0.6875rem] flex items-center justify-between">
      <div className="flex items-center text-white gap-[0.625rem]">
        <Logo />
        <h3>CodeSnap</h3>
      </div>
      <div className="flex gap-3">
        <Button component="button">
          <VsIcon />
          Extension
        </Button>
        <Button>
          <UploadIcon />
          Upload
        </Button>
        <Button>
          <GithubIcon />
          Login with Github
        </Button>
      </div>
    </header>
  );
};
