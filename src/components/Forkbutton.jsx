import { CgGitFork } from 'react-icons/cg';
import { AiFillStar } from 'react-icons/ai';

const ForkButton = () => {
  return (
    <div >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="fork-btn-inner flex items-center"
      >
        <CgGitFork className="text-xl mr-1.5" />
        <AiFillStar className="text-lg" />
      </a>
    </div>
  );
};

export default ForkButton;
