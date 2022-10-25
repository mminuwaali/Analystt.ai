import Header from '../header';
import { ReactElement, JSXElementConstructor } from 'react';


const Layout = (props: { children: ReactElement<any> }): ReactElement => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default (Element: JSXElementConstructor<any>): JSXElementConstructor<any> => (): ReactElement => {
  return (
    <Layout>
      <Element />
    </Layout>
  );
};