'use client';

import React, { Suspense } from 'react';
import * as S from './layout.css';
import * as T from '@/types';
import * as Comp from '@/components';
import * as SubComp from './_Subs';
import AssemblyLoading from './loading';

export default function AssemblyLayout({ Tab1, Tab2, Tab3, params }: T.AssemblyLayoutProps) {
  return (
    <>
      <section className={S.mainSectionWrapper}>
        <ul>
          <Suspense fallback={<AssemblyLoading width="276px" height="483px" />}>
            <SubComp.AssemblyCard params={params} />
          </Suspense>
        </ul>
        <section className={S.rightOfMainContent}>
          <Suspense fallback={<AssemblyLoading width="806px" height="360px" />}>
            <SubComp.Charts params={params} />
          </Suspense>
          <Suspense fallback={<AssemblyLoading width="806px" height="74px" />}>
            <SubComp.TopBillCategories params={params} />
          </Suspense>
        </section>
      </section>
      <Suspense fallback={<AssemblyLoading width="100%" height="678px" />}>
        <section className={S.tabSectionWrapper}>
          <Comp.Tab tabTitleList={['공약', '의안', '약력']} tabChildrenList={[Tab1, Tab2, Tab3]} />
        </section>
      </Suspense>
    </>
  );
}
