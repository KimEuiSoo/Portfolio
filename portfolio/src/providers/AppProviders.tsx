import React from 'react';
import { RecoilRoot } from 'recoil';
import GlobalInitializer from './GlobalInitializer';

const AppProviders = ({children}: {children: React.ReactNode}) => {
    return(
        <RecoilRoot>
            <GlobalInitializer/>
            {children}
        </RecoilRoot>
    )
}

export default AppProviders