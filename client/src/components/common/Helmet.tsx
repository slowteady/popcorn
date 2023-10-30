import { Helmet as TitleHelmet } from 'react-helmet-async';

interface HelmetProps {
  text: string;
}

const Helmet = ({ text }: HelmetProps) => {
  return (
    <TitleHelmet>
      <title>{`${text} | POPCORN!`}</title>
    </TitleHelmet>
  );
};

export default Helmet;
