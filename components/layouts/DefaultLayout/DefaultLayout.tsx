import * as S from './DefaultLayout.styled';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <S.Container>{children}</S.Container>;
};

export default DefaultLayout;
