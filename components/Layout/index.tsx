import React from 'react';
import { klassName } from '../../libs/utils';
import BackButton from './backButton';
import TabBar from './tabBar';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  hasTabBar?: boolean;
  canGoBack?: boolean;
}

const Layout = ({ title, children, hasTabBar, canGoBack }: LayoutProps) => {
  return (
    <div>
      <div className="fixed h-14 w-full max-w-lg border-b flex justify-center items-center bg-white text-lg text-gray-700">
        {canGoBack ? <BackButton /> : null}
        {title ? title : null}
      </div>
      <div className={klassName('pt-14', hasTabBar ? 'pb-14' : '')}>{children}</div>
      {hasTabBar ? <TabBar /> : null}
    </div>
  );
};

export default Layout;
